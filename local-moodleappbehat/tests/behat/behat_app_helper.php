<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

// NOTE: no MOODLE_INTERNAL test here, this file may be required by behat before including /config.php.

require_once(__DIR__ . '/../../../../lib/behat/behat_base.php');

use Behat\Mink\Exception\DriverException;
use Moodle\BehatExtension\Exception\SkippedException;

/**
 * Behat app listener.
 */
interface behat_app_listener {

    /**
     * Called when the app is loaded.
     */
    function on_app_load(): void;

    /**
     * Called before the app is unloaded.
     */
    function on_app_unload(): void;

}

/**
 * A trait containing functionality used by the behat app context.
 *
 * @package    core
 * @category   test
 * @copyright  2018 The Open University
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class behat_app_helper extends behat_base {

    /** @var stdClass Object with data about launched Ionic instance (if any) */
    protected static $ionicrunning = null;

    /** @var array */
    protected static $listeners = [];

    /** @var bool Whether the app is running or not */
    protected $apprunning = false;

    /** @var string */
    protected $lmsversion = null;

    /**
     * Register listener.
     *
     * @param behat_app_listener $listener Listener.
     * @return Closure Unregister function.
     */
    public static function listen(behat_app_listener $listener): Closure {
        self::$listeners[] = $listener;

        return function () use ($listener) {
            $index = array_search($listener, self::$listeners);

            if ($index !== false) {
                array_splice(self::$listeners, $index, 1);
            }
        };
    }

    /**
     * Checks if the current OS is Windows, from the point of view of task-executing-and-killing.
     *
     * @return bool True if Windows
     */
    protected static function is_windows() : bool {
        return strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
    }

    /**
     * Called from behat_hooks when a new scenario starts, if it has the app tag.
     *
     * This updates Moodle configuration and starts Ionic running, if it isn't already.
     */
    public function start_scenario() {
        $this->check_behat_setup();
        $this->fix_moodle_setup();
        $this->ionicurl = $this->start_or_reuse_ionic();
    }

    /**
     * Checks the Behat setup - tags and configuration.
     *
     * @throws DriverException
     */
    protected function check_behat_setup() {
        global $CFG;

        // Check JavaScript is enabled.
        if (!$this->running_javascript()) {
            throw new DriverException('The app requires JavaScript.');
        }

        // Check the config settings are defined.
        if (empty($CFG->behat_ionic_wwwroot) && empty($CFG->behat_ionic_dirroot)) {
            throw new DriverException('$CFG->behat_ionic_wwwroot or $CFG->behat_ionic_dirroot must be defined.');
        }
    }

    /**
     * Fixes the Moodle admin settings to allow Moodle App use (if not already correct).
     *
     * @throws dml_exception If there is any problem changing Moodle settings
     */
    protected function fix_moodle_setup() {
        global $CFG, $DB;

        // Configure Moodle settings to enable app web services.
        if (!$CFG->enablewebservices) {
            set_config('enablewebservices', 1);
        }
        if (!$CFG->enablemobilewebservice) {
            set_config('enablemobilewebservice', 1);
        }

        // Add 'Create token' and 'Use REST webservice' permissions to authenticated user role.
        $userroleid = $DB->get_field('role', 'id', ['shortname' => 'user']);
        $systemcontext = \context_system::instance();
        role_change_permission($userroleid, $systemcontext, 'moodle/webservice:createtoken', CAP_ALLOW);
        role_change_permission($userroleid, $systemcontext, 'webservice/rest:use', CAP_ALLOW);

        // Check the value of the 'webserviceprotocols' config option. Due to weird behaviour
        // in Behat with regard to config variables that aren't defined in a settings.php, the
        // value in $CFG here may reflect a previous run, so get it direct from the database
        // instead.
        $field = $DB->get_field('config', 'value', ['name' => 'webserviceprotocols'], IGNORE_MISSING);
        if (empty($field)) {
            $protocols = [];
        } else {
            $protocols = explode(',', $field);
        }
        if (!in_array('rest', $protocols)) {
            $protocols[] = 'rest';
            set_config('webserviceprotocols', implode(',', $protocols));
        }

        // Enable mobile service.
        require_once($CFG->dirroot . '/webservice/lib.php');
        $webservicemanager = new webservice();
        $service = $webservicemanager->get_external_service_by_shortname(MOODLE_OFFICIAL_MOBILE_SERVICE, MUST_EXIST);

        if (!$service->enabled) {
            $service->enabled = 1;
            $webservicemanager->update_external_service($service);
        }
    }

    /**
     * Starts an Ionic server if necessary, or uses an existing one.
     *
     * @return string URL to Ionic server
     * @throws DriverException If there's a system error starting Ionic
     */
    protected function start_or_reuse_ionic() {
        global $CFG;

        if (empty($CFG->behat_ionic_dirroot) && !empty($CFG->behat_ionic_wwwroot)) {
            // Use supplied Ionic server which should already be running.
            $url = $CFG->behat_ionic_wwwroot;
        } else if (self::$ionicrunning) {
            // Use existing Ionic instance launched previously.
            $url = self::$ionicrunning->url;
        } else {
            // Open Ionic process in relevant path.
            $path = realpath($CFG->behat_ionic_dirroot);
            $stderrfile = $CFG->dataroot . '/behat/ionic-stderr.log';
            $prefix = '';
            // Except on Windows, use 'exec' so that we get the pid of the actual Node process
            // and not the shell it uses to execute. You can't do exec on Windows; there is a
            // bypass_shell option but it is not the same thing and isn't usable here.
            if (!self::is_windows()) {
                $prefix = 'exec ';
            }
            $process = proc_open($prefix . 'ionic serve --no-interactive --no-open',
                    [['pipe', 'r'], ['pipe', 'w'], ['file', $stderrfile, 'w']], $pipes, $path);
            if ($process === false) {
                throw new DriverException('Error starting Ionic process');
            }
            fclose($pipes[0]);

            // Get pid - we will need this to kill the process.
            $status = proc_get_status($process);
            $pid = $status['pid'];

            // Read data from stdout until the server comes online.
            // Note: On Windows it is impossible to read simultaneously from stderr and stdout
            // because stream_select and non-blocking I/O don't work on process pipes, so that is
            // why stderr was redirected to a file instead. Also, this code is simpler.
            $url = null;
            $stdoutlog = '';
            while (true) {
                $line = fgets($pipes[1], 4096);
                if ($line === false) {
                    break;
                }

                $stdoutlog .= $line;

                if (preg_match('~^\s*Local: (http\S*)~', $line, $matches)) {
                    $url = $matches[1];
                    break;
                }
            }

            // If it failed, close the pipes and the process.
            if (!$url) {
                fclose($pipes[1]);
                proc_close($process);
                $logpath = $CFG->dataroot . '/behat/ionic-start.log';
                $stderrlog = file_get_contents($stderrfile);
                @unlink($stderrfile);
                file_put_contents($logpath,
                        "Ionic startup log from " . date('c') .
                        "\n\n----STDOUT----\n$stdoutlog\n\n----STDERR----\n$stderrlog");
                throw new DriverException('Unable to start Ionic. See ' . $logpath);
            }

            // Remember the URL, so we can reuse it next time, and other details so we can kill
            // the process.
            self::$ionicrunning = (object)['url' => $url, 'process' => $process, 'pipes' => $pipes,
                    'pid' => $pid];
            $url = self::$ionicrunning->url;
        }
        return $url;
    }

    /**
     * Closes Ionic (if it was started) at end of test suite.
     *
     * @AfterSuite
     */
    public static function close_ionic() {
        if (self::$ionicrunning) {
            fclose(self::$ionicrunning->pipes[1]);

            if (self::is_windows()) {
                // Using proc_terminate here does not work. It terminates the process but not any
                // other processes it might have launched. Instead, we need to use an OS-specific
                // mechanism to kill the process and children based on its pid.
                exec('taskkill /F /T /PID ' . self::$ionicrunning->pid);
            } else {
                // On Unix this actually works, although only due to the 'exec' command inserted
                // above.
                proc_terminate(self::$ionicrunning->process);
            }
            self::$ionicrunning = null;
        }
    }

    /**
     * Goes to the app page and then sets up some initial JavaScript so we can use it.
     *
     * @param string $url App URL
     * @throws DriverException If the app fails to load properly
     */
    protected function prepare_browser(array $options = []) {
        $restart = $options['restart'] ?? true;

        if ($restart) {
            if ($this->apprunning) {
                $this->notify_unload();
            }

            // Restart the browser and set its size.
            $this->getSession()->restart();
            $this->resize_window($this->windowsize, true);

            if (empty($this->ionicurl)) {
                $this->ionicurl = $this->start_or_reuse_ionic();
            }

            // Visit the Ionic URL.
            $this->getSession()->visit($this->ionicurl);
            $this->notify_load();

            $this->apprunning = true;
        }

        // Wait the application to load.
        $this->spin(function($context) {
            $title = $context->getSession()->getPage()->find('xpath', '//title');

            if ($title) {
                $text = $title->getHtml();

                if ($text === 'Moodle App') {
                    return true;
                }
            }

            throw new DriverException('Moodle App not found in browser');
        }, false, 60);

        try {
            // Init Behat JavaScript runtime.

            $initOptions = new StdClass();
            $initOptions->skipOnBoarding = $options['skiponboarding'] ?? true;
            $initOptions->configOverrides = $this->appconfig;

            $this->js('window.behatInit(' . json_encode($initOptions) . ');');
        } catch (Exception $error) {
            throw new DriverException('Moodle App not running or not running on Automated mode.');
        }

        if ($restart) {
            // Assert initial page.
            $this->spin(function($context) {
                $page = $context->getSession()->getPage();
                $element = $page->find('xpath', '//page-core-login-site//input[@name="url"]');

                if ($element) {
                    // Login screen found.
                    return true;
                }

                if ($page->find('xpath', '//page-core-mainmenu')) {
                    // Main menu found.
                    return true;
                }

                throw new DriverException('Moodle App not launched properly');
            }, false, 60);
        }

        // Continue only after JS finishes.
        $this->wait_for_pending_js();
    }

    /**
     * Parse an element locator string.
     *
     * @param string $text Element locator string.
     * @return JSON of the locator.
     */
    public function parse_element_locator(string $text): string {
        preg_match(
            '/^"((?:[^"]|\\")*?)"(?: "([^"]*?)")?(?: (near|within) "((?:[^"]|\\")*?)"(?: "([^"]*?)")?)?$/',
            $text,
            $matches
        );

        $locator = [
            'text' => str_replace('\\"', '"', $matches[1]),
            'selector' => $matches[2] ?? null,
        ];

        if (!empty($matches[3])) {
            $locator[$matches[3]] = (object) [
                'text' => str_replace('\\"', '"', $matches[4]),
                'selector' => $matches[5] ?? null,
            ];
        }

        return json_encode((object) $locator);
    }

    /**
     * Replaces $WWWROOT for the url of the Moodle site.
     *
     * @Transform /^(.*\$WWWROOT.*)$/
     * @param string $text Text.
     * @return string
     */
    public function replace_wwwroot($text) {
        global $CFG;

        return str_replace('$WWWROOT', $CFG->behat_wwwroot, $text);
    }

    /**
     * Replace arguments with the format "${activity:field}" from a string, where "activity" is
     * the idnumber of an activity and "field" is the activity's field to get replacement from.
     *
     * At the moment, the only field supported is "cmid", the id of the course module for this activity.
     *
     * @param string $text Original text.
     * @return string Text with arguments replaced.
     */
    protected function replace_arguments(string $text): string {
        global $DB;

        preg_match_all("/\\$\\{([^:}]+):([^}]+)\\}/", $text, $matches);

        foreach ($matches[0] as $index => $match) {
            switch ($matches[2][$index]) {
                case 'cmid':
                    $coursemodule = $DB->get_record('course_modules', ['idnumber' => $matches[1][$index]]);
                    $text = str_replace($match, $coursemodule->id, $text);

                    break;
            }
        }

        return $text;
    }

    /**
     * Notify to listeners that the app was just loaded.
     */
    protected function notify_load(): void {
        foreach (self::$listeners as $listener) {
            $listener->on_app_load();
        }
    }

    /**
     * Notify to listeners that the app is about to be unloaded.
     */
    protected function notify_unload(): void {
        foreach (self::$listeners as $listener) {
            $listener->on_app_unload();
        }
    }

    /**
     * Evaluate and execute scripts checking for promises if needed.
     *
     * @param string $script
     * @return mixed Resolved promise result.
     */
    protected function js(string $script) {
        $scriptnoreturn = preg_replace('/^return\s+/', '', $script);
        $scriptnoreturn = preg_replace('/;$/', '', $scriptnoreturn);

        if (!preg_match('/^await\s+/', $scriptnoreturn)) {
            // No async.
            return $this->evaluate_script($script);
        }

        $script = preg_replace('/^await\s+/', '', $scriptnoreturn);

        $start = microtime(true);
        $promisevariable = 'PROMISE_RESULT_' . time();
        $timeout = self::get_extended_timeout();

        $res = $this->evaluate_script("Promise.resolve($script)
            .then(result => window.$promisevariable = result)
            .catch(error => window.$promisevariable = 'Async code rejected: ' + error?.message);");

        do {
            if (microtime(true) - $start > $timeout) {
                throw new DriverException("Async script not resolved after $timeout seconds");
            }

            // 0.1 seconds.
            usleep(100000);
        } while (!$this->evaluate_script("return '$promisevariable' in window;"));

        $result = $this->evaluate_script("return window.$promisevariable;");

        $this->evaluate_script("delete window.$promisevariable;");

        return $result;
    }

    /**
     * Opens a custom URL for automatic login and redirect from the Moodle App (and waits to finish.)
     *
     * @param string $username Of the user that needs to be logged in.
     * @param string $path To redirect the user.
     * @param string $successXPath If a path is declared, the XPath of the element to lookat after redirect.
     */
    protected function open_moodleapp_custom_login_url($username, $path = '', string $successXPath = '') {
        global $CFG, $DB;

        require_once($CFG->libdir.'/externallib.php');
        require_once($CFG->libdir.'/moodlelib.php');

        // Ensure the user exists.
        $userid = $DB->get_field('user', 'id', [ 'username' => $username ]);
        if (!$userid) {
            throw new DriverException("User '$username' not found");
        }

        // Get or create the user token.
        $service = $DB->get_record('external_services', ['shortname' => 'moodle_mobile_app']);

        $token_params = [
            'userid' => $userid,
            'externalserviceid' => $service->id,
        ];
        $usertoken = $DB->get_record('external_tokens', $token_params);
        if (!$usertoken) {
            $context = context_system::instance();
            $token = external_generate_token(EXTERNAL_TOKEN_PERMANENT, $service, $userid, $context);
            $token_params['token'] = $token;
            $privatetoken = $DB->get_field('external_tokens', 'privatetoken', $token_params);
        } else {
            $token = $usertoken->token;
            $privatetoken = $usertoken->privatetoken;
        }

        // Generate custom URL.
        $parsed_url = parse_url($CFG->behat_wwwroot);
        $domain = $parsed_url['host'] ?? '';
        $rootpath = $parsed_url['path'] ?? '';
        $url = $this->get_mobile_url_scheme() . "://$username@$domain$rootpath?token=$token&privatetoken=$privatetoken";

        if (!empty($path)) {
            $url .= '&redirect='.urlencode($CFG->behat_wwwroot.$path);
        } else {
            $successXPath = '//page-core-mainmenu';
        }

        $this->handle_url($url, $successXPath);
    }

    /**
     * Opens a custom URL on the Moodle App (and waits to finish.)
     *
     * @param string $path To navigate.
     * @param string $successXPath The XPath of the element to lookat after navigation.
     */
    protected function open_moodleapp_custom_url(string $path, string $successXPath = '') {
        global $CFG;

        $urlscheme = $this->get_mobile_url_scheme();
        $url = "$urlscheme://link=" . urlencode($CFG->behat_wwwroot.$path);

        $this->handle_url($url);
    }

    /**
     * Handles the custom URL on the Moodle App (and waits to finish.)
     *
     * @param string $customurl To navigate.
     * @param string $successXPath The XPath of the element to lookat after navigation.
     */
    protected function handle_url(string $customurl, string $successXPath = '') {
        // Instead of using evaluate_async_script, we wait for the path to load.
        $result = $this->js("return await window.behat.handleCustomURL('$customurl');");

        if ($result !== 'OK') {
            throw new DriverException('Error handling url - ' . $result);
        }

        if (!empty($successXPath)) {
            // Wait until the page appears.
            $this->spin(
                function($context, $args) use ($successXPath) {
                    $found = $context->getSession()->getPage()->find('xpath', $successXPath);
                    if ($found) {
                        return true;
                    }
                    throw new DriverException('Moodle App custom URL page not loaded');
                }, false, 30);
        }

        $this->wait_for_pending_js();
    }

    /**
     * Returns the current mobile url scheme of the site.
     */
    protected function get_mobile_url_scheme() {
        $mobilesettings = get_config('tool_mobile');

        return !empty($mobilesettings->forcedurlscheme) ? $mobilesettings->forcedurlscheme : 'moodlemobile';
    }

    /**
     * Get a coursemodule from an activity name or idnumber with course.
     *
     * @param string $activity
     * @param string $identifier
     * @param string $coursename
     * @return cm_info
     */
    protected function get_cm_by_activity_name_and_course(string $activity, string $identifier, string $coursename): cm_info {
        global $DB;

        $courseid = $this->get_course_id($coursename);
        if (!$courseid) {
            throw new DriverException("Course '$coursename' not found");
        }

        if ($activity === 'assignment') {
            $activity = 'assign';
        }

        $cmtable = new \core\dml\table('course_modules', 'cm', 'cm');
        $cmfrom = $cmtable->get_from_sql();

        $acttable = new \core\dml\table($activity, 'a', 'a');
        $actselect = $acttable->get_field_select();
        $actfrom = $acttable->get_from_sql();

        $sql = <<<EOF
    SELECT cm.id as cmid
      FROM {$cmfrom}
INNER JOIN {modules} m ON m.id = cm.module AND m.name = :modname
INNER JOIN {$actfrom} ON cm.instance = a.id AND cm.course = :courseid
     WHERE cm.idnumber = :idnumber OR a.name = :name
EOF;

        $result = $DB->get_record_sql($sql, [
            'modname' => $activity,
            'idnumber' => $identifier,
            'name' => $identifier,
            'courseid' => $courseid,
        ], MUST_EXIST);

        return get_fast_modinfo($courseid)->get_cm($result->cmid);
    }

    /**
     * This function will skip scenarios based on @lms_from and @lms_upto tags and also missing @app tags.
     */
    public function check_tags() {
        if (!$this->has_tag('app')) {
            throw new DriverException('Requires @app tag on scenario or feature.');
        }

        if (is_null($this->lmsversion)) {
            global $CFG;

            $version = trim($CFG->release);
            $versionarr = explode(" ", $version);
            if (!empty($versionarr)) {
                $version = $versionarr[0];
            }

            // Replace everything but numbers and dots by dots.
            $version = preg_replace('/[^\.\d]/', '.', $version);
            // Combine multiple dots in one.
            $version = preg_replace('/(\.{2,})/', '.', $version);
            // Trim possible leading and trailing dots.
            $this->lmsversion = trim($version, '.');
        }

        if ($tag = $this->get_first_restricted_version_tag()) {
            // Skip this test.
            throw new SkippedException("LMS version $this->lmsversion is not compatible with tag @$tag.");
        }
    }

    /**
     * Gets if version is incompatible with the @lms_from and @lms_upto tags.
     *
     * @return string If scenario has any version incompatible tag, return it.
     */
    protected function get_first_restricted_version_tag(): ?string {
        $usedtags = behat_hooks::get_tags_for_scenario();

        $detectedversioncount = substr_count($this->lmsversion, '.');

        // Set up relevant tags for each version.
        $usedtags = array_keys($usedtags);
        foreach ($usedtags as $usedtag) {
            if (!preg_match('~^lms_(from|upto)([0-9]+(?:\.[0-9]+)*)$~', $usedtag, $matches)) {
                // No match, ignore.
                continue;
            }

            $direction = $matches[1];
            $version = $matches[2];

            $versioncount = substr_count($version, '.');

            // Compare versions on same length.
            $detected = $this->lmsversion;
            if ($versioncount < $detectedversioncount) {
                $detected_parts = explode('.', $this->lmsversion);
                array_splice($detected_parts, $versioncount - $detectedversioncount);
                $detected = implode('.', $detected_parts);
            }

            $compare = version_compare($detected, $version);
            // Installed version OLDER than the one being considered, so do not
            // include any scenarios that only run from the considered version up.
            if ($compare === -1 && $direction === 'from') {
                return $usedtag;
            }
            // Installed version NEWER than the one being considered, so do not
            // include any scenarios that only run up to that version.
            if ($compare === 1 && $direction === 'upto') {
                return $usedtag;
            }
        }

        return null;
    }
}
