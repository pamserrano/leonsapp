(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                {{ 'core.settings.about' | translate}}\n            </h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class=\"list-item-limited-width\">\n        <ion-item button class=\"ion-text-wrap\" (click)=\"openPage('licenses')\" detail=\"true\">\n            <ion-icon name=\"far-copyright\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>{{ 'core.settings.opensourcelicenses' | translate }}</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"privacyPolicy\" class=\"ion-text-wrap\" button core-link auto-login=\"no\" [href]=\"privacyPolicy\" detail=\"true\"\n            detailIcon=\"open-outline\">\n            <ion-icon name=\"fas-user-shield\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>{{ 'core.settings.privacypolicy' | translate }}</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"a11yStatement\" class=\"ion-text-wrap\" button core-link auto-login=\"no\" [href]=\"a11yStatement\" detail=\"true\"\n            detailIcon=\"open-outline\">\n            <ion-icon name=\"fas-universal-access\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>{{ 'core.settings.accessstatement' | translate }}</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"currentSite && feedbackFormUrl\" class=\"ion-text-wrap\" button core-link [href]=\"feedbackFormUrl\" detail=\"true\"\n            detailIcon=\"open-outline\">\n            <ion-icon name=\"fas-bullhorn\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>{{ 'core.settings.helpusimprove' | translate }}</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-item button class=\"ion-text-wrap ion-text-center core-about-deviceinfo\" detail=\"false\" (click)=\"openPage('deviceinfo')\">\n        <ion-label>\n            <h2>{{ appName }} {{ versionName }}</h2>\n        </ion-label>\n    </ion-item>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'core.user.profile' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!userLoaded\" (ionRefresh)=\"refreshUser($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"userLoaded\">\n        <ion-list *ngIf=\"user\">\n            <ion-item class=\"ion-text-center core-user-profile-maininfo ion-text-wrap\" lines=\"full\">\n                <core-user-avatar [user]=\"user\" [userId]=\"user.id\" [linkProfile]=\"false\" [checkOnline]=\"!canChangeProfilePicture\">\n                    <ion-button class=\"edit-avatar\" *ngIf=\"canChangeProfilePicture\" (click)=\"changeProfilePicture()\"\n                        [attr.aria-label]=\"'core.user.newpicture' | translate\" fill=\"clear\">\n                        <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </core-user-avatar>\n                <ion-label>\n                    <h2>{{ user.fullname }}</h2>\n                    <p *ngIf=\"user.address\">\n                        <ion-icon name=\"fas-map-marker-alt\" [attr.aria-hidden]=\"true\"></ion-icon> {{ user.address }}\n                    </p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item-group *ngIf=\"hasContact\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'core.user.contact' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.email\">\n                    <ion-label>\n                        <h2>{{ 'core.user.email' | translate }}</h2>\n                        <p><a class=\"core-anchor\" href=\"mailto:{{user.email}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\n                                {{ user.email }}\n                            </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone1\">\n                    <ion-label>\n                        <h2>{{ 'core.user.phone1' | translate}}</h2>\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone1}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\n                                {{ user.phone1 }}\n                            </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone2\">\n                    <ion-label>\n                        <h2>{{ 'core.user.phone2' | translate}}</h2>\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone2}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\n                                {{ user.phone2 }}\n                            </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"formattedAddress\">\n                    <ion-label>\n                        <h2>{{ 'core.user.address' | translate}}</h2>\n                        <p><a class=\"core-anchor\" [href]=\"encodedAddress\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\n                                {{ formattedAddress }}\n                            </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.city && !formattedAddress\">\n                    <ion-label>\n                        <h2>{{ 'core.user.city' | translate}}</h2>\n                        <p>{{ user.city }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.country && !formattedAddress\">\n                    <ion-label>\n                        <h2>{{ 'core.user.country' | translate}}</h2>\n                        <p>{{ user.country }}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n            <ion-item-group *ngIf=\"hasDetails\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'core.userdetails' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.url\">\n                    <ion-label>\n                        <h2>{{ 'core.user.webpage' | translate}}</h2>\n                        <p><a class=\"core-anchor\" href=\"{{user.url}}\" core-link>\n                                {{ user.url }}\n                            </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap core-user-profile-interests\" *ngIf=\"interests\">\n                    <ion-label>\n                        <h2>{{ 'core.user.interests' | translate}}</h2>\n                        <ion-badge *ngFor=\"let interest of interests\" role=\"link\" (click)=\"openInterest(interest)\">\n                            {{ interest }}\n                        </ion-badge>\n                    </ion-label>\n                </ion-item>\n                <core-user-profile-field *ngFor=\"let field of user.customfields\" [field]=\"field\" contextLevel=\"course\"\n                    [contextInstanceId]=\"courseId\" [courseId]=\"courseId\">\n                </core-user-profile-field>\n            </ion-item-group>\n            <ion-item-group *ngIf=\"user.description\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'core.user.description' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p>\n                            <core-format-text [text]=\"user.description\" contextLevel=\"user\" [contextInstanceId]=\"user.id\">\n                            </core-format-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!user || (!hasContact && !hasDetails && !user.description)\" icon=\"fas-user\"\n            [message]=\" 'core.user.detailsnotavailable' | translate\">\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/settings/pages/about/about.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreSettingsAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPageModule", function() { return CoreSettingsAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/core/features/settings/pages/about/about.ts");
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
        component: _about__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsAboutPage"],
    },
];
let CoreSettingsAboutPageModule = class CoreSettingsAboutPageModule {
};
CoreSettingsAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _about__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsAboutPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsAboutPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/about/about.scss":
/*!***********************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".core-about-deviceinfo {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29yZS1hYm91dC1kZXZpY2VpbmZvIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/core/features/settings/pages/about/about.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.ts ***!
  \*********************************************************/
