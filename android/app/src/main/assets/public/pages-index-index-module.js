(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ title }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!filesLoaded || (!showPrivateFiles && !showSiteFiles)\"\n        (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"filesLoaded\" *ngIf=\"showPrivateFiles || showSiteFiles\">\n        <!-- Allow selecting the files to see: private or site. -->\n        <core-combobox [selection]=\"root\" (onChange)=\"rootChanged($event)\" *ngIf=\"showPrivateFiles && showSiteFiles && !path\">\n            <ion-select-option class=\"ion-text-wrap\" value=\"my\">\n                {{ 'addon.privatefiles.privatefiles' | translate }}\n            </ion-select-option>\n            <ion-select-option class=\"ion-text-wrap\" value=\"site\">\n                {{ 'addon.privatefiles.sitefiles' | translate }}\n            </ion-select-option>\n        </core-combobox>\n\n        <!-- Display info about space used and space left. -->\n        <ion-card class=\"core-info-card\" *ngIf=\"userQuota && filesInfo && filesInfo.filecount > 0\">\n            <ion-item>\n                <ion-label>\n                    {{ 'core.quotausage' | translate:{$a: {used: spaceUsed, total: userQuotaReadable} } }}\n                </ion-label>\n            </ion-item>\n        </ion-card>\n\n        <!-- List of files. -->\n        <ion-list *ngIf=\"files && files.length > 0\">\n            <ng-container *ngFor=\"let file of files\">\n                <ion-item button *ngIf=\"file.isdir\" class=\"ion-text-wrap item-file item-directory\" (click)=\"openFolder(file)\" detail=\"true\">\n                    <ion-icon name=\"fas-folder\" slot=\"start\" [attr.aria-label]=\"'core.folder' | translate\"></ion-icon>\n                    <ion-label>{{file.filename}}</ion-label>\n                </ion-item>\n                <core-file *ngIf=\"!file.isdir\" [file]=\"file\" [component]=\"component\" [componentId]=\"file.contextid\"></core-file>\n            </ng-container>\n        </ion-list>\n\n        <!-- Message telling there are no files. -->\n        <core-empty-box *ngIf=\"!files || !files.length\" icon=\"far-folder-open\" [message]=\"'addon.privatefiles.emptyfilelist' | translate\">\n        </core-empty-box>\n    </core-loading>\n\n    <!-- Upload a private file. -->\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"showUpload && root != 'site' && !path\">\n        <ion-fab-button (click)=\"uploadFile()\" [attr.aria-label]=\"'core.fileuploader.uploadafile' | translate\">\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'core.fileuploader.uploadafile' | translate }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/index/index.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/index/index.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [collapsible]=\"tabsComponent?.selectedIndex == 0 || tabsComponent?.selectedIndex === undefined\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <core-format-text [text]=\"title\" contextLevel=\"course\" [contextInstanceId]=\"course?.id\"></core-format-text>\n            </h1>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openCourseSummary()\" [attr.aria-label]=\"'core.course.coursesummary' | translate\">\n                <ion-icon name=\"fas-info-circle\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<div class=\"core-course-header\">\n    <ion-item class=\"core-format-progress-list ion-text-wrap list-item-limited-width\" collapsible>\n        <ng-container *ngIf=\"course\">\n            <div *ngIf=\"!course.courseImage\" #courseThumb slot=\"start\" class=\"core-course-thumb\">\n                <ion-icon *ngIf=\"!course.courseImage\" name=\"fas-graduation-cap\" class=\"course-icon\" aria-hidden=\"true\">\n                </ion-icon>\n            </div>\n            <ion-avatar *ngIf=\"course.courseImage\" slot=\"start\" class=\"core-course-thumb\">\n                <img [src]=\"course.courseImage\" core-external-content alt=\"\" />\n            </ion-avatar>\n        </ng-container>\n\n        <ion-label>\n            <h1>\n                <core-format-text [text]=\"title\" contextLevel=\"course\" [contextInstanceId]=\"course?.id\"></core-format-text>\n            </h1>\n            <div class=\"core-course-progress\" *ngIf=\"progress !== undefined\">\n                <core-progress-bar [progress]=\"progress\" a11yText=\"core.course.aria:sectionprogress\">\n                </core-progress-bar>\n            </div>\n        </ion-label>\n    </ion-item>\n</div>\n<core-tabs-outlet [tabs]=\"tabs\" [hideUntil]=\"loaded\" (ionChange)=\"tabSelected()\"></core-tabs-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/sitehome/pages/index/index.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/sitehome/pages/index/index.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-navbar-buttons slot=\"end\" prepend>\n    <ion-button *ngIf=\"searchEnabled\" (click)=\"openSearch()\" [attr.aria-label]=\"'core.courses.searchcourses' | translate\">\n        <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n    </ion-button>\n</core-navbar-buttons>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!dataLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"dataLoaded\">\n        <ion-list class=\"core-course-module-list-wrapper\">\n            <!-- Site home main contents. -->\n            <ng-container *ngIf=\"section && section.hasContent\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"section.summary\">\n                    <ion-label>\n                        <core-format-text [text]=\"section.summary\" contextLevel=\"course\" [contextInstanceId]=\"siteHomeId\">\n                        </core-format-text>\n                    </ion-label>\n                </ion-item>\n\n                <core-course-module *ngFor=\"let module of section.modules\" [module]=\"module\" [section]=\"section\"></core-course-module>\n            </ng-container>\n\n            <!-- Site home items: news, categories, courses, etc. -->\n            <ng-container *ngIf=\"items.length > 0\">\n                <core-spacer *ngIf=\"section && section!.hasContent\"></core-spacer>\n                <ng-container *ngFor=\"let item of items\">\n                    <ng-container [ngSwitch]=\"item\">\n                        <ng-container *ngSwitchCase=\"'LIST_OF_COURSE'\">\n                            <ng-template *ngTemplateOutlet=\"allCourseList\"></ng-template>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'LIST_OF_CATEGORIES'\">\n                            <ng-template *ngTemplateOutlet=\"categories\"></ng-template>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'COURSE_SEARCH_BOX'\">\n                            <ng-template *ngTemplateOutlet=\"courseSearch\"></ng-template>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'ENROLLED_COURSES'\">\n                            <ng-template *ngTemplateOutlet=\"enrolledCourseList\"></ng-template>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'NEWS_ITEMS'\">\n                            <ng-template *ngTemplateOutlet=\"news\"></ng-template>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n        </ion-list>\n        <core-block-side-blocks-button slot=\"fixed\" *ngIf=\"hasBlocks\" contextLevel=\"course\" [instanceId]=\"siteHomeId\">\n        </core-block-side-blocks-button>\n\n        <core-empty-box *ngIf=\"!hasContent\" icon=\"fas-box-open\" [message]=\"'core.course.nocontentavailable' | translate\">\n\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n\n<ng-template #allCourseList>\n    <ion-card>\n        <ion-item button class=\"ion-text-wrap\" (click)=\"openAvailableCourses()\">\n            <ion-icon name=\"fas-graduation-cap\" fixed-width slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>\n                <h2>{{ 'core.courses.availablecourses' | translate}}</h2>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ng-template>\n\n<ng-template #news>\n    <core-course-module class=\"core-sitehome-news\" *ngIf=\"newsForumModule\" [module]=\"newsForumModule\">\n    </core-course-module>\n</ng-template>\n\n<ng-template #categories>\n    <ion-card>\n        <ion-item button class=\"ion-text-wrap\" (click)=\"openCourseCategories()\">\n            <ion-icon name=\"fas-folder\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>\n                <h2>{{ 'core.courses.categories' | translate}}</h2>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ng-template>\n\n<ng-template #enrolledCourseList>\n    <ion-card>\n        <ion-item button class=\"ion-text-wrap\" (click)=\"openMyCourses()\">\n            <ion-icon name=\"fas-graduation-cap\" fixed-width slot=\"start\" aria-hidden=\"true\">\n            </ion-icon>\n            <ion-label>\n                <h2>{{ 'core.courses.mycourses' | translate}}</h2>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ng-template>\n\n<ng-template #courseSearch>\n    <ion-card>\n        <ion-item button class=\"ion-text-wrap\" (click)=\"openSearch()\">\n            <ion-icon name=\"fas-search\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>\n                <h2>{{ 'core.courses.searchcourses' | translate}}</h2>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ng-template>\n");

