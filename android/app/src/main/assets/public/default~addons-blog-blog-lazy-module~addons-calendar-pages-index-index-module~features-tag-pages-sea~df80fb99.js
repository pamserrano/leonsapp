(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-tag-pages-sea~df80fb99"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/components/sites/sites.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/components/sites/sites.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button fill=\"clear\" (click)=\"close($event)\" [attr.aria-label]=\"'core.back' | translate\">\n                <ion-icon name=\"arrow-back\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>\n            <h1>{{ 'core.mainmenu.switchaccount' | translate }}</h1>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"accountsList.count > 1\" (click)=\"toggleDelete()\"\n                [attr.aria-label]=\"'core.login.toggleremove' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-list class=\"core-sitelist\">\n            <ion-card *ngIf=\"accountsList.currentSite\">\n                <ion-item-divider sticky=\"true\" class=\"core-sitelist-sitename\">\n                    <ion-label>\n                        <h2>\n                            <core-format-text [text]=\"accountsList.currentSite.siteName\" clean=\"true\"\n                                [siteId]=\"accountsList.currentSite.id\"></core-format-text>\n                        </h2>\n                        <p><a [href]=\"accountsList.currentSite.siteUrl\" core-link autoLogin=\"yes\">{{\n                                accountsList.currentSite.siteUrlWithoutProtocol }}</a>\n                        </p>\n                    </ion-label>\n                </ion-item-divider>\n\n                <ion-item detail=\"false\">\n                    <ion-avatar slot=\"start\">\n                        <img [src]=\"accountsList.currentSite.avatar\" core-external-content [siteId]=\"accountsList.currentSite.id\"\n                            alt=\"{{ 'core.pictureof' | translate:{$a: accountsList.currentSite.fullName} }}\"\n                            onError=\"this.src='assets/img/user-avatar.png'\">\n                    </ion-avatar>\n                    <ion-label>\n                        <p class=\"item-heading\">{{accountsList.currentSite.fullName}}</p>\n                    </ion-label>\n                    <ion-icon color=\"success\" name=\"fas-check\"></ion-icon>\n                </ion-item>\n\n                <ng-container *ngTemplateOutlet=\"siteList; context: {sites: accountsList.sameSite}\"></ng-container>\n            </ion-card>\n\n            <ion-card *ngFor=\"let sites of accountsList.otherSites\">\n                <ion-item-divider sticky=\"true\" *ngIf=\"sites[0]\" class=\"core-sitelist-sitename\">\n                    <ion-label>\n                        <h2>\n                            <core-format-text [text]=\"sites[0].siteName\" clean=\"true\" [siteId]=\"sites[0].id\"></core-format-text>\n                        </h2>\n                        <p><a [href]=\"sites[0].siteUrl\" core-link autoLogin=\"no\">{{ sites[0].siteUrlWithoutProtocol }}</a></p>\n                    </ion-label>\n                </ion-item-divider>\n\n                <ng-container *ngTemplateOutlet=\"siteList; context: {sites: sites}\"></ng-container>\n            </ion-card>\n\n        </ion-list>\n    </core-loading>\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button (click)=\"add($event)\" [attr.aria-label]=\"'core.login.add' | translate\">\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'core.login.add' | translate }}</span>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n<!-- Template to render a list of sites. -->\n<ng-template #siteList let-sites=\"sites\">\n    <ion-item button *ngFor=\"let site of sites\" (click)=\"login($event, site.id)\" detail=\"true\">\n        <ion-avatar slot=\"start\">\n            <img [src]=\"site.avatar\" core-external-content [siteId]=\"site.id\" alt=\"{{ 'core.pictureof' | translate:{$a: site.fullName} }}\"\n                onError=\"this.src='assets/img/user-avatar.png'\">\n        </ion-avatar>\n        <ion-label>\n            <p class=\"item-heading\">{{site.fullName}}</p>\n        </ion-label>\n        <ion-badge slot=\"end\" *ngIf=\"!showDelete && site.badge\" @coreShowHideAnimation>\n            <span aria-hidden=\"true\">{{site.badge}}</span>\n            <span class=\"sr-only\">{{ 'core.login.sitebadgedescription' | translate:{ count: site.badge }\n                }}</span>\n        </ion-badge>\n        <ion-button *ngIf=\"showDelete\" slot=\"end\" fill=\"clear\" color=\"danger\" (click)=\"deleteSite($event, site)\"\n            [attr.aria-label]=\"'core.login.removeaccount' | translate\" [@coreSlideInOut]=\"'fromRight'\">\n            <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n        </ion-button>\n    </ion-item>\n</ng-template>\n");

