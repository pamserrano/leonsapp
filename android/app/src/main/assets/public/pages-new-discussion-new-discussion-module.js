(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-discussion-new-discussion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/new-discussion/new-discussion.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/new-discussion/new-discussion.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'addon.mod_forum.addanewdiscussion' | translate }}</h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <!-- The context menu will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content [core-swipe-navigation]=\"discussions\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!groupsLoaded\" (ionRefresh)=\"refreshGroups($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"groupsLoaded\">\n        <form *ngIf=\"showForm\" #newDiscFormEl>\n            <ion-item>\n                <ion-label position=\"stacked\">{{ 'addon.mod_forum.subject' | translate }}</ion-label>\n                <ion-input [(ngModel)]=\"newDiscussion.subject\" type=\"text\" [placeholder]=\"'addon.mod_forum.subject' | translate\"\n                    name=\"subject\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">{{ 'addon.mod_forum.message' | translate }}</ion-label>\n                <core-rich-text-editor name=\"addon_mod_forum_new_discussion\" contextLevel=\"module\" elementId=\"message\"\n                    [control]=\"messageControl\" [placeholder]=\"'addon.mod_forum.message' | translate\" [component]=\"component\"\n                    [componentId]=\"forum.cmid\" [autoSave]=\"true\" [contextInstanceId]=\"forum.cmid\"\n                    (contentChanged)=\"onMessageChange($event)\">\n                </core-rich-text-editor>\n            </ion-item>\n            <ion-item button class=\"divider ion-text-wrap\" (click)=\"toggleAdvanced()\" detail=\"false\" [attr.aria-expanded]=\"advanced\"\n                [attr.aria-label]=\"(advanced ? 'core.hideadvanced' : 'core.showadvanced') | translate\" role=\"heading\"\n                aria-controls=\"addon-mod-forum-new-discussion-advanced\">\n                <ion-icon name=\"fas-chevron-right\" flip-rtl slot=\"start\" aria-hidden=\"true\" class=\"expandable-status-icon\"\n                    [class.expandable-status-icon-expanded]=\"advanced\"></ion-icon>\n                <ion-label>\n                    <h2>{{ 'addon.mod_forum.advanced' | translate }}</h2>\n                </ion-label>\n            </ion-item>\n            <div *ngIf=\"advanced\" id=\"addon-mod-forum-new-discussion-advanced\">\n                <ion-item *ngIf=\"showGroups && groupIds.length > 1 && accessInfo.cancanposttomygroups\">\n                    <ion-label>{{ 'addon.mod_forum.posttomygroups' | translate }}</ion-label>\n                    <ion-toggle [(ngModel)]=\"newDiscussion.postToAllGroups\" name=\"postallgroups\"></ion-toggle>\n                </ion-item>\n                <ion-item *ngIf=\"showGroups\" class=\"core-edit-set-group\">\n                    <ion-label id=\"addon-mod-forum-groupslabel\">{{ 'addon.mod_forum.group' | translate }}</ion-label>\n                    <ion-select [(ngModel)]=\"newDiscussion.groupId\" [disabled]=\"newDiscussion.postToAllGroups\"\n                        aria-labelledby=\"addon-mod-forum-groupslabel\" interface=\"action-sheet\" name=\"groupid\"\n                        [interfaceOptions]=\"{header: 'addon.mod_forum.group' | translate}\">\n                        <ion-select-option *ngFor=\"let group of groups\" [value]=\"group.id\">{{ group.name }}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>{{ 'addon.mod_forum.discussionsubscription' | translate }}</ion-label>\n                    <ion-toggle [(ngModel)]=\"newDiscussion.subscribe\" name=\"subscribe\"></ion-toggle>\n                </ion-item>\n                <ion-item *ngIf=\"canPin\">\n                    <ion-label>{{ 'addon.mod_forum.discussionpinned' | translate }}</ion-label>\n                    <ion-toggle [(ngModel)]=\"newDiscussion.pin\" name=\"pin\"></ion-toggle>\n                </ion-item>\n                <core-attachments *ngIf=\"canCreateAttachments && forum && forum.maxattachments > 0\" [files]=\"newDiscussion.files\"\n                    [maxSize]=\"forum.maxbytes\" [maxSubmissions]=\"forum.maxattachments\" [component]=\"component\" [componentId]=\"forum.cmid\"\n                    [allowOffline]=\"true\" [courseId]=\"courseId\">\n                </core-attachments>\n            </div>\n            <ion-item>\n                <ion-label>\n                    <ion-row>\n                        <ion-col *ngIf=\"hasOffline\">\n                            <ion-button expand=\"block\" fill=\"outline\" (click)=\"discard()\">{{ 'core.discard' | translate }}</ion-button>\n                        </ion-col>\n                        <ion-col>\n                            <ion-button expand=\"block\" [disabled]=\"newDiscussion.subject == '' || newDiscussion.message == null\"\n                                (click)=\"add()\">\n                                {{ 'addon.mod_forum.posttoforum' | translate }}\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-label>\n            </ion-item>\n        </form>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/forum/pages/new-discussion/new-discussion.module.ts":
/*!****************************************************************************!*\
  !*** ./src/addons/mod/forum/pages/new-discussion/new-discussion.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddonForumNewDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonForumNewDiscussionPageModule", function() { return AddonForumNewDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/mod/forum/components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _new_discussion_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-discussion.page */ "./src/addons/mod/forum/pages/new-discussion/new-discussion.page.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.