/*! exports provided: CoreSettingsAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPage", function() { return CoreSettingsAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * App settings about menu page.
 */
let CoreSettingsAboutPage = class CoreSettingsAboutPage {
    constructor() {
        var _a, _b;
        this.feedbackFormUrl = (_a = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.feedbackFormUrl) !== null && _a !== void 0 ? _a : 'https://feedback.moodle.org/mobileapp';
        this.a11yStatement = (_b = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.a11yStatement) !== null && _b !== void 0 ? _b : 'https://apps.moodle.com/admin/tool/policy/view.php?versionid=5';
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSite();
        this.appName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.appname;
        this.versionName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname;
        // Calculate the privacy policy to use.
        this.privacyPolicy = (this.currentSite && (this.currentSite.getStoredConfig('tool_mobile_apppolicy') ||
            this.currentSite.getStoredConfig('sitepolicy'))) || _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.privacypolicy;
    }
    /**
     * Opens a page.
     *
     * @param page The component deeplink name you want to push onto the navigation stack.
     */
    openPage(page) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigate(page);
    }
};
CoreSettingsAboutPage.ctorParameters = () => [];
CoreSettingsAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.scss */ "./src/core/features/settings/pages/about/about.scss")).default]
    })
], CoreSettingsAboutPage);



/***/ }),

/***/ "./src/core/features/user/pages/about/about.module.ts":
/*!************************************************************!*\
  !*** ./src/core/features/user/pages/about/about.module.ts ***!
  \************************************************************/
/*! exports provided: CoreUserAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPageModule", function() { return CoreUserAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/user/components/components.module */ "./src/core/features/user/components/components.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/core/features/user/pages/about/about.page.ts");
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
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
    },
];
let CoreUserAboutPageModule = class CoreUserAboutPageModule {
};
CoreUserAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreUserComponentsModule"],
        ],
        declarations: [
            _about_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreUserAboutPageModule);



/***/ }),

/***/ "./src/core/features/user/pages/about/about.page.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/user/pages/about/about.page.ts ***!
  \**********************************************************/
/*! exports provided: CoreUserAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPage", function() { return CoreUserAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user-helper */ "./src/core/features/user/services/user-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader-helper */ "./src/core/features/fileuploader/services/fileuploader-helper.ts");
/* harmony import */ var _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/mimetype */ "./src/core/services/utils/mimetype.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays info about a user.
 */
