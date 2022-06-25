(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~competency-course-contents-lazy-module~competency-course-details-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/coursecompetencies/coursecompetencies.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/coursecompetencies/coursecompetencies.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'addon.competency.coursecompetencies' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!competencies.loaded\" (ionRefresh)=\"refreshCourseCompetencies($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"competencies.loaded\">\n        <ion-card *ngIf=\"!user && courseCompetencies && courseCompetencies.statistics.competencycount > 0\">\n            <ng-container *ngIf=\"courseCompetencies.cangradecompetencies\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"courseCompetencies.settings.pushratingstouserplans\">\n                    <ion-label>{{ 'addon.competency.coursecompetencyratingsarepushedtouserplans' | translate }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!courseCompetencies.settings.pushratingstouserplans\" color=\"danger\">\n                    <ion-label>{{ 'addon.competency.coursecompetencyratingsarenotpushedtouserplans' | translate }}</ion-label>\n                </ion-item>\n            </ng-container>\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"courseCompetencies.statistics.canbegradedincourse\">\n                <ion-label>\n                    <span id=\"addon-competency-course-{{courseId}}-progress\">\n                        {{ 'addon.competency.xcompetenciesproficientoutofyincourse' | translate: {$a:\n                        {x: courseCompetencies.statistics.proficientcompetencycount, y: courseCompetencies.statistics.competencycount} } }}\n                    </span>\n                    <core-progress-bar [progress]=\"courseCompetencies.statistics.proficientcompetencypercentage\"\n                        ariaDescribedBy=\"addon-competency-course-{{courseId}}-progress\">\n                    </core-progress-bar>\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"ion-text-wrap\"\n                *ngIf=\"courseCompetencies.statistics.canmanagecoursecompetencies && courseCompetencies.statistics.leastproficientcount > 0\">\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'addon.competency.competenciesmostoftennotproficientincourse' | translate }}</p>\n                    <p *ngFor=\"let comp of courseCompetencies.statistics.leastproficient\">\n                        <button class=\"as-link\" (click)=\"openCompetencySummary(comp.id)\">\n                            {{ comp.shortname }} - {{ comp.idnumber }}\n                        </button>\n                    </p>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n\n        <h2 class=\"ion-margin-horizontal\" *ngIf=\"courseCompetencies && courseCompetencies.statistics.competencycount > 0\">\n            {{ 'addon.competency.coursecompetencies' | translate }}\n        </h2>\n        <ion-card *ngIf=\"user\">\n            <ion-item class=\"ion-text-wrap\">\n                <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\n                <ion-label>\n                    <h2>{{ user.fullname }}</h2>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n        <core-empty-box *ngIf=\"courseCompetencies && courseCompetencies.statistics.competencycount == 0\" icon=\"fas-award\"\n            message=\"{{ 'addon.competency.nocompetenciesincourse' | translate }}\">\n        </core-empty-box>\n\n        <div *ngIf=\"competencies.loaded\">\n            <ion-card *ngFor=\"let competency of competencies.items\">\n                <ion-item class=\"ion-text-wrap\" (click)=\"competencies.select(competency)\"\n                    [attr.aria-label]=\"competency.competency.shortname\" detail=\"true\" button>\n                    <ion-label>\n                        <p class=\"item-heading\">\n                            {{competency.competency.shortname}} <em>{{competency.competency.idnumber}}</em>\n                        </p>\n                    </ion-label>\n                    <ion-badge slot=\"end\" *ngIf=\"competency.usercompetencycourse && competency.usercompetencycourse.gradename\"\n                        [color]=\"competency.usercompetencycourse.proficiency ? 'success' : 'danger'\">\n                        {{ competency.usercompetencycourse.gradename }}\n                    </ion-badge>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p *ngIf=\"competency.competency.description\">\n                            <core-format-text [text]=\"competency.competency.description\" contextLevel=\"course\"\n                                [contextInstanceId]=\"courseId\">\n                            </core-format-text>\n                        </p>\n                        <div>\n                            <p class=\"item-heading\">{{ 'addon.competency.path' | translate }}</p>\n                            <p>\n                                <a *ngIf=\"competency.comppath.showlinks\" [href]=\"getCompetencyFrameworkUrl(competency)\" core-link\n                                    [title]=\"competency.comppath.framework.name\">\n                                    {{ competency.comppath.framework.name }}\n                                </a>\n                                <ng-container *ngIf=\"!competency.comppath.showlinks\">\n                                    {{ competency.comppath.framework.name }}\n                                </ng-container>\n                                &nbsp;/&nbsp;\n                                <ng-container *ngFor=\"let ancestor of competency.comppath.ancestors\">\n                                    <button class=\"as-link\" *ngIf=\"competency.comppath.showlinks\"\n                                        (click)=\"openCompetencySummary(ancestor.id)\">\n                                        {{ ancestor.name }}\n                                    </button>\n                                    <ng-container *ngIf=\"!competency.comppath.showlinks\">{{ ancestor.name }}</ng-container>\n                                    <ng-container *ngIf=\"!ancestor.last\">&nbsp;/&nbsp;</ng-container>\n                                </ng-container>\n                            </p>\n                        </div>\n                        <div *ngIf=\"courseCompetencies?.statistics.canmanagecoursecompetencies\">\n                            <p class=\"item-heading\">{{ 'addon.competency.uponcoursecompletion' | translate }}</p>\n                            <ng-container *ngFor=\"let ruleoutcome of competency.ruleoutcomeoptions\">\n                                <span *ngIf=\"ruleoutcome.selected\">{{ ruleoutcome.text }}</span>\n                            </ng-container>\n                        </div>\n                        <div>\n                            <p class=\"item-heading\">{{ 'addon.competency.activities' | translate }}</p>\n                            <p *ngIf=\"competency.coursemodules.length == 0\">\n                                {{ 'addon.competency.noactivities' | translate }}\n                            </p>\n                            <ion-item class=\"ion-text-wrap core-course-module-handler\" [attr.aria-label]=\"activity.name\" core-link\n                                *ngFor=\"let activity of competency.coursemodules\" [href]=\"activity.url\" capture=\"true\">\n                                <core-mod-icon slot=\"start\" [modicon]=\"activity.iconurl\" [showAlt]=\"false\" *ngIf=\"activity.iconurl\">\n                                </core-mod-icon>\n                                <ion-label>\n                                    <core-format-text [text]=\"activity.name\" contextLevel=\"module\" [contextInstanceId]=\"activity.id\"\n                                        [courseId]=\"courseId\">\n                                    </core-format-text>\n                                </ion-label>\n                            </ion-item>\n                        </div>\n                        <div *ngIf=\"competency.plans\">\n                            <p class=\"item-heading\">{{ 'addon.competency.userplans' | translate }}</p>\n                            <p *ngIf=\"competency.plans.length == 0\">\n                                {{ 'addon.competency.nouserplanswithcompetency' | translate }}\n                            </p>\n                            <ion-item class=\"ion-text-wrap\" *ngFor=\"let plan of competency.plans\" [href]=\"plan.url\"\n                                [attr.aria-label]=\"plan.name\" core-link capture=\"true\">\n                                <ion-label>\n                                    <core-format-text [text]=\"plan.name\" contextLevel=\"user\" [contextInstanceId]=\"plan.userid\">\n                                    </core-format-text>\n                                </ion-label>\n                            </ion-item>\n                        </div>\n                    </ion-label>\n                </ion-item>\n            </ion-card>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddonCompetencyCourseCompetenciesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCourseCompetenciesPageModule", function() { return AddonCompetencyCourseCompetenciesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _coursecompetencies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coursecompetencies.page */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts");
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




let AddonCompetencyCourseCompetenciesPageModule = class AddonCompetencyCourseCompetenciesPageModule {
};
AddonCompetencyCourseCompetenciesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        declarations: [
            _coursecompetencies_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCourseCompetenciesPage"],
        ],
    })
], AddonCompetencyCourseCompetenciesPageModule);