/***/ }),

/***/ "./src/addons/privatefiles/pages/index/index.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/privatefiles/pages/index/index.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonPrivateFilesIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPrivateFilesIndexPageModule", function() { return AddonPrivateFilesIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/addons/privatefiles/pages/index/index.ts");
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





const routes = [
    {
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_4__["AddonPrivateFilesIndexPage"],
    },
];
let AddonPrivateFilesIndexPageModule = class AddonPrivateFilesIndexPageModule {
};
AddonPrivateFilesIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            ___WEBPACK_IMPORTED_MODULE_4__["AddonPrivateFilesIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonPrivateFilesIndexPageModule);



/***/ }),

/***/ "./src/addons/privatefiles/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/privatefiles/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonPrivateFilesIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPrivateFilesIndexPage", function() { return AddonPrivateFilesIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/privatefiles/services/privatefiles */ "./src/addons/privatefiles/services/privatefiles.ts");
/* harmony import */ var _addons_privatefiles_services_privatefiles_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @addons/privatefiles/services/privatefiles-helper */ "./src/addons/privatefiles/services/privatefiles-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the list of files.
 */
let AddonPrivateFilesIndexPage = class AddonPrivateFilesIndexPage {
    constructor() {
        this.filesLoaded = false; // Whether the files are loaded.
        // Update visibility if current site info is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].SITE_UPDATED, () => {
            this.setVisibility();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        var _a, _b, _c;
        try {
            this.root = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('root');
            const contextId = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteNumberParam('contextid');
            if (contextId) {
                // Loading a certain folder.
                this.path = {
                    contextid: contextId,
                    component: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('component'),
                    filearea: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('filearea'),
                    itemid: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteNumberParam('itemid'),
                    filepath: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('filepath'),
                    filename: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('filename'),
                };
            }
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].back();
            return;
        }
        this.title = ((_a = this.path) === null || _a === void 0 ? void 0 : _a.filename) || _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.files');
        this.setVisibility();
        this.userQuota = (_c = (_b = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite()) === null || _b === void 0 ? void 0 : _b.getInfo()) === null || _c === void 0 ? void 0 : _c.userquota;
        if (!this.root) {
            // Load private files by default.
            if (this.showPrivateFiles) {
                this.root = 'my';
            }
            else if (this.showSiteFiles) {
                this.root = 'site';
            }
        }
        if (this.root) {
            this.rootChanged(this.root);
        }
        else {
            this.filesLoaded = true;
        }
    }
    /**
     * Set visibility of some items based on site data.
     */
    setVisibility() {
        this.showPrivateFiles = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canViewPrivateFiles();
        this.showSiteFiles = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canViewSiteFiles();
        this.showUpload = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canUploadFiles();
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(event) {
        this.refreshFiles().finally(() => {
            event === null || event === void 0 ? void 0 : event.complete();
        });
    }
    /**
     * Function called when the root has changed.
     *
     * @param root New root.
     */
    rootChanged(root) {
        this.root = root;
        this.filesLoaded = false;
        this.component = this.root == 'my' ? _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFilesProvider"].PRIVATE_FILES_COMPONENT :
            _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFilesProvider"].SITE_FILES_COMPONENT;
        this.fetchFiles().finally(() => {
            this.filesLoaded = true;
        });
    }
    /**
     * Upload a new file.
     */
    uploadFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!_services_network__WEBPACK_IMPORTED_MODULE_3__["CoreNetwork"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('core.fileuploader.errormustbeonlinetoupload', true);
                return;
            }
            try {
                yield _addons_privatefiles_services_privatefiles_helper__WEBPACK_IMPORTED_MODULE_10__["AddonPrivateFilesHelper"].uploadPrivateFile(this.filesInfo);
                // File uploaded, refresh the list.
                this.filesLoaded = false;
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(this.refreshFiles());
                this.filesLoaded = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.fileuploader.errorwhileuploading', true);
            }
        });
    }
    /**
     * Fetch the files.
     *
     * @return Promise resolved when done.
     */
    fetchFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.path) {
                    // Path is set, serve the files the user requested.
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getFiles(this.path);
                    return;
                }
                // The path is unknown, the user must be requesting a root.
                if (this.root == 'site') {
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.sitefiles');
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getSiteFiles();
                }
                else if (this.root == 'my') {
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.files');
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getPrivateFiles();
                    if (this.showUpload && this.userQuota && this.userQuota > 0) {
                        // Get the info to calculate the available size.
                        this.filesInfo = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getPrivateFilesInfo();
                        this.spaceUsed = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].bytesToSize(this.filesInfo.filesizewithoutreferences, 1);
                        this.userQuotaReadable = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].bytesToSize(this.userQuota, 1);
                    }
                    else {
                        // User quota isn't useful, delete it.
                        delete this.userQuota;
                    }
                }
                else {
                    // Unknown root.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('addon.privatefiles.couldnotloadfiles', true);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.privatefiles.couldnotloadfiles', true);
            }
        });
    }
    /**
     * Refresh the displayed files.
     *
     * @return Promise resolved when done.
     */
    refreshFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield Promise.all([
                    _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].invalidateDirectory(this.root, this.path),
                    _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].invalidatePrivateFilesInfoForUser(),
                ]);
            }
            finally {
                yield this.fetchFiles();
            }
        });
    }
    /**
     * Open a folder.
     *
     * @param folder Folder to open.
     */
    openFolder(folder) {
        const params = {
            contextid: folder.contextid,
            component: folder.component || '',
            filearea: folder.filearea || '',
            itemid: folder.itemid || 0,
            filepath: folder.filepath || '',
            filename: folder.filename || '',
        };
        if (folder.component) {
            // Delete unused elements that may break the request.
            params.filename = '';
        }
        const hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashAsciiStr(JSON.stringify(params));
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigate(`../${hash}`, { params });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonPrivateFilesIndexPage.ctorParameters = () => [];
AddonPrivateFilesIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-privatefiles-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html")).default,
    })
], AddonPrivateFilesIndexPage);



/***/ }),

/***/ "./src/core/features/course/pages/index/index.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/course/pages/index/index.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreCourseIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseIndexPageModule", function() { return CoreCourseIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./src/core/features/course/pages/index/index.ts");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-routing.module */ "./src/core/features/course/pages/index/index-routing.module.ts");
/* harmony import */ var _course_summary_course_summary_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-summary/course-summary.module */ "./src/core/features/course/pages/course-summary/course-summary.module.ts");
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








function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["resolveModuleRoutes"])(injector, _index_routing_module__WEBPACK_IMPORTED_MODULE_6__["COURSE_INDEX_ROUTES"]);
    return [
        {
            path: '',
            component: ___WEBPACK_IMPORTED_MODULE_5__["CoreCourseIndexPage"],
            data: {
                isCourseIndex: true,
            },
            children: routes.children,
        },
        ...routes.siblings,
    ];
}
let CoreCourseIndexPageModule = class CoreCourseIndexPageModule {
};
CoreCourseIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
            _course_summary_course_summary_module__WEBPACK_IMPORTED_MODULE_7__["CoreCoursePreviewPageComponentModule"],
        ],
        declarations: [
            ___WEBPACK_IMPORTED_MODULE_5__["CoreCourseIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseIndexPageModule);



/***/ }),