let CoreUserAboutPage = class CoreUserAboutPage {
    constructor() {
        this.userLoaded = false;
        this.hasContact = false;
        this.hasDetails = false;
        this.canChangeProfilePicture = false;
        try {
            this.site = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getRequiredCurrentSite();
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].back();
            return;
        }
        this.obsProfileRefreshed = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_REFRESHED"], (data) => {
            if (!this.user || !data.user) {
                return;
            }
            this.user.email = data.user.email;
            this.user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatAddress('', data.user.city, data.user.country);
        }, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('userId') || 0;
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('courseId') || 0;
            // Allow to change the profile image only in the app profile page.
            this.canChangeProfilePicture =
                !this.courseId &&
                    this.userId == this.site.getUserId() &&
                    this.site.canUploadFiles() &&
                    !_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].isUpdatePictureDisabledInSite(this.site);
            this.fetchUser().finally(() => {
                this.userLoaded = true;
            });
        });
    }
    /**
     * Fetches the user data.
     *
     * @return Promise resolved when done.
     */
    fetchUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].getProfile(this.userId, this.courseId);
                if (user.address) {
                    this.formattedAddress = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatAddress(user.address, user.city, user.country);
                    this.encodedAddress = _services_utils_text__WEBPACK_IMPORTED_MODULE_4__["CoreTextUtils"].buildAddressURL(this.formattedAddress);
                }
                this.interests = user.interests ?
                    user.interests.split(',').map(interest => interest.trim()) :
                    undefined;
                this.hasContact = !!(user.email || user.phone1 || user.phone2 || user.city || user.country || user.address);
                this.hasDetails = !!(user.url || user.interests || (user.customfields && user.customfields.length > 0));
                this.user = user;
                this.title = user.fullname;
                this.user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatAddress('', user.city, user.country);
                yield this.checkUserImageUpdated();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.user.errorloaduser', true);
            }
        });
    }
    /**
     * Check if current user image has changed.
     *
     * @return Promise resolved when done.
     */
    checkUserImageUpdated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.site || !this.site.getInfo() || !this.user) {
                return;
            }
            if (this.userId != this.site.getUserId() || !this.isUserAvatarDirty()) {
                // Not current user or hasn't changed.
                return;
            }
            // The current user image received is different than the one stored in site info. Assume the image was updated.
            // Update the site info to get the right avatar in there.
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].updateSiteInfo(this.site.getId());
            }
            catch (_a) {
                // Cannot update site info. Assume the profile image is the right one.
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_PICTURE_UPDATED"], {
                    userId: this.userId,
                    picture: this.user.profileimageurl,
                }, this.site.getId());
            }
            if (this.isUserAvatarDirty()) {
                // The image is still different, this means that the good one is the one in site info.
                yield this.refreshUser();
            }
            else {
                // Now they're the same, send event to use the right avatar in the rest of the app.
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_PICTURE_UPDATED"], {
                    userId: this.userId,
                    picture: this.user.profileimageurl,
                }, this.site.getId());
            }
        });
    }
    /**
     * Opens dialog to change profile picture.
     */
    changeProfilePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const maxSize = -1;
            const title = _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.user.newpicture');
            const mimetypes = _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_11__["CoreMimetypeUtils"].getGroupMimeInfo('image', 'mimetypes');
            let modal;
            try {
                const result = yield _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_10__["CoreFileUploaderHelper"].selectAndUploadFile(maxSize, title, mimetypes);
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
                const profileImageURL = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].changeProfilePicture(result.itemid, this.userId, this.site.getId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_PICTURE_UPDATED"], {
                    userId: this.userId,
                    picture: profileImageURL,
                }, this.site.getId());
                _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].updateSiteInfo(this.site.getId());
                this.refreshUser();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Refresh the user data.
     *
     * @param event Event.
     * @return Promise resolved when done.
     */
    refreshUser(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].invalidateUserCache(this.userId));
            yield this.fetchUser();
            event === null || event === void 0 ? void 0 : event.complete();
            if (this.user) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_REFRESHED"], {
                    courseId: this.courseId,
                    userId: this.userId,
                    user: this.user,
                }, this.site.getId());
            }
        });
    }
    /**
     * Check whether the user avatar is not up to date with site info.
     *
     * @return Whether the user avatar differs from site info cache.
     */
    isUserAvatarDirty() {
        var _a;
        if (!this.user || !this.site) {
            return false;
        }
        const courseAvatarUrl = this.normalizeAvatarUrl(this.user.profileimageurl);
        const siteAvatarUrl = this.normalizeAvatarUrl((_a = this.site.getInfo()) === null || _a === void 0 ? void 0 : _a.userpictureurl);
        return courseAvatarUrl !== siteAvatarUrl;
    }
    /**
     * Normalize an avatar url regardless of theme.
     *
     * Given that the default image is the only one that can be changed per theme, any other url will stay the same. Note that
     * the values returned by this function may not be valid urls, given that they are intended for string comparison.
     *
     * @param avatarUrl Avatar url.
     * @return Normalized avatar string (may not be a valid url).
     */
    normalizeAvatarUrl(avatarUrl) {
        var _a;
        if (!avatarUrl) {
            return 'undefined';
        }
        if (avatarUrl.startsWith(`${(_a = this.site) === null || _a === void 0 ? void 0 : _a.siteUrl}/theme/image.php`)) {
            return 'default';
        }
        return avatarUrl;
    }
    /**
     * Open a user interest.
     *
     * @param interest Interest name.
     */
    openInterest(interest) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].navigateToSitePath('/tag/index', { params: {
                tagName: interest,
            } });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.obsProfileRefreshed) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreUserAboutPage.ctorParameters = () => [];
CoreUserAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.scss */ "./src/core/features/user/pages/about/about.scss")).default]
    })
], CoreUserAboutPage);



/***/ }),

/***/ "./src/core/features/user/pages/about/about.scss":
/*!*******************************************************!*\
  !*** ./src/core/features/user/pages/about/about.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-user-profile-maininfo::part(native) {\n  flex-direction: column;\n}\n:host ::ng-deep core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--core-large-avatar-size);\n  height: calc(var(--core-avatar-size) + 16px);\n}\n:host ::ng-deep core-user-avatar img {\n  margin: 8px auto;\n}\n:host ::ng-deep core-user-avatar .contact-status {\n  width: 24px !important;\n  height: 24px !important;\n  right: calc(50% - 12px - var(--core-avatar-size) / 2) !important;\n}\n:host ::ng-deep core-user-avatar .edit-avatar {\n  position: absolute;\n  right: calc(50% - 15px - var(--core-avatar-size) / 2);\n  bottom: -12px;\n}\n:host-context([dir=rtl]) :host ::ng-deep core-user-avatar .edit-avatar {\n  left: 0;\n  right: unset;\n}\n:host ::ng-deep core-user-avatar .edit-avatar::part(native) {\n  border-radius: 50%;\n  background: var(--ion-item-background);\n}\n:host .core-user-profile-interests ion-badge {\n  cursor: pointer;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n:host-context([dir=rtl]) ::ng-deep core-user-avatar .edit-avatar {\n  left: -24px;\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3VzZXIvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHNCQUFBO0FBRFI7QUFJUTtFQUNJLGNBQUE7RUFDQSxpREFBQTtFQUNBLDRDQUFBO0FBRlo7QUFJWTtFQUNJLGdCQUFBO0FBRmhCO0FBS1k7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0VBQUE7QUFIaEI7QUFNWTtFQUNJLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0FBSmhCO0FBTWdCO0VBQ0ksT0FBQTtFQUNBLFlBQUE7QUFKcEI7QUFNZ0I7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0FBSnBCO0FBV1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVRaO0FBZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVpKIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL3VzZXIvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAgIC5jb3JlLXVzZXItcHJvZmlsZS1tYWluaW5mbzo6cGFydChuYXRpdmUpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgICAgY29yZS11c2VyLWF2YXRhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIC0tY29yZS1hdmF0YXItc2l6ZTogdmFyKC0tY29yZS1sYXJnZS1hdmF0YXItc2l6ZSk7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY29yZS1hdmF0YXItc2l6ZSkgKyAxNnB4KTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdC1zdGF0dXMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IGNhbGMoNTAlIC0gMTJweCAtICB2YXIoLS1jb3JlLWF2YXRhci1zaXplKSAvIDIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5lZGl0LWF2YXRhciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDE1cHggLSAgdmFyKC0tY29yZS1hdmF0YXItc2l6ZSkgLyAyKTtcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMnB4O1xuXG4gICAgICAgICAgICAgICAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSAmIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb3JlLXVzZXItcHJvZmlsZS1pbnRlcmVzdHMge1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgOjpuZy1kZWVwIGNvcmUtdXNlci1hdmF0YXIgLmVkaXQtYXZhdGFyIHtcbiAgICBsZWZ0OiAtMjRweDtcbiAgICByaWdodDogdW5zZXQ7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map