const routes = [{
        path: '',
        component: _new_discussion_page__WEBPACK_IMPORTED_MODULE_7__["AddonModForumNewDiscussionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    }];
let AddonForumNewDiscussionPageModule = class AddonForumNewDiscussionPageModule {
};
AddonForumNewDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
            _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__["AddonModForumComponentsModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _new_discussion_page__WEBPACK_IMPORTED_MODULE_7__["AddonModForumNewDiscussionPage"],
        ],
    })
], AddonForumNewDiscussionPageModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/new-discussion/new-discussion.page.ts":
/*!**************************************************************************!*\
  !*** ./src/addons/mod/forum/pages/new-discussion/new-discussion.page.ts ***!
  \**************************************************************************/
/*! exports provided: AddonModForumNewDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumNewDiscussionPage", function() { return AddonModForumNewDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/mod/forum/services/forum */ "./src/addons/mod/forum/services/forum.ts");
/* harmony import */ var _features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/editor/components/rich-text-editor/rich-text-editor */ "./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts");
/* harmony import */ var _addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/mod/forum/services/forum-sync */ "./src/addons/mod/forum/services/forum-sync.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _addons_mod_forum_services_forum_offline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @addons/mod/forum/services/forum-offline */ "./src/addons/mod/forum/services/forum-offline.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @addons/mod/forum/services/forum-helper */ "./src/addons/mod/forum/services/forum-helper.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../classes/forum-discussions-swipe-manager */ "./src/addons/mod/forum/classes/forum-discussions-swipe-manager.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../classes/forum-discussions-source */ "./src/addons/mod/forum/classes/forum-discussions-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
























/**
 * Page that displays the new discussion form.
 */