/***/ }),

/***/ "./src/core/features/login/components/components.module.ts":
/*!*****************************************************************!*\
  !*** ./src/core/features/login/components/components.module.ts ***!
  \*****************************************************************/
/*! exports provided: CoreLoginComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginComponentsModule", function() { return CoreLoginComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _site_help_site_help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-help/site-help */ "./src/core/features/login/components/site-help/site-help.ts");
/* harmony import */ var _sites_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sites/sites */ "./src/core/features/login/components/sites/sites.ts");
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






let CoreLoginComponentsModule = class CoreLoginComponentsModule {
};
CoreLoginComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_3__["CoreLoginSiteOnboardingComponent"],
            _site_help_site_help__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSiteHelpComponent"],
            _sites_sites__WEBPACK_IMPORTED_MODULE_5__["CoreLoginSitesComponent"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        exports: [
            _site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_3__["CoreLoginSiteOnboardingComponent"],
            _site_help_site_help__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSiteHelpComponent"],
            _sites_sites__WEBPACK_IMPORTED_MODULE_5__["CoreLoginSitesComponent"],
        ],
    })
], CoreLoginComponentsModule);



/***/ }),

/***/ "./src/core/features/login/components/sites/sites.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/login/components/sites/sites.ts ***!
  \***********************************************************/
/*! exports provided: CoreLoginSitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitesComponent", function() { return CoreLoginSitesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/filter/services/filter */ "./src/core/features/filter/services/filter.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Component that displays a "splash screen" while the app is being initialized.
 */
let CoreLoginSitesComponent = class CoreLoginSitesComponent {
    constructor() {
        this.accountsList = {
            sameSite: [],
            otherSites: [],
            count: 0,
        };
        this.showDelete = false;
        this.loaded = false;
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getRequiredCurrentSite().getId();
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.accountsList = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].getAccountsList(this.currentSiteId);
            this.loaded = true;
        });
    }
    /**
     * Go to the page to add a site.
     *
     * @param event Click event.
     */
    add(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.close(event, true);
            yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].goToAddSite(true, true);
        });
    }
    /**
     * Delete a site.
     *
     * @param event Click event.
     * @param site Site to delete.
     * @return Promise resolved when done.
     */
    deleteSite(event, site) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.stopPropagation();
            let siteName = site.siteName || '';
            siteName = yield _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_6__["CoreFilter"].formatText(siteName, { clean: true, singleLine: true, filter: false }, [], site.id);
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showDeleteConfirm('core.login.confirmdeletesite', { sitename: siteName });
            }
            catch (_a) {
                // User cancelled, stop.
                return;
            }
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].deleteAccountFromList(this.accountsList, site);
                this.showDelete = false;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showErrorModalDefault(error, 'core.login.errordeletesite', true);
            }
        });
    }
    /**
     * Login in a site.
     *
     * @param event Click event.
     * @param siteId The site ID.
     * @return Promise resolved when done.
     */
    login(event, siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.close(event, true);
            // This navigation will logout and navigate to the site home.
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSiteHome({ preferCurrentTab: false, siteId });
        });
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Close modal.
     *
     * @param event Click event.
     */
    close(event, closeAll = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            yield _singletons__WEBPACK_IMPORTED_MODULE_8__["ModalController"].dismiss(closeAll);
        });
    }
};
CoreLoginSitesComponent.ctorParameters = () => [];
CoreLoginSitesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'core-login-sites',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sites.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/components/sites/sites.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_7__["CoreAnimations"].SLIDE_IN_OUT, _components_animations__WEBPACK_IMPORTED_MODULE_7__["CoreAnimations"].SHOW_HIDE],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../sitelist.scss */ "./src/core/features/login/sitelist.scss")).default]
    })
], CoreLoginSitesComponent);



/***/ }),

/***/ "./src/core/features/login/sitelist.scss":
/*!***********************************************!*\
  !*** ./src/core/features/login/sitelist.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list.core-sitelist .core-sitelist-sitename {\n  border-bottom: 1px solid var(--stroke);\n}\nion-list.core-sitelist .core-sitelist-sitename ion-label {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3NpdGVsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFNSSxzQ0FBQTtBQUxSO0FBQVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFFWiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9zaXRlbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QuY29yZS1zaXRlbGlzdCB7XG4gICAgLmNvcmUtc2l0ZWxpc3Qtc2l0ZW5hbWUge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN0cm9rZSk7XG4gICAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-tag-pages-sea~df80fb99.js.map