/***/ }),

/***/ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AddonCompetencyCourseCompetenciesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCourseCompetenciesPage", function() { return AddonCompetencyCourseCompetenciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _addons_competency_competency_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/competency/competency.module */ "./src/addons/competency/competency.module.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _addons_competency_classes_competency_course_competencies_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/competency/classes/competency-course-competencies-source */ "./src/addons/competency/classes/competency-course-competencies-source.ts");
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
var AddonCompetencyCourseCompetenciesPage_1;








/**
 * Page that displays the list of competencies of a course.
 */
let AddonCompetencyCourseCompetenciesPage = AddonCompetencyCourseCompetenciesPage_1 = class AddonCompetencyCourseCompetenciesPage {
    constructor() {
        try {
            const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteNumberParam('userId');
            const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_6__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_competency_classes_competency_course_competencies_source__WEBPACK_IMPORTED_MODULE_7__["AddonCompetencyCourseCompetenciesSource"], [courseId, userId]);
            this.competencies = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_5__["CoreListItemsManager"](source, AddonCompetencyCourseCompetenciesPage_1);
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].back();
            return;
        }
    }
    get courseCompetencies() {
        return this.competencies.getSource().courseCompetencies;
    }
    get courseId() {
        return this.competencies.getSource().COURSE_ID;
    }
    get user() {
        return this.competencies.getSource().user;
    }
    get showLeastProficientCompetencies() {
        var _a, _b;
        return !!((_a = this.courseCompetencies) === null || _a === void 0 ? void 0 : _a.statistics.canmanagecoursecompetencies)
            && ((_b = this.courseCompetencies) === null || _b === void 0 ? void 0 : _b.statistics.leastproficientcount) > 0;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchCourseCompetencies();
            yield this.competencies.start();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.competencies.destroy();
    }
    /**
     * Get competency framework url.
     *
     * @param competency Competency.
     * @returns Competency framework url.
     */
    getCompetencyFrameworkUrl(competency) {
        const { pluginbaseurl, framework, pagecontextid } = competency.comppath;
        return `${pluginbaseurl}/competencies.php?competencyframeworkid=${framework.id}&pagecontextid=${pagecontextid}`;
    }
    /**
     * Fetches the competencies and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCourseCompetencies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.competencies.getSource().reload();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting course competencies data.');
            }
        });
    }
    /**
     * Opens the summary of a competency.
     *
     * @param competencyId
     */
    openCompetencySummary(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].navigateToSitePath(`./${competencyId}/${_addons_competency_competency_module__WEBPACK_IMPORTED_MODULE_4__["ADDON_COMPETENCY_SUMMARY_PAGE"]}`, {
            params: {
                contextLevel: "course" /* COURSE */,
                contextInstanceId: this.courseId,
            },
        });
    }
    /**
     * Refreshes the competencies.
     *
     * @param refresher Refresher.
     */
    refreshCourseCompetencies(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.competencies.getSource().invalidateCache();
            this.fetchCourseCompetencies().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
};
AddonCompetencyCourseCompetenciesPage.ctorParameters = () => [];
AddonCompetencyCourseCompetenciesPage = AddonCompetencyCourseCompetenciesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-coursecompetencies',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coursecompetencies.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/coursecompetencies/coursecompetencies.html")).default,
    })
], AddonCompetencyCourseCompetenciesPage);



/***/ })

}]);
//# sourceMappingURL=default~competency-course-contents-lazy-module~competency-course-details-lazy-module.js.map