let AddonModForumNewDiscussionPage = class AddonModForumNewDiscussionPage {
    constructor(route, splitView) {
        this.route = route;
        this.splitView = splitView;
        this.component = _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].COMPONENT;
        this.messageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.groupsLoaded = false;
        this.showGroups = false;
        this.hasOffline = false;
        this.canCreateAttachments = true; // Assume we can by default.
        this.canPin = false;
        this.showForm = false;
        this.groups = [];
        this.groupIds = [];
        this.newDiscussion = {
            subject: '',
            message: null,
            postToAllGroups: false,
            groupId: 0,
            subscribe: true,
            pin: false,
            files: [],
        };
        this.advanced = false; // Display all form fields.
        this.accessInfo = {};
        this.isDestroyed = false;
        this.forceLeave = false;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const routeData = this.route.snapshot.data;
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.forumId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('forumId');
                this.timeCreated = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('timeCreated');
                if (this.timeCreated !== 0 && ((_a = routeData.swipeEnabled) !== null && _a !== void 0 ? _a : true)) {
                    const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_23__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__["AddonModForumDiscussionsSource"], [this.courseId, this.cmId, (_b = routeData.discussionsPathPrefix) !== null && _b !== void 0 ? _b : '']);
                    this.discussions = new AddonModForumNewDiscussionDiscussionsSwipeManager(source);
                    yield this.discussions.start();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal(error);
                this.goBack();
                return;
            }
            this.fetchDiscussionData().finally(() => {
                this.groupsLoaded = true;
            });
        });
    }
    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter() {
        if (this.syncObserver) {
            // Already setup.
            return;
        }
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__["AddonModForumSyncProvider"].AUTO_SYNCED, data => {
            if (data.forumId == this.forumId && data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteUserId()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showAlertTranslated('core.notice', 'core.contenteditingsynced');
                this.returnToDiscussions();
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Fetch if forum uses groups and the groups it uses.
     *
     * @param refresh Whether we're refreshing data.
     * @return Promise resolved when done.
     */
    fetchDiscussionData(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const mode = yield _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].getActivityGroupMode(this.cmId);
                const promises = [];
                if (mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].SEPARATEGROUPS || mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].VISIBLEGROUPS) {
                    promises.push(_services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].instance
                        .getActivityAllowedGroups(this.cmId)
                        .then((result) => {
                        let promise;
                        if (mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].VISIBLEGROUPS) {
                            // We need to check which of the returned groups the user can post to.
                            promise = this.validateVisibleGroups(result.groups);
                        }
                        else {
                            // WS already filters groups, no need to do it ourselves. Add "All participants" if needed.
                            promise = this.addAllParticipantsOption(result.groups, true);
                        }
                        // eslint-disable-next-line promise/no-nesting
                        return promise.then((forumGroups) => {
                            if (forumGroups.length > 0) {
                                this.groups = forumGroups;
                                this.groupIds = forumGroups.map((group) => group.id).filter((id) => id > 0);
                                // Do not override group id.
                                this.newDiscussion.groupId = this.newDiscussion.groupId || forumGroups[0].id;
                                this.showGroups = true;
                                if (this.groupIds.length <= 1) {
                                    this.newDiscussion.postToAllGroups = false;
                                }
                                return;
                            }
                            else {
                                const message = mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].SEPARATEGROUPS ?
                                    'addon.mod_forum.cannotadddiscussionall' : 'addon.mod_forum.cannotadddiscussion';
                                throw new Error(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant(message));
                            }
                        });
                    }));
                }
                else {
                    this.showGroups = false;
                    this.newDiscussion.postToAllGroups = false;
                    // Use the canAddDiscussion WS to check if the user can add attachments and pin discussions.
                    promises.push(_services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].instance
                        .canAddDiscussionToAll(this.forumId, { cmId: this.cmId })
                        .then((response) => {
                        this.canPin = !!response.canpindiscussions;
                        this.canCreateAttachments = !!response.cancreateattachment;
                        return;
                    })));
                }
                // Get forum.
                promises.push(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].getForum(this.courseId, this.cmId).then((forum) => this.forum = forum));
                // Get access information.
                promises.push(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].instance
                    .getAccessInformation(this.forumId, { cmId: this.cmId })
                    .then((accessInfo) => this.accessInfo = accessInfo));
                yield Promise.all(promises);
                // If editing a discussion, get offline data.
                if (this.timeCreated && !refresh) {
                    this.syncId = _addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__["AddonModForumSync"].getForumSyncId(this.forumId);
                    yield _addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__["AddonModForumSync"].waitForSync(this.syncId).then(() => {
                        // Do not block if the scope is already destroyed.
                        if (!this.isDestroyed) {
                            _services_sync__WEBPACK_IMPORTED_MODULE_12__["CoreSync"].blockOperation(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].COMPONENT, this.syncId);
                        }
                        // eslint-disable-next-line promise/no-nesting
                        return _addons_mod_forum_services_forum_offline__WEBPACK_IMPORTED_MODULE_13__["AddonModForumOffline"].instance
                            .getNewDiscussion(this.forumId, this.timeCreated)
                            .then((discussion) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.hasOffline = true;
                            discussion.options = discussion.options || {};
                            if (discussion.groupid == _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].ALL_GROUPS) {
                                this.newDiscussion.groupId = this.groups[0].id;
                                this.newDiscussion.postToAllGroups = true;
                            }
                            else {
                                this.newDiscussion.groupId = discussion.groupid;
                                this.newDiscussion.postToAllGroups = false;
                            }
                            this.newDiscussion.subject = discussion.subject;
                            this.newDiscussion.message = discussion.message;
                            this.newDiscussion.subscribe = !!discussion.options.discussionsubscribe;
                            this.newDiscussion.pin = !!discussion.options.discussionpinned;
                            this.messageControl.setValue(discussion.message);
                            // Treat offline attachments if any.
                            if (typeof discussion.options.attachmentsid === 'object' && discussion.options.attachmentsid.offline) {
                                const files = yield _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].getNewDiscussionStoredFiles(this.forumId, this.timeCreated);
                                this.newDiscussion.files = files;
                            }
                            // Show advanced fields by default if any of them has not the default value.
                            if (!this.newDiscussion.subscribe ||
                                this.newDiscussion.pin ||
                                this.newDiscussion.files.length ||
                                this.groups.length > 0 && this.newDiscussion.groupId != this.groups[0].id ||
                                this.newDiscussion.postToAllGroups) {
                                this.advanced = true;
                            }
                            return;
                        }));
                    });
                }
                if (!this.originalData) {
                    // Initialize original data.
                    this.originalData = {
                        subject: this.newDiscussion.subject,
                        message: this.newDiscussion.message,
                        files: this.newDiscussion.files.slice(),
                    };
                }
                this.showForm = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_forum.errorgetgroups', true);
                this.showForm = false;
            }
        });
    }
    /**
     * Validate which of the groups returned by getActivityAllowedGroups in visible groups should be shown to post to.
     *
     * @param forumGroups Forum groups.
     * @return Promise resolved with the list of groups.
     */
    validateVisibleGroups(forumGroups) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let response;
            // We first check if the user can post to all the groups.
            try {
                response = yield _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
            }
            catch (error) {
                // The call failed, let's assume he can't.
                response = {
                    status: false,
                    canpindiscussions: false,
                    cancreateattachment: true,
                };
            }
            this.canPin = !!response.canpindiscussions;
            this.canCreateAttachments = !!response.cancreateattachment;
            // The user can post to all groups, add the "All participants" option and return them all.
            if (response.status) {
                return this.addAllParticipantsOption(forumGroups, false);
            }
            // The user can't post to all groups, let's check which groups he can post to.
            const promises = [];
            const filtered = [];
            forumGroups.forEach((group) => {
                promises.push(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].instance
                    .canAddDiscussion(this.forumId, group.id, { cmId: this.cmId })
                    // The call failed, let's return true so the group is shown.
                    // If the user can't post to it an error will be shown when he tries to add the discussion.
                    .catch(() => ({ status: true }))
                    .then((response) => {
                    if (response.status) {
                        filtered.push(group);
                    }
                    return;
                }));
            });
            yield Promise.all(promises);
            return filtered;
        });
    }
    /**
     * Filter forum groups, returning only those that are inside user groups.
     *
     * @param forumGroups Forum groups.
     * @param userGroups User groups.
     * @return Filtered groups.
     */
    filterGroups(forumGroups, userGroups) {
        const userGroupsIds = userGroups.map(group => group.id);
        return forumGroups.filter(forumGroup => userGroupsIds.indexOf(forumGroup.id) > -1);
    }
    /**
     * Add the "All participants" option to a list of groups if the user can add a discussion to all participants.
     *
     * @param groups Groups.
     * @param check True to check if the user can add a discussion to all participants.
     * @return Promise resolved with the list of groups.
     */
    addAllParticipantsOption(groups, check) {
        let promise;
        if (check) {
            // We need to check if the user can add a discussion to all participants.
            promise = _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId }).then((response) => {
                this.canPin = !!response.canpindiscussions;
                this.canCreateAttachments = !!response.cancreateattachment;
                return response.status;
            }).catch(() => 
            // The call failed, let's assume he can't.
            false);
        }
        else {
            // No need to check, assume the user can.
            promise = Promise.resolve(true);
        }
        return promise.then((canAdd) => {
            if (canAdd) {
                groups.unshift({
                    courseid: this.courseId,
                    id: _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].ALL_PARTICIPANTS,
                    name: _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.allparticipants'),
                });
            }
            return groups;
        });
    }
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    refreshGroups(refresher) {
        const promises = [
            _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].invalidateActivityGroupMode(this.cmId),
            _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].invalidateActivityAllowedGroups(this.cmId),
            _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].invalidateCanAddDiscussion(this.forumId),
        ];
        Promise.all(promises).finally(() => {
            this.fetchDiscussionData(true).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Convenience function to update or return to discussions depending on device.
     *
     * @param discussionIds Ids of the new discussions.
     * @param discTimecreated The time created of the discussion (if offline).
     */
    returnToDiscussions(discussionIds, discTimecreated) {
        var _a;
        this.forceLeave = true;
        // Delete the local files from the tmp folder.
        _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_16__["CoreFileUploader"].clearTmpFiles(this.newDiscussion.files);
        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].NEW_DISCUSSION_EVENT, {
            forumId: this.forumId,
            cmId: this.cmId,
            discussionIds: discussionIds,
            discTimecreated: discTimecreated,
        }, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            // Empty form.
            this.hasOffline = false;
            this.newDiscussion.subject = '';
            this.newDiscussion.message = null;
            this.newDiscussion.files = [];
            this.newDiscussion.postToAllGroups = false;
            this.messageEditor.clearText();
            this.originalData = _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].clone(this.newDiscussion);
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
        }
    }
    /**
     * Message changed.
     *
     * @param text The new text.
     */
    onMessageChange(text) {
        this.newDiscussion.message = text;
    }
    /**
     * Add a new discussion.
     */
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const forumName = this.forum.name;
            const subject = this.newDiscussion.subject;
            let message = this.newDiscussion.message || '';
            const pin = this.newDiscussion.pin;
            const attachments = this.newDiscussion.files;
            const discTimecreated = this.timeCreated || Date.now();
            const options = {
                discussionsubscribe: !!this.newDiscussion.subscribe,
            };
            if (!subject) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal('addon.mod_forum.erroremptysubject', true);
                return;
            }
            if (!message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal('addon.mod_forum.erroremptymessage', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showModalLoading('core.sending', true);
            // Add some HTML to the message if needed.
            message = _services_utils_text__WEBPACK_IMPORTED_MODULE_17__["CoreTextUtils"].formatHtmlLines(message);
            if (pin) {
                options.discussionpinned = true;
            }
            const groupIds = this.newDiscussion.postToAllGroups ? this.groupIds : [this.newDiscussion.groupId];
            try {
                const discussionIds = yield _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].addNewDiscussion(this.forumId, forumName, this.courseId, subject, message, attachments, options, groupIds, discTimecreated);
                if (discussionIds) {
                    // Data sent to server, delete stored files (if any).
                    _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].deleteNewDiscussionStoredFiles(this.forumId, discTimecreated);
                    _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'forum' });
                }
                if (discussionIds && discussionIds.length < groupIds.length) {
                    // Some discussions could not be created.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(null, 'addon.mod_forum.errorposttoallgroups', true);
                }
                _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !!discussionIds, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
                this.returnToDiscussions(discussionIds, discTimecreated);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_forum.cannotcreatediscussion', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Discard an offline saved discussion.
     */
    discard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.areyousure'));
                const promises = [];
                promises.push(_addons_mod_forum_services_forum_offline__WEBPACK_IMPORTED_MODULE_13__["AddonModForumOffline"].deleteNewDiscussion(this.forumId, this.timeCreated));
                promises.push(_services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].deleteNewDiscussionStoredFiles(this.forumId, this.timeCreated)));
                yield Promise.all(promises);
                _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
                this.returnToDiscussions();
            }
            catch (error) {
                // Cancelled.
            }
        });
    }
    /**
     * Show or hide advanced form fields.
     */
    toggleAdvanced() {
        this.advanced = !this.advanced;
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            if (_addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].hasPostDataChanged(this.newDiscussion, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_16__["CoreFileUploader"].clearTmpFiles(this.newDiscussion.files);
            if (this.formElement) {
                _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
            }
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.syncObserver && this.syncObserver.off();
        delete this.syncObserver;
    }
    /**
     * Helper function to go back.
     */
    goBack() {
        var _a;
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigate('../../');
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        if (this.syncId) {
            _services_sync__WEBPACK_IMPORTED_MODULE_12__["CoreSync"].unblockOperation(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].COMPONENT, this.syncId);
        }
        this.isDestroyed = true;
        (_a = this.discussions) === null || _a === void 0 ? void 0 : _a.destroy();
    }
};
AddonModForumNewDiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"] },
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_18__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
AddonModForumNewDiscussionPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['newDiscFormEl',] }],
    messageEditor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_7__["CoreEditorRichTextEditorComponent"],] }]
};
AddonModForumNewDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-forum-new-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/new-discussion/new-discussion.html")).default,
    })
], AddonModForumNewDiscussionPage);