/***/ "./src/core/features/course/pages/index/index.scss":
/*!*********************************************************!*\
  !*** ./src/core/features/course/pages/index/index.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .core-format-progress-list {\n  width: 100%;\n}\n:host .core-course-thumb {\n  height: var(--core-courseimage-on-course-size);\n  min-height: var(--core-courseimage-on-course-size);\n  width: var(--core-courseimage-on-course-size);\n  min-width: var(--core-courseimage-on-course-size);\n  --border-radius: var(--core-courseimage-radius);\n  margin-left: 0px;\n  margin-right: 16px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .core-course-thumb {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0px;\n    margin-inline-start: 0px;\n    -webkit-margin-end: 16px;\n    margin-inline-end: 16px;\n  }\n}\n:host .core-course-thumb.course-color-0 {\n  --course-color: var(--core-course-color-0);\n  --course-color-tint: var(--core-course-color-0-tint);\n}\n:host .core-course-thumb.course-color-1 {\n  --course-color: var(--core-course-color-1);\n  --course-color-tint: var(--core-course-color-1-tint);\n}\n:host .core-course-thumb.course-color-2 {\n  --course-color: var(--core-course-color-2);\n  --course-color-tint: var(--core-course-color-2-tint);\n}\n:host .core-course-thumb.course-color-3 {\n  --course-color: var(--core-course-color-3);\n  --course-color-tint: var(--core-course-color-3-tint);\n}\n:host .core-course-thumb.course-color-4 {\n  --course-color: var(--core-course-color-4);\n  --course-color-tint: var(--core-course-color-4-tint);\n}\n:host .core-course-thumb.course-color-5 {\n  --course-color: var(--core-course-color-5);\n  --course-color-tint: var(--core-course-color-5-tint);\n}\n:host .core-course-thumb.course-color-6 {\n  --course-color: var(--core-course-color-6);\n  --course-color-tint: var(--core-course-color-6-tint);\n}\n:host .core-course-thumb.course-color-7 {\n  --course-color: var(--core-course-color-7);\n  --course-color-tint: var(--core-course-color-7-tint);\n}\n:host .core-course-thumb.course-color-8 {\n  --course-color: var(--core-course-color-8);\n  --course-color-tint: var(--core-course-color-8-tint);\n}\n:host .core-course-thumb.course-color-9 {\n  --course-color: var(--core-course-color-9);\n  --course-color-tint: var(--core-course-color-9-tint);\n}\n:host .core-course-thumb ion-icon.course-icon {\n  padding: 12px;\n  font-size: calc(var(--core-courseimage-on-course-size) - 24px);\n  border-radius: var(--border-radius);\n  color: var(--course-color-tint);\n  background: var(--course-color, transparent);\n}\n:host h1 {\n  font-size: 20px;\n}\n:host .core-course-header {\n  background: var(--ion-item-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9jb3Vyc2UvcGFnZXMvaW5kZXgvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQWtHQTs7RUFBQTtBQ3BHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDNURJO0VBQ0ksV0FBQTtBQW1EUjtBQWhESTtFQUNJLDhDQUFBO0VBQ0Esa0RBQUE7RUFDQSw2Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsK0NBQUE7RUwrT0osZ0JLOU9vQztFTCtPcEMsa0JLL095QjtFTCtRM0IsZUsvUXNCO0VMZ1J0QixrQktoUmlDO0FBcURuQztBTDZMTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLHlCSzNQOEI7SUw0UDlCLHdCSzVQOEI7SUw2UDlCLHdCSzdQbUI7SUw4UG5CLHVCSzlQbUI7RUE4RDNCO0FBQ0Y7QUE1RFk7RUFDSSwwQ0FBQTtFQUNBLG9EQUFBO0FBOERoQjtBQWhFWTtFQUNJLDBDQUFBO0VBQ0Esb0RBQUE7QUFrRWhCO0FBcEVZO0VBQ0ksMENBQUE7RUFDQSxvREFBQTtBQXNFaEI7QUF4RVk7RUFDSSwwQ0FBQTtFQUNBLG9EQUFBO0FBMEVoQjtBQTVFWTtFQUNJLDBDQUFBO0VBQ0Esb0RBQUE7QUE4RWhCO0FBaEZZO0VBQ0ksMENBQUE7RUFDQSxvREFBQTtBQWtGaEI7QUFwRlk7RUFDSSwwQ0FBQTtFQUNBLG9EQUFBO0FBc0ZoQjtBQXhGWTtFQUNJLDBDQUFBO0VBQ0Esb0RBQUE7QUEwRmhCO0FBNUZZO0VBQ0ksMENBQUE7RUFDQSxvREFBQTtBQThGaEI7QUFoR1k7RUFDSSwwQ0FBQTtFQUNBLG9EQUFBO0FBa0doQjtBQTlGUTtFQUNJLGFBQUE7RUFDQSw4REFBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSw0Q0FBQTtBQWdHWjtBQWhGSTtFQUNJLGVBQUE7QUFrRlI7QUEvRUk7RUFDSSxzQ0FBQTtBQWlGUiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9jb3Vyc2UvcGFnZXMvaW5kZXgvaW5kZXguc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XG5cbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xuICovXG5cblxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xuXG4gIEBpZiAkaW5kZXgge1xuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcbiAgfVxuXG4gIEByZXR1cm4gJHN0cmluZztcbn1cblxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbkBmdW5jdGlvbiBzdHItc3BsaXQoJHN0cmluZywgJHNlcGFyYXRvcikge1xuICAvLyBlbXB0eSBhcnJheS9saXN0XG4gICRzcGxpdC1hcnI6ICgpO1xuICAvLyBmaXJzdCBpbmRleCBvZiBzZXBhcmF0b3IgaW4gc3RyaW5nXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXG4gIEB3aGlsZSAkaW5kZXggIT0gbnVsbCB7XG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xuICAgIC8vIHB1c2ggaXRlbSB0byBhcnJheVxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xuICAgICRzdHJpbmc6IHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyAxKTtcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcbiAgfVxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xuXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcbn1cblxuXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xuICAkc3RhcnQtaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc3RhcnQpO1xuXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xuICAgICRwb3N0OiBzdHItc2xpY2UoJHN0cmluZywgJHN0YXJ0LWluZGV4ICsgc3RyLWxlbmd0aCgkc3RhcnQpKTtcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xuXG4gICAgQGlmICRlbmQtaW5kZXgge1xuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIG51bGw7XG59XG5cblxuLy8gU3RyaW5nIENvbnRhaW5zIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWNvbnRhaW5zKCRzdHJpbmcsICRuZWVkbGUpIHtcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XG4gIH1cblxuICBAcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vIFVSTCBFbmNvZGUgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiB1cmwtZW5jb2RlKCR2YWwpIHtcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xuICBAcmV0dXJuICRlbmNvZGVkO1xufVxuXG5cbi8vIEFkZCBSb290IFNlbGVjdG9yXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRkcyBhIHJvb3Qgc2VsZWN0b3IgdXNpbmcgaG9zdC1jb250ZXh0IGJhc2VkIG9uIHRoZSBzZWxlY3RvciBwYXNzZWRcbi8vXG4vLyBFeGFtcGxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLmZpeGVkXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1oaWRlIDo6c2xvdHRlZChpb24tYmFkZ2UpXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXG4vLyAtLT4gW2Rpcj1ydGxdIC5zaGFkb3dcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xuXG4gICRsaXN0OiAoKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxuICAgIEBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0KFwiKSB7XG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XG5cbiAgICAgICRuZXctZWxlbWVudDogKCk7XG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcblxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogJGVsZW1lbnQ7XG5cbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIikpXCIsIFwiKVwiKTtcbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XG5cbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRzY29wZWQtZWxlbWVudCwgc3BhY2UpO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJG5ldy1lbGVtZW50LCBjb21tYSk7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxuICAgIH0gQGVsc2UgaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdFwiKSB7XG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcbiAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBkb2VzIG5vdCBjb250YWluIGhvc3QgYXQgYWxsIGl0IGlzIGVpdGhlciBhIHNoYWRvd1xuICAgICAgLy8gb3Igbm9ybWFsIGVsZW1lbnQgc28gYXBwZW5kIGJvdGggdGhlIGRpciBjaGVjayBhbmQgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSB7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIiN7JGFkZEhvc3RTZWxlY3Rvcn0gI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gJGxpc3Q7XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcbiAqL1xuXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XG4gIH1cbn1cblxuLy8gR2V0cyB0aGUgc3BlY2lmaWMgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSB0aGUgbmFtZSBhbmQgdmFyaWF0aW9uLiBBbHBoYS9yZ2IgYXJlIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlLCAwLjUpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpLCAwLjUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XG4gICR2YWx1ZXM6IG1hcC1nZXQoJGNvbG9ycywgJG5hbWUpO1xuICAkdmFsdWU6IG1hcC1nZXQoJHZhbHVlcywgJHZhcmlhdGlvbik7XG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcblxuICBAaWYgKCR2YXJpYXRpb24gPT0gYmFzZSkge1xuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XG4gIH1cblxuICBAaWYgKCRhbHBoYSkge1xuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcbiAgICBAcmV0dXJuIHJnYmEodmFyKCN7JHZhcmlhYmxlfS1yZ2IsICR2YWx1ZSksICRhbHBoYSk7XG4gIH1cbiAgQGlmICgkcmdiKSB7XG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcbiAgfVxuXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xufVxuXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcbiAqL1xuXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbnRlbnQ6IFwiXCI7XG5cbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICBAY29udGVudDtcblxuICAvLyAkcm9vdDogI3smfTtcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAvLyAgICN7JHJvb3R9IHtcbiAgLy8gICAgIEBjb250ZW50O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAkcm9vdDogI3smfTtcblxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgfSBAZWxzZSB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgQGF0LXJvb3Qge1xuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICN7JHByb3B9LXRvcDogJHRvcDtcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICByaWdodDogJHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgdG9wOiAkdG9wO1xuICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAkb3RoZXItZGlyOiBudWxsO1xuXG4gIEBpZiAkZGlyID09IGx0ciB7XG4gICAgJG90aGVyLWRpcjogcnRsO1xuICB9IEBlbHNlIHtcbiAgICAkb3RoZXItZGlyOiBsdHI7XG4gIH1cblxuICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgZGlyZWN0aW9uOiAkZGlyO1xuICB9XG4gIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICRleHRyYTogbnVsbDtcblxuICAkeDogbnVsbDtcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xuICovXG5cbi8vIFJlc3BvbnNpdmUgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG1ha2UtZ3JpZC13aWR0aHMoJHdpZHRoczogJGdyaWQtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5cbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEl0ZW0gTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gaXRlbS1wdXNoLXN2Zy11cmwoJGZpbGwpIHtcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XG5cbiAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCB0cnVlKTtcbn1cbiIsIkB1c2UgXCJzYXNzOm1hdGhcIiBhcyBtYXRoO1xuXG4vKipcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgNi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XG4gICAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudCk7XG4gIH1cblxuICAvLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuICAvLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCAtMTAuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xuICB9XG5cbiAgLy8gSW9uaWMgQ29sb3JzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuICAvLyBjb2xvcnMgbWFwXG5cbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzKSB7XG4gICAgICAkYmFzZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XG4gICAgICAkbGlnaHQ6IG1hcC1nZXQoJGJhc2UsICdsaWdodCcpO1xuXG4gICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGxpZ2h0KTtcblxuICAgICAgYm9keS5kYXJrIHtcbiAgICAgICAgICAkZGFyazogbWFwLWdldCgkYmFzZSwgJ2RhcmsnKTtcbiAgICAgICAgICAkZGFyazogbWl4KCRsaWdodCwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XG4gICAgICAgICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRkYXJrKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpIHtcbiAgICAgICRjb250cmFzdDogZ2V0X2NvbnRyYXN0X2NvbG9yKCRiYXNlKTtcbiAgICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGJhc2UpO1xuICAgICAgJHRpbnQ6IGdldC1jb2xvci10aW50LXBlcmNlbnQoJGJhc2UpO1xuXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG5cbiAgICAgIC8vIEludGVybmFsIGlvbmljIHVzZSBvbmx5LlxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG5cbiAgICAgIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XG4gICAgICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xuICAgICAgfVxuICB9XG5cblxuIEBtaXhpbiBjb3JlLWZvY3VzKCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xuICAgIH1cbiB9XG5cbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgMXB4IHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG59XG5cbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHByb3BlcnRpZXM6IGFsbCwgJGR1cmF0aW9uOiA1MDBtcywgJHRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQpIHtcbiAgICAkdHJhbnNpdGlvbnM6ICgpO1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XG4gICAgICAkdHJhbnNpdGlvbnM6IGFwcGVuZCgkdHJhbnNpdGlvbnMsICRwcm9wZXJ0eSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiwgY29tbWEpO1xuICAgIH1cblxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcbn1cblxuLyoqXG4gKiBTYW1lIGFzIGl0ZW0tcHVzaC1zdmctdXJsIGJ1dCBhZG1pdHMgZmxpcC1ydGxcbiAqL1xuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAgICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xuXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCAkcHggJHR5cGUgJGNvbG9yLCBudWxsKTtcbn1cblxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1lbmQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG5cbiAgICBAaWYgKCRlbmQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICB9XG4gICAgQGlmICgkc3RhcnQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBvc2l0aW9uKCR0b3AsICRzYWZlLWFyZWEtZW5kLCAkYm90dG9tLCAkc2FmZS1hcmVhLXN0YXJ0KTtcbn1cblxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrbW9kZSgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiYm9keS5kYXJrXCIpfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XG4gICAgZmxleDogMCAwICR3aWR0aDtcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIHZhcigtLWhvcml6b250YWwtbWFyZ2luKTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ29sb3IgbWl4aW5zLlxuQGZ1bmN0aW9uIGdldF9icmlnaHRuZXNzKCRjb2xvcikge1xuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xufVxuXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XG4gICAgJGx1bWlhbmNlOiBsdW1pbmFuY2UoJGNvbG9yKTtcblxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXG4gICAgJHdoaXRlQ29udHJhc3Q6ICgkbHVtaWFuY2UgKyAwLjA1KSAvICgxICsgMC4wNSk7XG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xuXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xufVxuXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XG4gICAgJHI6IHJlZCgkY29sb3IpO1xuICAgICRnOiBncmVlbigkY29sb3IpO1xuICAgICRiOiBibHVlKCRjb2xvcik7XG5cbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XG5cbiAgICBAcmV0dXJuIGlmKCR5aXEgPj0gMTI4LCAkZGFyaywgJGxpZ2h0KTtcbn1cblxuLy8gV0NBRyBjb250cmFzdCBhbGdvcnl0aG1cbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xuICAgICRiYWNrZ3JvdW5kTHVtaW5hbmNlOiBsdW1pbmFuY2UoJGJhY2tncm91bmQpO1xuXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcbiAgICAgICAgQHJldHVybiAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KSAvICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSk7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xuICAgIH1cbn1cblxuQGZ1bmN0aW9uIGx1bWluYW5jZSgkY29sb3IpIHtcbiAgICAkcjogcmVkKCRjb2xvcik7XG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcblxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcbiAgICAkZzogY29tcG9uZW50LWx1bWluYW5jZSgkZyk7XG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xuXG4gICAgQHJldHVybiAkciAqIDAuMjEyNiArICRnICogMC43MTUyICsgJGIgKiAwLjA3MjI7XG59XG5cbkBmdW5jdGlvbiBjb21wb25lbnQtbHVtaW5hbmNlKCR2YWx1ZSkge1xuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xuXG4gICAgQGlmICgkdmFsdWUgPD0gMC4wMzkyOCkge1xuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICBAcmV0dXJuIG1hdGgucG93KCgkdmFsdWUgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4iLCIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICAgICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxuJGdyYXktNDAwOiAgICAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICAgICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxuJGJsYWNrOiAgICAgICAjMDAwMDAwICFkZWZhdWx0OyAvLyBBdm9pZCB1c2FnZVxuXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XG4kY3lhbjogICAgICAgICMwMDgxOTYgIWRlZmF1bHQ7IC8vIE5vdCB1c2VkLlxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xuJHllbGxvdzogICAgICAjZjBhZDRlICFkZWZhdWx0O1xuXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XG5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcms6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAkcmVkICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kY29sb3JzOiAgKFxuICAgIHByaW1hcnk6IChsaWdodDogJHByaW1hcnksIGRhcms6ICRwcmltYXJ5KSxcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcbiAgICB3YXJuaW5nOiAobGlnaHQ6ICR3YXJuaW5nKSxcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxuICAgIGxpZ2h0OiAobGlnaHQ6ICRsaWdodCwgZGFyazogJGRhcmspLFxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXG4pICFkZWZhdWx0O1xuXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgICB4czogMCxcbiAgICBzbTogNTc2cHgsXG4gICAgbWQ6IDc2OHB4LFxuICAgIGxnOiA5OTJweCxcbiAgICB0YWJsZXQ6IDk5MnB4LFxuICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG5cbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS4gKGRlcHJlY2F0ZWQgb24gNC4wKVxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdXNlciBwYWdlLlxuJGNvcmUtdXNlci1oaWRlLXNpdGVpbmZvOiAkY29yZS1tb3JlLWhpZGUtc2l0ZWluZm8gIWRlZmF1bHQ7XG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcbiRjb3JlLXVzZXItaGlkZS1zaXRldXJsOiAkY29yZS1tb3JlLWhpZGUtc2l0ZXVybCAhZGVmYXVsdDtcblxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cbiRhY3Rpdml0eS1pY29uLWNvbG9yczogKFxuICAgIGFkbWluaXN0cmF0aW9uOiAjNWQ2M2Y2LFxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXG4gICAgY29sbGFib3JhdGlvbjogI2Y3NjM0ZCxcbiAgICBjb21tdW5pY2F0aW9uOiAjMTFhNjc2LFxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXG4gICAgaW50ZXJmYWNlOiAjYTM3OGZmXG4pICFkZWZhdWx0O1xuXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jb2xvcnM6IChcbiAgICBjYXRlZ29yeTogIzhlMjRhYSxcbiAgICBjb3Vyc2U6ICRyZWQsXG4gICAgZ3JvdXA6ICR5ZWxsb3csXG4gICAgdXNlcjogJGJsdWUsXG4gICAgc2l0ZTogJGdyZWVuXG4pICFkZWZhdWx0O1xuIiwiQGltcG9ydCAnfnRoZW1lL2dsb2JhbHMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgICAuY29yZS1mb3JtYXQtcHJvZ3Jlc3MtbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb3JlLWNvdXJzZS10aHVtYiB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29yZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2Utc2l6ZSk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLWNvcmUtY291cnNlaW1hZ2Utb24tY291cnNlLXNpemUpO1xuICAgICAgICB3aWR0aDogdmFyKC0tY29yZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2Utc2l6ZSk7XG4gICAgICAgIG1pbi13aWR0aDogdmFyKC0tY29yZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2Utc2l6ZSk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY29yZS1jb3Vyc2VpbWFnZS1yYWRpdXMpO1xuICAgICAgICBAaW5jbHVkZSBtYXJnaW4oOHB4LCAxNnB4LCA4cHgsIDBweCk7XG5cbiAgICAgICAgQGZvciAkaSBmcm9tIDAgdG8gbGVuZ3RoKCRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICAmLmNvdXJzZS1jb2xvci0jeyRpfSB7XG4gICAgICAgICAgICAgICAgLS1jb3Vyc2UtY29sb3I6IHZhcigtLWNvcmUtY291cnNlLWNvbG9yLSN7JGl9KTtcbiAgICAgICAgICAgICAgICAtLWNvdXJzZS1jb2xvci10aW50OiB2YXIoLS1jb3JlLWNvdXJzZS1jb2xvci0jeyRpfS10aW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uLmNvdXJzZS1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tY29yZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2Utc2l6ZSkgLSAyNHB4KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvdXJzZS1jb2xvci10aW50KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvdXJzZS1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkY29yZS1oaWRlLWNvdXJzZWltYWdlLW9uLWNvdXJzZSkge1xuICAgICAgICAuY29yZS1jb3Vyc2UtdGh1bWIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2UpIHtcbiAgICAgICAgLmNvcmUtY291cnNlLXByb2dyZXNzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAuY29yZS1jb3Vyc2UtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/core/features/course/pages/index/index.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/course/pages/index/index.ts ***!
  \*******************************************************/
