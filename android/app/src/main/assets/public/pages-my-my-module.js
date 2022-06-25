(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-my-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my/my.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my/my.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <core-format-text [text]=\"siteName\" contextLevel=\"system\" [contextInstanceId]=\"0\" class=\"core-header-sitename\">\n                </core-format-text>\n                <img src=\"assets/img/top_logo.png\" class=\"core-header-logo\" [alt]=\"siteName\">\n            </h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <core-user-menu-button></core-user-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item class=\"ion-text-wrap divider\">\n            <ion-label>\n                <h2 class=\"big\">{{ 'core.courses.mycourses' | translate }}</h2>\n            </ion-label>\n            <div slot=\"end\" class=\"flex-row\">\n                <!-- Download all courses. -->\n                <div *ngIf=\"downloadCoursesEnabled && myOverviewBlock && myOverviewBlock.filteredCourses.length > 0\"\n                    class=\"core-button-spinner\">\n                    <ion-button *ngIf=\"!myOverviewBlock.prefetchCoursesData.loading\" fill=\"clear\"\n                        (click)=\"myOverviewBlock.prefetchCourses()\"\n                        [attr.aria-label]=\"myOverviewBlock.prefetchCoursesData.statusTranslatable | translate\">\n                        <ion-icon [name]=\"myOverviewBlock.prefetchCoursesData.icon\" slot=\"icon-only\" aria-hidden=\"true\">\n                        </ion-icon>\n                    </ion-button>\n                    <ion-badge class=\"core-course-download-courses-progress\" *ngIf=\"myOverviewBlock.prefetchCoursesData.badge\"\n                        role=\"progressbar\" [attr.aria-valuemax]=\"myOverviewBlock.prefetchCoursesData.total\"\n                        [attr.aria-valuenow]=\"myOverviewBlock.prefetchCoursesData.count\"\n                        [attr.aria-valuetext]=\"myOverviewBlock.prefetchCoursesData.badgeA11yText\">\n                        {{myOverviewBlock.prefetchCoursesData.badge}}\n                    </ion-badge>\n                    <ion-spinner *ngIf=\"myOverviewBlock.prefetchCoursesData.loading\" [attr.aria-label]=\"'core.loading' | translate\">\n                    </ion-spinner>\n                </div>\n            </div>\n        </ion-item>\n        <ion-list>\n            <core-block *ngIf=\"loadedBlock?.visible\" [block]=\"loadedBlock\" contextLevel=\"user\" [instanceId]=\"userId\"></core-block>\n        </ion-list>\n\n        <core-block-side-blocks-button slot=\"fixed\" *ngIf=\"hasSideBlocks\" contextLevel=\"user\" [instanceId]=\"userId\"\n            [myDashboardPage]=\"myPageCourses\">\n        </core-block-side-blocks-button>\n\n        <core-empty-box *ngIf=\"!loadedBlock\" icon=\"fas-cubes\" [message]=\"'core.course.nocontentavailable' | translate\">\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/courses/pages/my/my.module.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/courses/pages/my/my.module.ts ***!
  \*********************************************************/
/*! exports provided: CoreCoursesMyCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesMyCoursesPageModule", function() { return CoreCoursesMyCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/block/components/components.module */ "./src/core/features/block/components/components.module.ts");
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my */ "./src/core/features/courses/pages/my/my.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
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
        component: _my__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesMyCoursesPage"],
    },
];
let CoreCoursesMyCoursesPageModule = class CoreCoursesMyCoursesPageModule {
};
CoreCoursesMyCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreBlockComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuComponentsModule"],
        ],
        declarations: [
            _my__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesMyCoursesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursesMyCoursesPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/my/my.scss":
/*!****************************************************!*\
  !*** ./src/core/features/courses/pages/my/my.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep ion-item-divider {\n  display: none !important;\n}\n\n:host ::ng-deep core-loading {\n  --internal-loading-inline-min-height: calc(100vh - var(--core-header-toolbar-height));\n}\n\n:host-context(ion-tabs.placement-bottom) ::ng-deep core-loading {\n  --internal-loading-inline-min-height: calc(100vh - var(--core-header-toolbar-height) - var(--bottom-tabs-size) - 2px);\n}\n\ncore-block ::ng-deep ion-card.addon-block-myoverview {\n  --border-width: 0;\n  --background: transparent;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2NvdXJzZXMvcGFnZXMvbXkvbXkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxRkFBQTtBQUVKOztBQUNBO0VBQ0kscUhBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBRUoiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvY291cnNlcy9wYWdlcy9teS9teS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCBjb3JlLWxvYWRpbmcge1xuICAgIC0taW50ZXJuYWwtbG9hZGluZy1pbmxpbmUtbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWNvcmUtaGVhZGVyLXRvb2xiYXItaGVpZ2h0KSk7XG59XG5cbjpob3N0LWNvbnRleHQoaW9uLXRhYnMucGxhY2VtZW50LWJvdHRvbSkgOjpuZy1kZWVwIGNvcmUtbG9hZGluZyB7XG4gICAgLS1pbnRlcm5hbC1sb2FkaW5nLWlubGluZS1taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tY29yZS1oZWFkZXItdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tYm90dG9tLXRhYnMtc2l6ZSkgLSAycHgpO1xufVxuXG5jb3JlLWJsb2NrIDo6bmctZGVlcCBpb24tY2FyZC5hZGRvbi1ibG9jay1teW92ZXJ2aWV3IHtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/courses/pages/my/my.ts":
/*!**************************************************!*\
  !*** ./src/core/features/courses/pages/my/my.ts ***!
  \**************************************************/
/*! exports provided: CoreCoursesMyCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesMyCoursesPage", function() { return CoreCoursesMyCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_block_components_block_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/block/components/block/block */ "./src/core/features/block/components/block/block.ts");
/* harmony import */ var _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/courses/services/dashboard */ "./src/core/features/courses/services/dashboard.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
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
 * Page that shows a my courses.
 */