/**
 * Helper to manage swiping within a collection of discussions.
 */
class AddonModForumNewDiscussionDiscussionsSwipeManager extends _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_20__["AddonModForumDiscussionsSwipeManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return `${this.getSource().DISCUSSIONS_PATH_PREFIX}new/${route.params.timeCreated}`;
    }
}


/***/ }),

/***/ "./src/core/classes/items-management/swipe-navigation-items-manager.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/classes/items-management/swipe-navigation-items-manager.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSwipeNavigationItemsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSwipeNavigationItemsManager", function() { return CoreSwipeNavigationItemsManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routed-items-manager */ "./src/core/classes/items-management/routed-items-manager.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * Helper class to manage the state and routing of a swipeable page.
 */
class CoreSwipeNavigationItemsManager extends _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManager"] {
    /**
     * Process page started operations.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateSelectedItem();
        });
    }
    /**
     * Navigate to the next item.
     */
    navigateToNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(1, 'forward');
        });
    }
    /**
     * Navigate to the previous item.
     */
    navigateToPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(-1, 'back');
        });
    }
    /**
     * Has a next item.
     */
    hasNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(1);
            return !!item;
        });
    }
    /**
     * Has a previous item.
     */
    hasPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(-1);
            return !!item;
        });
    }
    /**
     * @inheritdoc
     */
    getCurrentPageRoute() {
        return _services_navigator__WEBPACK_IMPORTED_MODULE_1__["CoreNavigator"].getCurrentRoute();
    }
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        const segments = [];
        while (route) {
            segments.push(...route.url);
            if (!route.firstChild) {
                break;
            }
            route = route.firstChild;
        }
        return segments.map(segment => segment.path).join('/').replace(/\/+/, '/').trim() || null;
    }
    /**
     * Navigate to an item by an offset.
     *
     * @param delta Index offset.
     * @param animationDirection Animation direction.
     */
    navigateToItemBy(delta, animationDirection) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(delta);
            if (!item) {
                return;
            }
            yield this.navigateToItem(item, { animationDirection, replace: true });
        });
    }
    /**
     * Get item by an offset.
     *
     * @param delta Index offset.
     */
    getItemBy(delta) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const items = this.getSource().getItems();
            const selectedIndex = (_a = (this.selectedItem && (items === null || items === void 0 ? void 0 : items.indexOf(this.selectedItem)))) !== null && _a !== void 0 ? _a : -1;
            if (selectedIndex === -1 || items === null) {
                return null;
            }
            const deltaStep = delta > 0 ? 1 : -1;
            let nextIndex = selectedIndex;
            let deltaMoved = 0;
            while (deltaMoved !== delta) {
                nextIndex += deltaStep;
                if (nextIndex < 0 || nextIndex >= items.length) {
                    break;
                }
                if (this.skipItemInSwipe(items[nextIndex])) {
                    continue;
                }
                deltaMoved += deltaStep;
            }
            if (deltaMoved === delta) {
                return items[nextIndex];
            }
            if (!this.getSource().isCompleted()) {
                yield this.getSource().load();
                return this.getItemBy(delta);
            }
            return null;
        });
    }
    /**
     * Check if an item should be skipped during swipe navigation.
     *
     * @param item Item.
     * @returns Whether to skip this item during swipe navigation.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    skipItemInSwipe(item) {
        return false;
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-new-discussion-new-discussion-module.js.map