/*! exports provided: CoreCourseIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseIndexPage", function() { return CoreCourseIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_tabs_outlet_tabs_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/tabs-outlet/tabs-outlet */ "./src/core/components/tabs-outlet/tabs-outlet.ts");
/* harmony import */ var _services_format_delegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/format-delegate */ "./src/core/features/course/services/format-delegate.ts");
/* harmony import */ var _services_course_options_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/course-options-delegate */ "./src/core/features/course/services/course-options-delegate.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_course_course_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/course/course.module */ "./src/core/features/course/course.module.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _course_summary_course_summary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../course-summary/course-summary */ "./src/core/features/course/pages/course-summary/course-summary.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _singletons_colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/colors */ "./src/core/singletons/colors.ts");
/* harmony import */ var _singletons_text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons/text */ "./src/core/singletons/text.ts");
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
 * Page that displays the list of courses the user is enrolled in.
 */
let CoreCourseIndexPage = class CoreCourseIndexPage {
    constructor(route) {
        this.route = route;
        this.title = '';
        this.category = '';
        this.tabs = [];
        this.loaded = false;
        this.currentPagePath = '';
        this.sections = []; // List of course sections.
        this.isGuest = false;
        this.openModule = true;
        this.contentsTab = {
            page: _features_course_course_module__WEBPACK_IMPORTED_MODULE_11__["CONTENTS_PAGE_NAME"],
            title: 'core.course',
            pageParams: {},
        };
        this.selectTabObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].SELECT_COURSE_TAB, (data) => {
            var _a, _b;
            if (!data.name) {
                // If needed, set sectionId and sectionNumber. They'll only be used if the content tabs hasn't been loaded yet.
                if (data.sectionId) {
                    this.contentsTab.pageParams.sectionId = data.sectionId;
                }
                if (data.sectionNumber) {
                    this.contentsTab.pageParams.sectionNumber = data.sectionNumber;
                }
                // Select course contents.
                (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.selectByIndex(0);
            }
            else if (this.tabs) {
                const index = this.tabs.findIndex((tab) => tab.name == data.name);
                if (index >= 0) {
                    (_b = this.tabsComponent) === null || _b === void 0 ? void 0 : _b.selectByIndex(index);
                }
            }
        });
        // The completion of any of the modules have changed.
        this.completionObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].MANUAL_COMPLETION_CHANGED, (data) => {
            var _a;
            if (data.completion.courseId != ((_a = this.course) === null || _a === void 0 ? void 0 : _a.id)) {
                return;
            }
            if (data.completion.valueused !== false || !this.course || !('progress' in this.course) ||
                typeof this.course.progress != 'number') {
                return;
            }
            // If the completion value is not used, the page won't be reloaded, so update the progress bar.
            const completionModules = []
                .concat(...this.sections.map((section) => section.modules))
                .map((module) => module.completion && module.completion > 0 ? 1 : module.completion)
                .reduce((accumulator, currentValue) => (accumulator || 0) + (currentValue || 0), 0);
            const moduleProgressPercent = 100 / (completionModules || 1);
            // Use min/max here to avoid floating point rounding errors over/under-flowing the progress bar.
            if (data.completion.state === _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourseModuleCompletionStatus"].COMPLETION_COMPLETE) {
                this.course.progress = Math.min(100, this.course.progress + moduleProgressPercent);
            }
            else {
                this.course.progress = Math.max(0, this.course.progress - moduleProgressPercent);
            }
            this.updateProgress();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Increase route depth.
            const path = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteFullPath(this.route.snapshot);
            _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].increaseRouteDepth(path.replace(/(\/deep)+/, ''));
            try {
                this.course = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteParam('course');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].back();
                this.loaded = true;
                return;
            }
            this.firstTabName = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('selectedTab');
            this.module = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('module');
            this.isGuest = !!_services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteBooleanParam('isGuest');
            this.modNavOptions = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('modNavOptions');
            this.openModule = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteBooleanParam('openModule')) !== null && _a !== void 0 ? _a : true; // If false, just scroll to module.
            if (!this.modNavOptions) {
                // Fallback to old way of passing params. @deprecated since 4.0.
                const modParams = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('modParams');
                if (modParams) {
                    this.modNavOptions = { params: modParams };
                }
            }
            this.currentPagePath = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getCurrentPath();
            this.contentsTab.page = _singletons_text__WEBPACK_IMPORTED_MODULE_16__["CoreText"].concatenatePaths(this.currentPagePath, this.contentsTab.page);
            this.contentsTab.pageParams = {
                course: this.course,
                sectionId: _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('sectionId'),
                sectionNumber: _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('sectionNumber'),
                isGuest: this.isGuest,
            };
            if (this.module) {
                this.contentsTab.pageParams.moduleId = this.module.id;
                if (!this.contentsTab.pageParams.sectionId && !this.contentsTab.pageParams.sectionNumber) {
                    // No section specified, use module section.
                    this.contentsTab.pageParams.sectionId = this.module.section;
                }
            }
            this.tabs.push(this.contentsTab);
            this.loaded = true;
            yield Promise.all([
                this.loadCourseHandlers(),
                this.loadBasinInfo(),
            ]);
        });
    }
    /**
     * A tab was selected.
     */
    tabSelected() {
        if (!this.module || !this.course || !this.openModule) {
            return;
        }
        // Now that the first tab has been selected we can load the module.
        _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__["CoreCourseHelper"].openModule(this.module, this.course.id, {
            sectionId: this.contentsTab.pageParams.sectionId,
            modNavOptions: this.modNavOptions,
        });
        delete this.module;
    }
    /**
     * Load course option handlers.
     *
     * @return Promise resolved when done.
     */
    loadCourseHandlers() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.course) {
                return;
            }
            // Load the course handlers.
            const handlers = yield _services_course_options_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseOptionsDelegate"].getHandlersToDisplay(this.course, false, this.isGuest);
            let tabToLoad;
            // Create the full path.
            handlers.forEach((handler, index) => {
                handler.data.page = _singletons_text__WEBPACK_IMPORTED_MODULE_16__["CoreText"].concatenatePaths(this.currentPagePath, handler.data.page);
                handler.data.pageParams = handler.data.pageParams || {};
                // Check if this handler should be the first selected tab.
                if (this.firstTabName && handler.name == this.firstTabName) {
                    tabToLoad = index + 1;
                }
            });
            this.tabs = [...this.tabs, ...handlers.map(handler => (Object.assign(Object.assign({}, handler.data), { name: handler.name })))];
            // Select the tab if needed.
            this.firstTabName = undefined;
            if (tabToLoad) {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].nextTick();
                (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.selectByIndex(tabToLoad);
            }
        });
    }
    /**
     * Load title for the page.
     *
     * @return Promise resolved when done.
     */
    loadBasinInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.course) {
                return;
            }
            // Get the title to display initially.
            this.title = _services_format_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreCourseFormatDelegate"].getCourseTitle(this.course);
            yield this.setCourseColor();
            this.updateProgress();
            // Load sections.
            this.sections = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourse"].getSections(this.course.id, false, true), []);
            if (!this.sections) {
                return;
            }
            // Get the title again now that we have sections.
            this.title = _services_format_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreCourseFormatDelegate"].getCourseTitle(this.course, this.sections);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b;
        const path = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteFullPath(this.route.snapshot);
        _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].decreaseRouteDepth(path.replace(/(\/deep)+/, ''));
        (_a = this.selectTabObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.completionObserver) === null || _b === void 0 ? void 0 : _b.off();
    }
    /**
     * User entered the page.
     */
    ionViewDidEnter() {
        var _a;
        (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidEnter();
    }
    /**
     * User left the page.
     */
    ionViewDidLeave() {
        var _a;
        (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidLeave();
    }
    /**
     * Open the course summary
     */
    openCourseSummary() {
        if (!this.course) {
            return;
        }
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].openSideModal({
            component: _course_summary_course_summary__WEBPACK_IMPORTED_MODULE_13__["CoreCourseSummaryPage"],
            componentProps: {
                courseId: this.course.id,
                course: this.course,
            },
        });
    }
    /**
     * Update course progress.
     */
    updateProgress() {
        if (!this.course ||
            !('progress' in this.course) ||
            typeof this.course.progress !== 'number' ||
            this.course.progress < 0 ||
            this.course.completionusertracked === false) {
            this.progress = undefined;
            return;
        }
        this.progress = this.course.progress;
    }
    /**
     * Set course color.
     */
    setCourseColor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.course) {
                return;
            }
            yield _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_14__["CoreCoursesHelper"].loadCourseColorAndImage(this.course);
            if (!this.courseThumb) {
                return;
            }
            if (this.course.color) {
                this.courseThumb.nativeElement.style.setProperty('--course-color', this.course.color);
                const tint = _singletons_colors__WEBPACK_IMPORTED_MODULE_15__["CoreColors"].lighter(this.course.color, 50);
                this.courseThumb.nativeElement.style.setProperty('--course-color-tint', tint);
            }
            else if (this.course.colorNumber !== undefined) {
                this.courseThumb.nativeElement.classList.add('course-color-' + this.course.colorNumber);
            }
        });
    }
};
CoreCourseIndexPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CoreCourseIndexPage.propDecorators = {
    tabsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_tabs_outlet_tabs_outlet__WEBPACK_IMPORTED_MODULE_3__["CoreTabsOutletComponent"],] }],
    courseThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['courseThumb',] }]
};
CoreCourseIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-course-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/index/index.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.scss */ "./src/core/features/course/pages/index/index.scss")).default]
    })
], CoreCourseIndexPage);