let CoreCoursesMyCoursesPage = class CoreCoursesMyCoursesPage {
    constructor() {
        this.siteName = '';
        this.downloadCoursesEnabled = false;
        this.loaded = false;
        this.myPageCourses = _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_3__["CoreCoursesDashboardProvider"].MY_PAGE_COURSES;
        this.hasSideBlocks = false;
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].SITE_UPDATED, () => {
            this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_9__["CoreCourses"].isDownloadCoursesDisabledInSite();
            this.loadSiteName();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
        this.userId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_9__["CoreCourses"].isDownloadCoursesDisabledInSite();
        const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_4__["CoreMainMenuDeepLinkManager"]();
        deepLinkManager.treatLink();
        this.loadSiteName();
        this.loadContent();
    }
    /**
     * Load my overview block instance.
     */
    loadContent() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const available = yield _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_3__["CoreCoursesDashboard"].isAvailable();
            const disabled = yield _services_courses__WEBPACK_IMPORTED_MODULE_9__["CoreCourses"].isMyCoursesDisabled();
            if (available && !disabled) {
                try {
                    const blocks = yield _features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_3__["CoreCoursesDashboard"].getDashboardBlocks(undefined, undefined, this.myPageCourses);
                    // My overview block should always be in main blocks, but check side blocks too just in case.
                    this.loadedBlock = blocks.mainBlocks.concat(blocks.sideBlocks).find((block) => block.name == 'myoverview');
                    this.hasSideBlocks = blocks.sideBlocks.length > 0;
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].nextTicks(2);
                    this.myOverviewBlock = (_b = (_a = this.block) === null || _a === void 0 ? void 0 : _a.dynamicComponent) === null || _b === void 0 ? void 0 : _b.instance;
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(error);
                    // Cannot get the blocks, just show the block if needed.
                    this.loadFallbackBlock();
                }
            }
            else if (!available) {
                // WS not available, or my courses page not available. show fallback block.
                this.loadFallbackBlock();
            }
            else {
                // Disabled.
                this.loadedBlock = undefined;
            }
            this.loaded = true;
        });
    }
    /**
     * Load the site name.
     */
    loadSiteName() {
        this.siteName = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getRequiredCurrentSite().getSiteName() || '';
    }
    /**
     * Load fallback blocks.
     */
    loadFallbackBlock() {
        this.loadedBlock = {
            name: 'myoverview',
            visible: true,
        };
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refresh(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_3__["CoreCoursesDashboard"].invalidateDashboardBlocks(_features_courses_services_dashboard__WEBPACK_IMPORTED_MODULE_3__["CoreCoursesDashboardProvider"].MY_PAGE_COURSES));
            // Invalidate the blocks.
            if (this.myOverviewBlock) {
                promises.push(_services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(this.myOverviewBlock.doRefresh()));
            }
            Promise.all(promises).finally(() => {
                this.loadContent().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreCoursesMyCoursesPage.ctorParameters = () => [];
CoreCoursesMyCoursesPage.propDecorators = {
    block: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_block_components_block_block__WEBPACK_IMPORTED_MODULE_2__["CoreBlockComponent"],] }]
};
CoreCoursesMyCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-my',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/my/my.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my.scss */ "./src/core/features/courses/pages/my/my.scss")).default]
    })
], CoreCoursesMyCoursesPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-my-module.js.map