/***/ }),

/***/ "./src/core/features/sitehome/pages/index/index.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/sitehome/pages/index/index.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreSiteHomeIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteHomeIndexPageModule", function() { return CoreSiteHomeIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/features/block/components/components.module */ "./src/core/features/block/components/components.module.ts");
/* harmony import */ var _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/components/components.module */ "./src/core/features/course/components/components.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./src/core/features/sitehome/pages/index/index.ts");
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







const routes = [
    {
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_6__["CoreSiteHomeIndexPage"],
    },
];
let CoreSiteHomeIndexPageModule = class CoreSiteHomeIndexPageModule {
};
CoreSiteHomeIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreBlockComponentsModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreCourseComponentsModule"],
        ],
        declarations: [
            ___WEBPACK_IMPORTED_MODULE_6__["CoreSiteHomeIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSiteHomeIndexPageModule);



/***/ }),

/***/ "./src/core/features/sitehome/pages/index/index.scss":
/*!***********************************************************!*\
  !*** ./src/core/features/sitehome/pages/index/index.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\nion-item ion-icon {\n  display: inline-block;\n  border-radius: var(--module-icon-radius);\n  padding: 0.7rem;\n  background-color: var(--gray-100);\n  color: var(--gray-900);\n  line-height: var(--size);\n  --margin-end: 1rem;\n  margin-right: var(--margin-end);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-item ion-icon {\n    margin-right: unset;\n    -webkit-margin-end: var(--margin-end);\n    margin-inline-end: var(--margin-end);\n  }\n}\ncore-spacer {\n  --spacer-horizontal: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9zaXRlaG9tZS9wYWdlcy9pbmRleC9pbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBa0dBOztFQUFBO0FDcEdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM3REE7RUFDSSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VMbVBBLCtCS2xQaUM7QUFvRHJDO0FMaU1NO0VBQ0U7SUFLSSxtQkFBQTtJQUtGLHFDS2hRMkI7SUxpUTNCLG9DS2pRMkI7RUEwRG5DO0FBQ0Y7QUF4REE7RUFDSSx5QkFBQTtBQTJESiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9zaXRlaG9tZS9wYWdlcy9pbmRleC9pbmRleC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcblxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXG4gKi9cblxuXG4vLyBTdHJpbmcgVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFN0cmluZyBSZXBsYWNlIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XG5cbiAgQGlmICRpbmRleCB7XG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xuICB9XG5cbiAgQHJldHVybiAkc3RyaW5nO1xufVxuXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XG4gIC8vIGVtcHR5IGFycmF5L2xpc3RcbiAgJHNwbGl0LWFycjogKCk7XG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcbiAgICAvLyBnZXQgdGhlIHN1YnN0cmluZyBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gdGhlIHNlcGFyYXRvclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XG4gICAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRpdGVtKTtcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xuICAgIC8vIGZpbmQgbmV3IGluZGV4IG9mIHNlcGFyYXRvclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICB9XG4gIC8vIGFkZCB0aGUgcmVtYWluaW5nIHN0cmluZyB0byBsaXN0ICh0aGUgbGFzdCBpdGVtKVxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XG5cbiAgQHJldHVybiAkc3BsaXQtYXJyO1xufVxuXG5cbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XG5cbiAgQGlmICRzdGFydC1pbmRleCB7XG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xuICAgICRlbmQtaW5kZXg6IHN0ci1pbmRleCgkcG9zdCwgJGVuZCk7XG5cbiAgICBAaWYgJGVuZC1pbmRleCB7XG4gICAgICBAcmV0dXJuIHN0ci1zbGljZSgkcG9zdCwgMSwgJGVuZC1pbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbnVsbDtcbn1cblxuXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xuICBAaWYgKHR5cGUtb2YoJHN0cmluZykgPT0gc3RyaW5nKSB7XG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcbiAgfVxuXG4gIEByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xuICAkc3BhY2VzOiBzdHItcmVwbGFjZSgkdmFsLCBcIiBcIiwgXCIlMjBcIik7XG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XG4gIEByZXR1cm4gJGVuY29kZWQ7XG59XG5cblxuLy8gQWRkIFJvb3QgU2VsZWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxuLy9cbi8vIEV4YW1wbGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdFwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxuLy9cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLmZpeGVkKVwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2hhZG93XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gYWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsICRhZGRIb3N0U2VsZWN0b3IpIHtcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XG5cbiAgJGxpc3Q6ICgpO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QoIGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBhIGNsYXNzIG9uIHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSk6aG9zdChcIik7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcblxuICAgICAgJG5ldy1lbGVtZW50OiAoKTtcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xuXG4gICAgICBAZWFjaCAkZWxlbWVudCBpbiAkZWxlbWVudHMge1xuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcblxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcblxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QgaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGp1c3QgdGhlIGhvc3RcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0XCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XG4gICAgICAvLyBvciBub3JtYWwgZWxlbWVudCBzbyBhcHBlbmQgYm90aCB0aGUgZGlyIGNoZWNrIGFuZCBob3N0LWNvbnRleHRcbiAgICB9IEBlbHNlIHtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiAkbGlzdDtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xuICovXG5cbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xuICBAaWYgJGFscGhhID09IG51bGwge1xuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcbiAgfVxufVxuXG4vLyBHZXRzIHRoZSBzcGVjaWZpYyBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIHRoZSBuYW1lIGFuZCB2YXJpYXRpb24uIEFscGhhL3JnYiBhcmUgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZilcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XG4gICR2YWx1ZTogbWFwLWdldCgkdmFsdWVzLCAkdmFyaWF0aW9uKTtcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xuXG4gIEBpZiAoJHZhcmlhdGlvbiA9PSBiYXNlKSB7XG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcbiAgfVxuXG4gIEBpZiAoJGFscGhhKSB7XG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xuICAgIEByZXR1cm4gcmdiYSh2YXIoI3skdmFyaWFibGV9LXJnYiwgJHZhbHVlKSwgJGFscGhhKTtcbiAgfVxuICBAaWYgKCRyZ2IpIHtcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xuICB9XG5cbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XG59XG5cbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG5cbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1MgZnJvbSBkaWZmZXJlbnQgY29tcG9uZW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5taXhpbnMuc2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXG4gKi9cblxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICB9XG4gIH1cblxuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcblxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gSXRlbSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBpdGVtLXB1c2gtc3ZnLXVybCgkZmlsbCkge1xuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcblxuICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsIHRydWUpO1xufVxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XG5cbi8qKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcbiAgfVxuXG4gIC8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4gIC8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIC0xMC5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQGZ1bmN0aW9uIGdldC1jb2xvci10aW50LXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogODAlKSB7XG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XG4gIH1cblxuICAvLyBJb25pYyBDb2xvcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXG4gIC8vIGNvbG9ycyBtYXBcblxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcbiAgICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcbiAgICAgICRsaWdodDogbWFwLWdldCgkYmFzZSwgJ2xpZ2h0Jyk7XG5cbiAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkbGlnaHQpO1xuXG4gICAgICBib2R5LmRhcmsge1xuICAgICAgICAgICRkYXJrOiBtYXAtZ2V0KCRiYXNlLCAnZGFyaycpO1xuICAgICAgICAgICRkYXJrOiBtaXgoJGxpZ2h0LCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcbiAgICAgICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGRhcmspO1xuICAgICAgfVxuICB9XG5cbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xuICAgICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xuICAgICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XG4gICAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XG5cbiAgICAgIC0tI3skY29sb3ItbmFtZX06ICN7JGJhc2V9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcblxuICAgICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcblxuICAgICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgICB9XG4gIH1cblxuXG4gQG1peGluIGNvcmUtZm9jdXMoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XG4gICAgfVxuIH1cblxuIEBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG4gICAgLy8gVGhpY2tlciBvcHRpb246XG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbn1cblxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xuICAgICR0cmFuc2l0aW9uczogKCk7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XG4gICAgfVxuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxuICovXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XG5cbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XG59XG5cbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgbnVsbCwgJHB4ICR0eXBlICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xufVxuXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1peGluIGRhcmttb2RlKCkge1xuICAgICRyb290OiAjeyZ9O1xuXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJib2R5LmRhcmtcIil9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDb2xvciBtaXhpbnMuXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XG59XG5cbi8vIEdldCB0aGUgYmV0dGVyIGNvbG9yIGNvbnRyYXN0IHVzaW5nIFdDQUcgYWxnb3J5dGhtLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xuXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAwLlxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XG5cbiAgICBAcmV0dXJuIGlmKCR3aGl0ZUNvbnRyYXN0IDwgJGJsYWNrQ29udHJhc3QsIHdoaXRlLCBibGFjayk7XG59XG5cbi8vIENvbG9yIGNvbnRyYXN0IHVzaW5nIHlpcSBhcHJveGltYXRpb24gd2l0aCAxNTAgdGhyZXNob2xkLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcbiAgICAkcjogcmVkKCRjb2xvcik7XG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcblxuICAgICR5aXE6ICgoJHIgKiAyOTkpICsgKCRnICogNTg3KSArICgkYiAqIDExNCkpIC8gMTAwMDtcblxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xufVxuXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yeXRobVxuQGZ1bmN0aW9uIGNoZWNrLWNvbnRyYXN0KCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XG5cbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XG4gICAgfVxufVxuXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xuICAgICRyOiByZWQoJGNvbG9yKTtcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xuXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcbiAgICAkYjogY29tcG9uZW50LWx1bWluYW5jZSgkYik7XG5cbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcbn1cblxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLyAyNTU7XG5cbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XG4gICAgICAgIEByZXR1cm4gJHZhbHVlIC8gMTIuOTI7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXG4gKi9cbiIsIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogICAgI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICAgICM4Zjk1OWUgIWRlZmF1bHQ7IC8vIFN0cm9rZSBvbiBpbnB1dHNcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogICAgIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXG5cbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXG4kZ3JlZW46ICAgICAgICMzNTdhMzIgIWRlZmF1bHQ7XG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG5cbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcblxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3IpICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxuICAgIHNlY29uZGFyeTogKGxpZ2h0OiAkc2Vjb25kYXJ5LCBkYXJrOiAkZ3JheS03MDApLFxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxuICAgIGRhbmdlcjogIChsaWdodDogJGRhbmdlciksXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXG4gICAgbWVkaXVtOiAobGlnaHQ6ICRtZWRpdW0sIGRhcms6ICRncmF5LTIwMCksXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcbikgIWRlZmF1bHQ7XG5cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cblxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJHNjcmVlbi1icmVha3BvaW50czogKFxuICAgIHhzOiAwLFxuICAgIHNtOiA1NzZweCxcbiAgICBtZDogNzY4cHgsXG4gICAgbGc6IDk5MnB4LFxuICAgIHRhYmxldDogOTkycHgsXG4gICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XG4kY29yZS10ZXh0LWhpZ2h0bGlnaHQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcblxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWRhc2hib2FyZC1sb2dvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1zZWN0aW9uLXNlbGVjdG9yOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLXRodW1iLW9uLWNhcmRzLWJhY2tncm91bmQ6IG51bGwgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbG9naW4gcGFnZS5cbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvcjogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLW5lZWQtaGVscDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLiAoZGVwcmVjYXRlZCBvbiA0LjApXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXG4kY29yZS11c2VyLWhpZGUtc2l0ZWluZm86ICRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbyAhZGVmYXVsdDtcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xuXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXG4gICAgYWRtaW5pc3RyYXRpb246ICM1ZDYzZjYsXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxuICAgIGNvbW11bmljYXRpb246ICMxMWE2NzYsXG4gICAgY29udGVudDogIzM5OWJlMixcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcbikgIWRlZmF1bHQ7XG5cbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxuICAgIGNhdGVnb3J5OiAjOGUyNGFhLFxuICAgIGNvdXJzZTogJHJlZCxcbiAgICBncm91cDogJHllbGxvdyxcbiAgICB1c2VyOiAkYmx1ZSxcbiAgICBzaXRlOiAkZ3JlZW5cbikgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHNcIjtcblxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2R1bGUtaWNvbi1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IDAuN3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XG4gICAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tc2l6ZSk7XG4gICAgLS1tYXJnaW4tZW5kOiAxcmVtO1xuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIHZhcigtLW1hcmdpbi1lbmQpKTtcbn1cblxuY29yZS1zcGFjZXIge1xuICAgIC0tc3BhY2VyLWhvcml6b250YWw6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/core/features/sitehome/pages/index/index.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/sitehome/pages/index/index.ts ***!
  \*********************************************************/
/*! exports provided: CoreSiteHomeIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteHomeIndexPage", function() { return CoreSiteHomeIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/sitehome/services/sitehome */ "./src/core/features/sitehome/services/sitehome.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features//courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _features_course_services_module_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/course/services/module-delegate */ "./src/core/features/course/services/module-delegate.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_block_services_block_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/block/services/block-helper */ "./src/core/features/block/services/block-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays site home index.
 */
let CoreSiteHomeIndexPage = class CoreSiteHomeIndexPage {
    constructor() {
        this.dataLoaded = false;
        this.hasContent = false;
        this.hasBlocks = false;
        this.items = [];
        this.siteHomeId = 1;
        this.searchEnabled = false;
        this.fetchSuccess = false;
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].SITE_UPDATED, () => {
            this.searchEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isSearchCoursesDisabledInSite();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.searchEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isSearchCoursesDisabledInSite();
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getRequiredCurrentSite();
        this.siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteHomeId();
        const module = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('module');
        if (module) {
            let modNavOptions = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('modNavOptions');
            if (!modNavOptions) {
                // Fallback to old way of passing params. @deprecated since 4.0.
                const modParams = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('modParams');
                if (modParams) {
                    modNavOptions = { params: modParams };
                }
            }
            _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__["CoreCourseHelper"].openModule(module, this.siteHomeId, { modNavOptions });
        }
        this.loadContent().finally(() => {
            this.dataLoaded = true;
        });
    }
    /**
     * Convenience function to fetch the data.
     *
     * @return Promise resolved when done.
     */
    loadContent() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hasContent = false;
            const config = this.currentSite.getStoredConfig() || { numsections: 1, frontpageloggedin: undefined };
            this.items = yield _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_5__["CoreSiteHome"].getFrontPageItems(config.frontpageloggedin);
            this.hasContent = this.items.length > 0;
            // Get the news forum.
            if (this.items.includes('NEWS_ITEMS')) {
                try {
                    const forum = yield _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_5__["CoreSiteHome"].getNewsForum(this.siteHomeId);
                    this.newsForumModule = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].getModule(forum.cmid, forum.course);
                    this.newsForumModule.handlerData = yield _features_course_services_module_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreCourseModuleDelegate"].getModuleDataFor(this.newsForumModule.modname, this.newsForumModule, this.siteHomeId, undefined, true);
                }
                catch (_b) {
                    // Ignore errors.
                }
            }
            try {
                const sections = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].getSections(this.siteHomeId, false, true);
                // Check "Include a topic section" setting from numsections.
                this.section = config.numsections ? sections.find((section) => section.section == 1) : undefined;
                if (this.section) {
                    const result = yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__["CoreCourseHelper"].addHandlerDataForModules([this.section], this.siteHomeId, undefined, undefined, true);
                    this.section.hasContent = result.hasContent;
                    this.hasContent = result.hasContent || this.hasContent;
                }
                if (!this.fetchSuccess) {
                    this.fetchSuccess = true;
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_13__["CoreUtils"].ignoreErrors(_features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].logView(this.siteHomeId, undefined, undefined, (_a = this.currentSite.getInfo()) === null || _a === void 0 ? void 0 : _a.sitename));
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.couldnotloadsectioncontent', true);
            }
            this.hasBlocks = yield _features_block_services_block_helper__WEBPACK_IMPORTED_MODULE_12__["CoreBlockHelper"].hasCourseBlocks(this.siteHomeId);
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        const promises = [];
        promises.push(_features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].invalidateSections(this.siteHomeId));
        promises.push(this.currentSite.invalidateConfig().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Config invalidated, fetch it again.
            const config = yield this.currentSite.getConfig();
            this.currentSite.setConfig(config);
            return;
        })));
        promises.push(_features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].invalidateCourseBlocks(this.siteHomeId));
        if (this.section && this.section.modules) {
            // Invalidate modules prefetch data.
            promises.push(_features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_10__["CoreCourseModulePrefetchDelegate"].invalidateModules(this.section.modules, this.siteHomeId));
        }
        Promise.all(promises).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadContent().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }));
    }
    /**
     * Go to search courses.
     */
    openSearch() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSitePath('courses/list', { params: { mode: 'search' } });
    }
    /**
     * Go to available courses.
     */
    openAvailableCourses() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSitePath('courses/list', { params: { mode: 'all' } });
    }
    /**
     * Go to my courses.
     */
    openMyCourses() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSitePath('courses/list', { params: { mode: 'my' } });
    }
    /**
     * Go to course categories.
     */
    openCourseCategories() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSitePath('courses/categories');
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        this.updateSiteObserver.off();
    }
};
CoreSiteHomeIndexPage.ctorParameters = () => [];
CoreSiteHomeIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-sitehome-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/sitehome/pages/index/index.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.scss */ "./src/core/features/sitehome/pages/index/index.scss")).default]
    })
], CoreSiteHomeIndexPage);



/***/ })

}]);
//# sourceMappingURL=pages-index-index-module.js.map