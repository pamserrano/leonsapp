(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n                </core-format-text>\n            </h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"loaded\" (click)=\"showChatUsers()\" [attr.aria-label]=\"'core.users' | translate\">\n                <ion-icon name=\"fas-users\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-list class=\"addon-messages-discussion-container\" aria-live=\"polite\">\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\n\n                <p class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\n                    {{ message.timestamp * 1000 | coreFormatDate: \"strftimedayshort\" }}\n                </p>\n\n                <div class=\"ion-text-center addon-mod_chat-notice\" *ngIf=\"message.special\">\n                    <ion-badge class=\"ion-text-wrap\" color=\"success\" *ngIf=\"message.system && message.message == 'enter'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-in-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageenter' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"danger\" *ngIf=\"message.system && message.message == 'exit'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-out-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageexit' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\" *ngIf=\"message.beep == 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepseveryone' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\"\n                        *ngIf=\"message.userid != currentUserId && message.beep == currentUserId\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepsyou' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"light\"\n                        *ngIf=\"message.userid == currentUserId && message.beep && message.beep != 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageyoubeep' | translate:{$a: message.beepWho} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"info\" *ngIf=\"!message.system && !message.beep\">\n                        <span>\n                            <ion-icon name=\"fas-asterisk\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            <strong>\n                                {{ message.userfullname }} <core-format-text [text]=\"message.message\" contextLevel=\"module\"\n                                    [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" (afterRender)=\"last && scrollToBottom()\">\n                                </core-format-text>\n                            </strong>\n                        </span>\n                    </ion-badge>\n                </div>\n\n                <core-message *ngIf=\"!message.special\" [message]=\"message\" [user]=\"message\" [text]=\"message.message\"\n                    [time]=\"message.timestamp * 1000\" (afterRender)=\"last && scrollToBottom()\" contextLevel=\"module\" [instanceId]=\"cmId\"\n                    [courseId]=\"courseId\">\n                </core-message>\n            </ng-container>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\" [message]=\"'addon.mod_chat.nomessages' | translate\">\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n<ion-footer class=\"footer-adjustable\">\n    <ion-toolbar [color]=\"isOnline && polling && loaded ? 'contrast' : 'light'\">\n        <p class=\"ion-text-center\" *ngIf=\"!isOnline\">\n            {{ 'addon.mod_chat.mustbeonlinetosendmessages' | translate }}\n        </p>\n\n        <core-send-message-form [sendDisabled]=\"sending\" *ngIf=\"isOnline && polling && loaded\" [message]=\"newMessage\"\n            (onSubmit)=\"sendMessage($event)\" [placeholder]=\"'addon.messages.newmessage' | translate\">\n        </core-send-message-form>\n\n        <ion-button *ngIf=\"isOnline && !polling && loaded\" (click)=\"reconnect()\" expand=\"block\" fill=\"outline\">\n            {{ 'core.login.reconnect' | translate }}\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\n                </core-format-text>\n            </h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-chat-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-chat-index>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'addon.mod_chat.messages' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshMessages($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-list class=\"addon-messages-discussion-container\">\n            <ng-container *ngFor=\"let message of messages; index as index;\">\n\n                <div class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\n                    {{ message.timestamp * 1000 | coreFormatDate:\"strftimedayshort\" }}\n                </div>\n\n                <div class=\"ion-text-center addon-mod_chat-notice\" *ngIf=\"message.special\">\n                    <ion-badge class=\"ion-text-wrap\" color=\"success\" *ngIf=\"message.issystem && message.message == 'enter'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-in-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageenter' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"danger\" *ngIf=\"message.issystem && message.message == 'exit'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-out-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageexit' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\" *ngIf=\"message.beep == 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepseveryone' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\"\n                        *ngIf=\"message.userid != currentUserId && message.beep == currentUserId\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepsyou' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"light\"\n                        *ngIf=\"message.userid == currentUserId && message.beep && message.beep != 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageyoubeep' | translate:{$a: message.beepWho} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"info\" *ngIf=\"!message.issystem && !message.beep\">\n                        <span>\n                            <ion-icon name=\"fas-asterisk\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            <strong>\n                                {{ message.userfullname }} <core-format-text [text]=\"message.message\" contextLevel=\"module\"\n                                    [contextInstanceId]=\"cmId\" [courseId]=\"courseId\"></core-format-text>\n                            </strong>\n                        </span>\n                    </ion-badge>\n                </div>\n\n                <core-message *ngIf=\"!message.special\" [message]=\"message\" [user]=\"message\" [text]=\"message.message\"\n                    [time]=\"message.timestamp * 1000\" contextLevel=\"module\" [instanceId]=\"cmId\" [courseId]=\"courseId\">\n                </core-message>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'addon.mod_chat.chatreport' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!sessions.loaded\" (ionRefresh)=\"refreshSessions($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"sessions.loaded\">\n            <ion-item class=\"ion-text-wrap core-group-selector\" *ngIf=\"groupInfo && (groupInfo.separateGroups || groupInfo.visibleGroups)\">\n                <ion-label id=\"addon-chat-groupslabel\">\n                    <ng-container *ngIf=\"groupInfo.separateGroups\">{{'core.groupsseparate' | translate }}</ng-container>\n                    <ng-container *ngIf=\"groupInfo.visibleGroups\">{{'core.groupsvisible' | translate }}</ng-container>\n                </ion-label>\n                <ion-select [(ngModel)]=\"groupId\" (ionChange)=\"reloadSessions()\" aria-labelledby=\"addon-chat-groupslabel\"\n                    interface=\"action-sheet\" [interfaceOptions]=\"{header: 'core.group' | translate}\">\n                    <ion-select-option *ngFor=\"let groupOpt of groupInfo.groups\" [value]=\"groupOpt.id\">\n                        {{groupOpt.name}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>{{ 'addon.mod_chat.showincompletesessions' | translate }}</ion-label>\n                <ion-toggle [(ngModel)]=\"showAll\" (ionChange)=\"reloadSessions()\"></ion-toggle>\n            </ion-item>\n\n            <ion-card *ngFor=\"let session of sessions.items\" (click)=\"sessions.select(session)\" button\n                [attr.aria-current]=\"sessions.getItemAriaCurrent(session)\"\n                [class.addon-mod-chat-session-show-more]=\"session.sessionusers.length < session.allsessionusers.length\">\n\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ session.sessionstart * 1000 | coreFormatDate }}</p>\n                        <p *ngIf=\"session.duration\">{{ session.duration | coreDuration }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-card-content>\n                    <ion-item *ngFor=\"let user of session.sessionusers\">\n                        <ion-label>\n                            {{ user.userfullname }} <span *ngIf=\"user.messagecount\">({{ user.messagecount }})</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n                <ion-button *ngIf=\"session.sessionusers.length < session.allsessionusers.length\" fill=\"clear\" expand=\"block\"\n                    (click)=\"showMoreUsers(session, $event)\">\n                    {{ 'core.showmore' | translate }}\n                </ion-button>\n            </ion-card>\n\n            <core-empty-box *ngIf=\"sessions.empty\" icon=\"far-comments\" [message]=\"'addon.mod_chat.nosessionsfound' | translate\">\n            </core-empty-box>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/chat/chat-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/chat/chat-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModChatLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatLazyModule", function() { return AddonModChatLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/chat/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/chat/pages/index/index.ts");
/* harmony import */ var _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/chat/chat */ "./src/addons/mod/chat/pages/chat/chat.ts");
/* harmony import */ var _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/session-messages/session-messages */ "./src/addons/mod/chat/pages/session-messages/session-messages.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sessions/sessions */ "./src/addons/mod/chat/pages/sessions/sessions.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
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












const commonRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModChatIndexPage"],
    },
    {
        path: ':courseId/:cmId/chat',
        component: _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChatChatPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_11__["CanLeaveGuard"]],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
    },
    {
        path: ':courseId/:cmId/sessions/:sessionStart/:sessionEnd',
        component: _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
        children: [
            {
                path: ':sessionStart/:sessionEnd',
                component: _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet),
];
let AddonModChatLazyModule = class AddonModChatLazyModule {
};
AddonModChatLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModChatComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModChatIndexPage"],
            _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChatChatPage"],
            _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
            _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
        ],
    })
], AddonModChatLazyModule);



/***/ }),

/***/ "./src/addons/mod/chat/classes/chat-sessions-source.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/chat/classes/chat-sessions-source.ts ***!
  \*************************************************************/
/*! exports provided: AddonModChatSessionsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionsSource", function() { return AddonModChatSessionsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/chat */ "./src/addons/mod/chat/services/chat.ts");
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
 * Provides a collection of sessions.
 */
class AddonModChatSessionsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, chatId, cmId) {
        super();
        this.showAll = false;
        this.groupId = 0;
        this.COURSE_ID = courseId;
        this.CHAT_ID = chatId;
        this.CM_ID = cmId;
    }
    /**
     * Invalidate chat cache.
     */
    invalidateCache() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].ignoreErrors(_services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].allPromises([
                _services_groups__WEBPACK_IMPORTED_MODULE_3__["CoreGroups"].invalidateActivityGroupInfo(this.CM_ID),
                _services_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChat"].invalidateSessions(this.CHAT_ID, this.groupId, this.showAll),
            ]));
        });
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_3__["CoreGroups"].getActivityGroupInfo(this.CM_ID, false);
            this.groupId = _services_groups__WEBPACK_IMPORTED_MODULE_3__["CoreGroups"].validateGroupId(this.groupId, this.groupInfo);
            const sessions = yield _services_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChat"].getSessions(this.CHAT_ID, this.groupId, this.showAll, { cmId: this.CM_ID });
            // Fetch user profiles.
            const promises = [];
            const formattedSessions = sessions.map((session) => {
                session.duration = session.sessionend - session.sessionstart;
                session.sessionusers.forEach((sessionUser) => {
                    // The WS does not return the user name, fetch user profile.
                    promises.push(this.loadUserFullname(sessionUser));
                });
                // If session has more than 4 users we display a "Show more" link.
                session.allsessionusers = session.sessionusers;
                if (session.sessionusers.length > 4) {
                    session.sessionusers = session.allsessionusers.slice(0, 3);
                }
                return session;
            });
            yield Promise.all(promises);
            return { items: formattedSessions };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(session) {
        return `${session.sessionstart}/${session.sessionend}`;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return {
            chatId: this.CHAT_ID,
            groupId: this.groupId,
        };
    }
    /**
     * Load the fullname of a user.
     *
     * @param id User ID.
     * @return Promise resolved when done.
     */
    loadUserFullname(sessionUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (sessionUser.userfullname) {
                return;
            }
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(sessionUser.userid, this.COURSE_ID, true);
                sessionUser.userfullname = user.fullname;
            }
            catch (_a) {
                // Error getting profile, most probably the user is deleted.
                sessionUser.userfullname = _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.deleteduser') + ' ' + sessionUser.userid;
            }
        });
    }
}


/***/ }),

/***/ "./src/addons/mod/chat/pages/chat/chat.scss":
/*!**************************************************!*\
  !*** ./src/addons/mod/chat/pages/chat/chat.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\nion-content {\n  --content-background: var(--background-alternative);\n  --background: var(--content-background);\n}\nion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n.addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px !important;\n  background: var(--content-background);\n}\n.addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host .addon-mod_chat-notice {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL2NoYXQvY2hhdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBa0dBOztFQUFBO0FDcEdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM1REk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNtRFI7QUQvQ0E7RUFDSSxtREFBQTtFQUNBLHVDQUFBO0FDa0RKO0FEaERJO0VBQ0ksNEJBQUE7QUNrRFI7QUQ5Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FDaURKO0FEOUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ2lESjtBQXpFSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQTRFUiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL2NoYXQvY2hhdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcblxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXG4gKi9cblxuXG4vLyBTdHJpbmcgVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFN0cmluZyBSZXBsYWNlIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XG5cbiAgQGlmICRpbmRleCB7XG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xuICB9XG5cbiAgQHJldHVybiAkc3RyaW5nO1xufVxuXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XG4gIC8vIGVtcHR5IGFycmF5L2xpc3RcbiAgJHNwbGl0LWFycjogKCk7XG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcbiAgICAvLyBnZXQgdGhlIHN1YnN0cmluZyBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gdGhlIHNlcGFyYXRvclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XG4gICAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRpdGVtKTtcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xuICAgIC8vIGZpbmQgbmV3IGluZGV4IG9mIHNlcGFyYXRvclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICB9XG4gIC8vIGFkZCB0aGUgcmVtYWluaW5nIHN0cmluZyB0byBsaXN0ICh0aGUgbGFzdCBpdGVtKVxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XG5cbiAgQHJldHVybiAkc3BsaXQtYXJyO1xufVxuXG5cbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XG5cbiAgQGlmICRzdGFydC1pbmRleCB7XG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xuICAgICRlbmQtaW5kZXg6IHN0ci1pbmRleCgkcG9zdCwgJGVuZCk7XG5cbiAgICBAaWYgJGVuZC1pbmRleCB7XG4gICAgICBAcmV0dXJuIHN0ci1zbGljZSgkcG9zdCwgMSwgJGVuZC1pbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbnVsbDtcbn1cblxuXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xuICBAaWYgKHR5cGUtb2YoJHN0cmluZykgPT0gc3RyaW5nKSB7XG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcbiAgfVxuXG4gIEByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xuICAkc3BhY2VzOiBzdHItcmVwbGFjZSgkdmFsLCBcIiBcIiwgXCIlMjBcIik7XG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XG4gIEByZXR1cm4gJGVuY29kZWQ7XG59XG5cblxuLy8gQWRkIFJvb3QgU2VsZWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxuLy9cbi8vIEV4YW1wbGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdFwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxuLy9cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLmZpeGVkKVwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2hhZG93XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gYWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsICRhZGRIb3N0U2VsZWN0b3IpIHtcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XG5cbiAgJGxpc3Q6ICgpO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QoIGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBhIGNsYXNzIG9uIHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSk6aG9zdChcIik7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcblxuICAgICAgJG5ldy1lbGVtZW50OiAoKTtcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xuXG4gICAgICBAZWFjaCAkZWxlbWVudCBpbiAkZWxlbWVudHMge1xuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcblxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcblxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QgaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGp1c3QgdGhlIGhvc3RcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0XCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XG4gICAgICAvLyBvciBub3JtYWwgZWxlbWVudCBzbyBhcHBlbmQgYm90aCB0aGUgZGlyIGNoZWNrIGFuZCBob3N0LWNvbnRleHRcbiAgICB9IEBlbHNlIHtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiAkbGlzdDtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xuICovXG5cbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xuICBAaWYgJGFscGhhID09IG51bGwge1xuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcbiAgfVxufVxuXG4vLyBHZXRzIHRoZSBzcGVjaWZpYyBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIHRoZSBuYW1lIGFuZCB2YXJpYXRpb24uIEFscGhhL3JnYiBhcmUgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZilcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XG4gICR2YWx1ZTogbWFwLWdldCgkdmFsdWVzLCAkdmFyaWF0aW9uKTtcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xuXG4gIEBpZiAoJHZhcmlhdGlvbiA9PSBiYXNlKSB7XG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcbiAgfVxuXG4gIEBpZiAoJGFscGhhKSB7XG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xuICAgIEByZXR1cm4gcmdiYSh2YXIoI3skdmFyaWFibGV9LXJnYiwgJHZhbHVlKSwgJGFscGhhKTtcbiAgfVxuICBAaWYgKCRyZ2IpIHtcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xuICB9XG5cbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XG59XG5cbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG5cbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1MgZnJvbSBkaWZmZXJlbnQgY29tcG9uZW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5taXhpbnMuc2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXG4gKi9cblxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICB9XG4gIH1cblxuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcblxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gSXRlbSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBpdGVtLXB1c2gtc3ZnLXVybCgkZmlsbCkge1xuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcblxuICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsIHRydWUpO1xufVxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XG5cbi8qKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcbiAgfVxuXG4gIC8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4gIC8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIC0xMC5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQGZ1bmN0aW9uIGdldC1jb2xvci10aW50LXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogODAlKSB7XG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XG4gIH1cblxuICAvLyBJb25pYyBDb2xvcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXG4gIC8vIGNvbG9ycyBtYXBcblxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcbiAgICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcbiAgICAgICRsaWdodDogbWFwLWdldCgkYmFzZSwgJ2xpZ2h0Jyk7XG5cbiAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkbGlnaHQpO1xuXG4gICAgICBib2R5LmRhcmsge1xuICAgICAgICAgICRkYXJrOiBtYXAtZ2V0KCRiYXNlLCAnZGFyaycpO1xuICAgICAgICAgICRkYXJrOiBtaXgoJGxpZ2h0LCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcbiAgICAgICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGRhcmspO1xuICAgICAgfVxuICB9XG5cbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xuICAgICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xuICAgICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XG4gICAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XG5cbiAgICAgIC0tI3skY29sb3ItbmFtZX06ICN7JGJhc2V9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcblxuICAgICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcblxuICAgICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgICB9XG4gIH1cblxuXG4gQG1peGluIGNvcmUtZm9jdXMoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XG4gICAgfVxuIH1cblxuIEBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG4gICAgLy8gVGhpY2tlciBvcHRpb246XG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbn1cblxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xuICAgICR0cmFuc2l0aW9uczogKCk7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XG4gICAgfVxuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxuICovXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XG5cbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XG59XG5cbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgbnVsbCwgJHB4ICR0eXBlICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xufVxuXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1peGluIGRhcmttb2RlKCkge1xuICAgICRyb290OiAjeyZ9O1xuXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJib2R5LmRhcmtcIil9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDb2xvciBtaXhpbnMuXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XG59XG5cbi8vIEdldCB0aGUgYmV0dGVyIGNvbG9yIGNvbnRyYXN0IHVzaW5nIFdDQUcgYWxnb3J5dGhtLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xuXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAwLlxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XG5cbiAgICBAcmV0dXJuIGlmKCR3aGl0ZUNvbnRyYXN0IDwgJGJsYWNrQ29udHJhc3QsIHdoaXRlLCBibGFjayk7XG59XG5cbi8vIENvbG9yIGNvbnRyYXN0IHVzaW5nIHlpcSBhcHJveGltYXRpb24gd2l0aCAxNTAgdGhyZXNob2xkLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcbiAgICAkcjogcmVkKCRjb2xvcik7XG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcblxuICAgICR5aXE6ICgoJHIgKiAyOTkpICsgKCRnICogNTg3KSArICgkYiAqIDExNCkpIC8gMTAwMDtcblxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xufVxuXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yeXRobVxuQGZ1bmN0aW9uIGNoZWNrLWNvbnRyYXN0KCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XG5cbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XG4gICAgfVxufVxuXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xuICAgICRyOiByZWQoJGNvbG9yKTtcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xuXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcbiAgICAkYjogY29tcG9uZW50LWx1bWluYW5jZSgkYik7XG5cbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcbn1cblxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLyAyNTU7XG5cbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XG4gICAgICAgIEByZXR1cm4gJHZhbHVlIC8gMTIuOTI7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXG4gKi9cbiIsIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogICAgI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICAgICM4Zjk1OWUgIWRlZmF1bHQ7IC8vIFN0cm9rZSBvbiBpbnB1dHNcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogICAgIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXG5cbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXG4kZ3JlZW46ICAgICAgICMzNTdhMzIgIWRlZmF1bHQ7XG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG5cbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcblxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3IpICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxuICAgIHNlY29uZGFyeTogKGxpZ2h0OiAkc2Vjb25kYXJ5LCBkYXJrOiAkZ3JheS03MDApLFxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxuICAgIGRhbmdlcjogIChsaWdodDogJGRhbmdlciksXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXG4gICAgbWVkaXVtOiAobGlnaHQ6ICRtZWRpdW0sIGRhcms6ICRncmF5LTIwMCksXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcbikgIWRlZmF1bHQ7XG5cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cblxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJHNjcmVlbi1icmVha3BvaW50czogKFxuICAgIHhzOiAwLFxuICAgIHNtOiA1NzZweCxcbiAgICBtZDogNzY4cHgsXG4gICAgbGc6IDk5MnB4LFxuICAgIHRhYmxldDogOTkycHgsXG4gICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XG4kY29yZS10ZXh0LWhpZ2h0bGlnaHQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcblxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWRhc2hib2FyZC1sb2dvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1zZWN0aW9uLXNlbGVjdG9yOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLXRodW1iLW9uLWNhcmRzLWJhY2tncm91bmQ6IG51bGwgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbG9naW4gcGFnZS5cbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvcjogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLW5lZWQtaGVscDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLiAoZGVwcmVjYXRlZCBvbiA0LjApXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXG4kY29yZS11c2VyLWhpZGUtc2l0ZWluZm86ICRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbyAhZGVmYXVsdDtcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xuXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXG4gICAgYWRtaW5pc3RyYXRpb246ICM1ZDYzZjYsXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxuICAgIGNvbW11bmljYXRpb246ICMxMWE2NzYsXG4gICAgY29udGVudDogIzM5OWJlMixcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcbikgIWRlZmF1bHQ7XG5cbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxuICAgIGNhdGVnb3J5OiAjOGUyNGFhLFxuICAgIGNvdXJzZTogJHJlZCxcbiAgICBncm91cDogJHllbGxvdyxcbiAgICB1c2VyOiAkYmx1ZSxcbiAgICBzaXRlOiAkZ3JlZW5cbikgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHMuc2Nzc1wiO1xuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XG5cbiAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xufVxuXG4uYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cbiIsIkBpbXBvcnQgXCJ+dGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIC5hZGRvbi1tb2RfY2hhdC1ub3RpY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/chat/pages/chat/chat.ts":
/*!************************************************!*\
  !*** ./src/addons/mod/chat/pages/chat/chat.ts ***!
  \************************************************/
/*! exports provided: AddonModChatChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatChatPage", function() { return AddonModChatChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_send_message_form_send_message_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/send-message-form/send-message-form */ "./src/core/components/send-message-form/send-message-form.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_users_modal_users_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/users-modal/users-modal */ "./src/addons/mod/chat/components/users-modal/users-modal.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/chat */ "./src/addons/mod/chat/services/chat.ts");
/* harmony import */ var _services_chat_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/chat-helper */ "./src/addons/mod/chat/services/chat-helper.ts");
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
 * Page that displays a chat session.
 */
let AddonModChatChatPage = class AddonModChatChatPage {
    constructor() {
        this.loaded = false;
        this.title = '';
        this.messages = [];
        this.sending = false;
        this.lastTime = 0;
        this.oldContentHeight = 0;
        this.viewDestroyed = false;
        this.pollingRunning = false;
        this.users = [];
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteUserId();
        this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
        this.onlineSubscription = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_10__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('chatId');
                this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('title') || '';
                yield this.loginUser();
                yield this.fetchMessages();
                this.startPolling();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhileconnecting', true);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.startPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'chat' });
        this.stopPolling();
    }
    /**
     * Convenience function to login the user.
     *
     * @return Promise resolved when done.
     */
    loginUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sessionId = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].loginUser(this.chatId);
        });
    }
    /**
     * Convenience function to fetch chat messages.
     *
     * @return Promise resolved when done.
     */
    fetchMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const messagesInfo = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getLatestMessages(this.sessionId, this.lastTime);
            this.lastTime = messagesInfo.chatnewlasttime || 0;
            const messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getMessagesUserData(messagesInfo.messages, this.courseId);
            if (!messages.length) {
                // No messages yet, nothing else to do.
                return;
            }
            const previousLength = this.messages.length;
            this.messages = this.messages.concat(messages);
            // Calculate which messages need to display the date or user data.
            for (let index = previousLength; index < this.messages.length; index++) {
                const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                this.messages[index] = _services_chat_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModChatHelper"].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                const message = this.messages[index];
                if (message.beep && message.beep != String(this.currentUserId)) {
                    this.loadMessageBeepWho(message);
                }
            }
            this.messages[this.messages.length - 1].showTail = true;
            // New messages or beeps, scroll to bottom.
            this.scrollToBottom();
        });
    }
    loadMessageBeepWho(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            message.beepWho = yield this.getUserFullname(message.beep);
        });
    }
    /**
     * Display the chat users modal.
     */
    showChatUsers() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create the toc modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_users_modal_users_modal__WEBPACK_IMPORTED_MODULE_12__["AddonModChatUsersModalComponent"],
                componentProps: {
                    sessionId: this.sessionId,
                    cmId: this.cmId,
                },
            });
            if (modalData) {
                if (modalData.talkTo) {
                    this.newMessage = `To ${modalData.talkTo}: ` + (((_a = this.sendMessageForm) === null || _a === void 0 ? void 0 : _a.message) || '');
                }
                if (modalData.beepTo) {
                    this.sendMessage('', modalData.beepTo);
                }
                this.users = modalData.users;
            }
        });
    }
    /**
     * Get the user fullname for a beep.
     *
     * @param id User Id before parsing.
     * @return User fullname.
     */
    getUserFullname(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            if (isNaN(idNumber)) {
                return id;
            }
            const user = this.users.find((user) => user.id == idNumber);
            if (user) {
                return user.fullname;
            }
            try {
                const data = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getChatUsers(this.sessionId, { cmId: this.cmId });
                this.users = data.users;
                const user = this.users.find((user) => user.id == idNumber);
                if (user) {
                    return user.fullname;
                }
                return id;
            }
            catch (error) {
                // Ignore errors.
                return id;
            }
        });
    }
    /**
     * Start the polling to get chat messages periodically.
     */
    startPolling() {
        // We already have the polling in place.
        if (this.polling) {
            return;
        }
        // Start polling.
        this.polling = window.setInterval(() => {
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.fetchMessagesInterval());
        }, _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChatProvider"].POLL_INTERVAL);
    }
    /**
     * Stop polling for messages.
     */
    stopPolling() {
        clearInterval(this.polling);
        this.polling = undefined;
    }
    /**
     * Convenience function to be called every certain time to fetch chat messages.
     *
     * @return Promise resolved when done.
     */
    fetchMessagesInterval() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isOnline || this.pollingRunning) {
                // Obviously we cannot check for new messages when the app is offline.
                return;
            }
            this.pollingRunning = true;
            try {
                yield this.fetchMessages();
            }
            catch (_a) {
                try {
                    // Try to login, it might have failed because the session expired.
                    yield this.loginUser();
                    yield this.fetchMessages();
                }
                catch (error) {
                    // Fail again. Stop polling if needed.
                    this.stopPolling();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhileretrievingmessages', true);
                    throw error;
                }
            }
            finally {
                this.pollingRunning = false;
            }
        });
    }
    /**
     * Send a message to the chat.
     *
     * @param text Text of the nessage.
     * @param beep ID of the user to beep.
     */
    sendMessage(text, beep = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isOnline) {
                // Silent error, the view should prevent this.
                return;
            }
            else if (beep === 0 && !text.trim()) {
                // Silent error.
                return;
            }
            this.sending = true;
            try {
                yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].sendMessage(this.sessionId, text, beep);
                // Update messages to show the sent message.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.fetchMessagesInterval());
            }
            catch (error) {
                // Only close the keyboard if an error happens, we want the user to be able to send multiple
                // messages without the keyboard being closed.
                _services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].closeKeyboard();
                this.newMessage = text;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhilesendingmessage', true);
            }
            finally {
                this.sending = false;
            }
        });
    }
    /**
     * Try to reconnect.
     *
     * @return Promise resolved when done.
     */
    reconnect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                // Call startPolling would take a while for the first execution, so we'll execute it manually to check if it works now.
                yield this.fetchMessagesInterval();
                // It works, start the polling again.
                this.startPolling();
            }
            catch (_a) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Scroll bottom when render has finished.
     */
    scrollToBottom() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Need a timeout to leave time to the view to be rendered.
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].nextTick();
            if (!this.viewDestroyed) {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToBottom();
            }
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved with true if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.messages.some((message) => !message.special)) {
                return true;
            }
            // Modified, confirm user wants to go back.
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_chat.confirmloss'));
            return true;
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.onlineSubscription && this.onlineSubscription.unsubscribe();
        this.stopPolling();
        this.viewDestroyed = true;
    }
};
AddonModChatChatPage.ctorParameters = () => [];
AddonModChatChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }],
    sendMessageForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_send_message_form_send_message_form__WEBPACK_IMPORTED_MODULE_2__["CoreSendMessageFormComponent"],] }]
};
AddonModChatChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.scss */ "./src/addons/mod/chat/pages/chat/chat.scss")).default]
    })
], AddonModChatChatPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/index/index.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/chat/pages/index/index.ts ***!
  \**************************************************/
/*! exports provided: AddonModChatIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatIndexPage", function() { return AddonModChatIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/chat/components/index/index.ts");
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
 * Page that displays a chat.
 */
let AddonModChatIndexPage = class AddonModChatIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModChatIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModChatIndexComponent"],] }]
};
AddonModChatIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html")).default,
    })
], AddonModChatIndexPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/session-messages/session-messages.scss":
/*!**************************************************************************!*\
  !*** ./src/addons/mod/chat/pages/session-messages/session-messages.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\nion-content {\n  --content-background: var(--background-alternative);\n  --background: var(--content-background);\n}\nion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n.addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px !important;\n  background: var(--content-background);\n}\n.addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host .addon-mod_chat-notice {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL3Nlc3Npb24tbWVzc2FnZXMvc2Vzc2lvbi1tZXNzYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBa0dBOztFQUFBO0FDcEdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM1REk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNtRFI7QUQvQ0E7RUFDSSxtREFBQTtFQUNBLHVDQUFBO0FDa0RKO0FEaERJO0VBQ0ksNEJBQUE7QUNrRFI7QUQ5Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FDaURKO0FEOUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ2lESjtBQXpFSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQTRFUiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL3Nlc3Npb24tbWVzc2FnZXMvc2Vzc2lvbi1tZXNzYWdlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcblxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXG4gKi9cblxuXG4vLyBTdHJpbmcgVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFN0cmluZyBSZXBsYWNlIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XG5cbiAgQGlmICRpbmRleCB7XG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xuICB9XG5cbiAgQHJldHVybiAkc3RyaW5nO1xufVxuXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XG4gIC8vIGVtcHR5IGFycmF5L2xpc3RcbiAgJHNwbGl0LWFycjogKCk7XG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcbiAgICAvLyBnZXQgdGhlIHN1YnN0cmluZyBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gdGhlIHNlcGFyYXRvclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XG4gICAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRpdGVtKTtcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xuICAgIC8vIGZpbmQgbmV3IGluZGV4IG9mIHNlcGFyYXRvclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICB9XG4gIC8vIGFkZCB0aGUgcmVtYWluaW5nIHN0cmluZyB0byBsaXN0ICh0aGUgbGFzdCBpdGVtKVxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XG5cbiAgQHJldHVybiAkc3BsaXQtYXJyO1xufVxuXG5cbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XG5cbiAgQGlmICRzdGFydC1pbmRleCB7XG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xuICAgICRlbmQtaW5kZXg6IHN0ci1pbmRleCgkcG9zdCwgJGVuZCk7XG5cbiAgICBAaWYgJGVuZC1pbmRleCB7XG4gICAgICBAcmV0dXJuIHN0ci1zbGljZSgkcG9zdCwgMSwgJGVuZC1pbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbnVsbDtcbn1cblxuXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xuICBAaWYgKHR5cGUtb2YoJHN0cmluZykgPT0gc3RyaW5nKSB7XG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcbiAgfVxuXG4gIEByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xuICAkc3BhY2VzOiBzdHItcmVwbGFjZSgkdmFsLCBcIiBcIiwgXCIlMjBcIik7XG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XG4gIEByZXR1cm4gJGVuY29kZWQ7XG59XG5cblxuLy8gQWRkIFJvb3QgU2VsZWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxuLy9cbi8vIEV4YW1wbGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdFwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxuLy9cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLmZpeGVkKVwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2hhZG93XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gYWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsICRhZGRIb3N0U2VsZWN0b3IpIHtcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XG5cbiAgJGxpc3Q6ICgpO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QoIGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBhIGNsYXNzIG9uIHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSk6aG9zdChcIik7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcblxuICAgICAgJG5ldy1lbGVtZW50OiAoKTtcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xuXG4gICAgICBAZWFjaCAkZWxlbWVudCBpbiAkZWxlbWVudHMge1xuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcblxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcblxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QgaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGp1c3QgdGhlIGhvc3RcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0XCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XG4gICAgICAvLyBvciBub3JtYWwgZWxlbWVudCBzbyBhcHBlbmQgYm90aCB0aGUgZGlyIGNoZWNrIGFuZCBob3N0LWNvbnRleHRcbiAgICB9IEBlbHNlIHtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiAkbGlzdDtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xuICovXG5cbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xuICBAaWYgJGFscGhhID09IG51bGwge1xuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcbiAgfVxufVxuXG4vLyBHZXRzIHRoZSBzcGVjaWZpYyBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIHRoZSBuYW1lIGFuZCB2YXJpYXRpb24uIEFscGhhL3JnYiBhcmUgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZilcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XG4gICR2YWx1ZTogbWFwLWdldCgkdmFsdWVzLCAkdmFyaWF0aW9uKTtcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xuXG4gIEBpZiAoJHZhcmlhdGlvbiA9PSBiYXNlKSB7XG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcbiAgfVxuXG4gIEBpZiAoJGFscGhhKSB7XG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xuICAgIEByZXR1cm4gcmdiYSh2YXIoI3skdmFyaWFibGV9LXJnYiwgJHZhbHVlKSwgJGFscGhhKTtcbiAgfVxuICBAaWYgKCRyZ2IpIHtcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xuICB9XG5cbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XG59XG5cbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG5cbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1MgZnJvbSBkaWZmZXJlbnQgY29tcG9uZW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5taXhpbnMuc2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXG4gKi9cblxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICB9XG4gIH1cblxuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcblxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gSXRlbSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBpdGVtLXB1c2gtc3ZnLXVybCgkZmlsbCkge1xuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcblxuICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsIHRydWUpO1xufVxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XG5cbi8qKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcbiAgfVxuXG4gIC8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4gIC8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIC0xMC5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQGZ1bmN0aW9uIGdldC1jb2xvci10aW50LXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogODAlKSB7XG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XG4gIH1cblxuICAvLyBJb25pYyBDb2xvcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXG4gIC8vIGNvbG9ycyBtYXBcblxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcbiAgICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcbiAgICAgICRsaWdodDogbWFwLWdldCgkYmFzZSwgJ2xpZ2h0Jyk7XG5cbiAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkbGlnaHQpO1xuXG4gICAgICBib2R5LmRhcmsge1xuICAgICAgICAgICRkYXJrOiBtYXAtZ2V0KCRiYXNlLCAnZGFyaycpO1xuICAgICAgICAgICRkYXJrOiBtaXgoJGxpZ2h0LCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcbiAgICAgICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGRhcmspO1xuICAgICAgfVxuICB9XG5cbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xuICAgICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xuICAgICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XG4gICAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XG5cbiAgICAgIC0tI3skY29sb3ItbmFtZX06ICN7JGJhc2V9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcblxuICAgICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcblxuICAgICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgICB9XG4gIH1cblxuXG4gQG1peGluIGNvcmUtZm9jdXMoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XG4gICAgfVxuIH1cblxuIEBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG4gICAgLy8gVGhpY2tlciBvcHRpb246XG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbn1cblxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xuICAgICR0cmFuc2l0aW9uczogKCk7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XG4gICAgfVxuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxuICovXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XG5cbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XG59XG5cbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgbnVsbCwgJHB4ICR0eXBlICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xufVxuXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1peGluIGRhcmttb2RlKCkge1xuICAgICRyb290OiAjeyZ9O1xuXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJib2R5LmRhcmtcIil9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDb2xvciBtaXhpbnMuXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XG59XG5cbi8vIEdldCB0aGUgYmV0dGVyIGNvbG9yIGNvbnRyYXN0IHVzaW5nIFdDQUcgYWxnb3J5dGhtLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xuXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAwLlxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XG5cbiAgICBAcmV0dXJuIGlmKCR3aGl0ZUNvbnRyYXN0IDwgJGJsYWNrQ29udHJhc3QsIHdoaXRlLCBibGFjayk7XG59XG5cbi8vIENvbG9yIGNvbnRyYXN0IHVzaW5nIHlpcSBhcHJveGltYXRpb24gd2l0aCAxNTAgdGhyZXNob2xkLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcbiAgICAkcjogcmVkKCRjb2xvcik7XG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcblxuICAgICR5aXE6ICgoJHIgKiAyOTkpICsgKCRnICogNTg3KSArICgkYiAqIDExNCkpIC8gMTAwMDtcblxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xufVxuXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yeXRobVxuQGZ1bmN0aW9uIGNoZWNrLWNvbnRyYXN0KCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XG5cbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XG4gICAgfVxufVxuXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xuICAgICRyOiByZWQoJGNvbG9yKTtcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xuXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcbiAgICAkYjogY29tcG9uZW50LWx1bWluYW5jZSgkYik7XG5cbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcbn1cblxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLyAyNTU7XG5cbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XG4gICAgICAgIEByZXR1cm4gJHZhbHVlIC8gMTIuOTI7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXG4gKi9cbiIsIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogICAgI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICAgICM4Zjk1OWUgIWRlZmF1bHQ7IC8vIFN0cm9rZSBvbiBpbnB1dHNcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogICAgIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXG5cbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXG4kZ3JlZW46ICAgICAgICMzNTdhMzIgIWRlZmF1bHQ7XG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG5cbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcblxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3IpICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxuICAgIHNlY29uZGFyeTogKGxpZ2h0OiAkc2Vjb25kYXJ5LCBkYXJrOiAkZ3JheS03MDApLFxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxuICAgIGRhbmdlcjogIChsaWdodDogJGRhbmdlciksXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXG4gICAgbWVkaXVtOiAobGlnaHQ6ICRtZWRpdW0sIGRhcms6ICRncmF5LTIwMCksXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcbikgIWRlZmF1bHQ7XG5cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cblxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJHNjcmVlbi1icmVha3BvaW50czogKFxuICAgIHhzOiAwLFxuICAgIHNtOiA1NzZweCxcbiAgICBtZDogNzY4cHgsXG4gICAgbGc6IDk5MnB4LFxuICAgIHRhYmxldDogOTkycHgsXG4gICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XG4kY29yZS10ZXh0LWhpZ2h0bGlnaHQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcblxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWRhc2hib2FyZC1sb2dvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1zZWN0aW9uLXNlbGVjdG9yOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLXRodW1iLW9uLWNhcmRzLWJhY2tncm91bmQ6IG51bGwgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbG9naW4gcGFnZS5cbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvcjogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLW5lZWQtaGVscDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLiAoZGVwcmVjYXRlZCBvbiA0LjApXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXG4kY29yZS11c2VyLWhpZGUtc2l0ZWluZm86ICRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbyAhZGVmYXVsdDtcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xuXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXG4gICAgYWRtaW5pc3RyYXRpb246ICM1ZDYzZjYsXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxuICAgIGNvbW11bmljYXRpb246ICMxMWE2NzYsXG4gICAgY29udGVudDogIzM5OWJlMixcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcbikgIWRlZmF1bHQ7XG5cbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxuICAgIGNhdGVnb3J5OiAjOGUyNGFhLFxuICAgIGNvdXJzZTogJHJlZCxcbiAgICBncm91cDogJHllbGxvdyxcbiAgICB1c2VyOiAkYmx1ZSxcbiAgICBzaXRlOiAkZ3JlZW5cbikgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHMuc2Nzc1wiO1xuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XG5cbiAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xufVxuXG4uYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cbiIsIkBpbXBvcnQgXCJ+dGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIC5hZGRvbi1tb2RfY2hhdC1ub3RpY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/chat/pages/session-messages/session-messages.ts":
/*!************************************************************************!*\
  !*** ./src/addons/mod/chat/pages/session-messages/session-messages.ts ***!
  \************************************************************************/
/*! exports provided: AddonModChatSessionMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionMessagesPage", function() { return AddonModChatSessionMessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/chat */ "./src/addons/mod/chat/services/chat.ts");
/* harmony import */ var _services_chat_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/chat-helper */ "./src/addons/mod/chat/services/chat-helper.ts");
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
 * Page that displays list of chat session messages.
 */
let AddonModChatSessionMessagesPage = class AddonModChatSessionMessagesPage {
    constructor() {
        this.messages = [];
        this.loaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.sessionStart = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('sessionStart');
            this.sessionEnd = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('sessionEnd');
            this.chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('chatId');
            this.groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('groupId') || 0;
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
            return;
        }
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.fetchMessages();
    }
    /**
     * Fetch session messages.
     *
     * @return Promise resolved when done.
     */
    fetchMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].getSessionMessages(this.chatId, this.sessionStart, this.sessionEnd, this.groupId, { cmId: this.cmId });
                this.messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].getMessagesUserData(messages, this.courseId);
                // Calculate which messages need to display the date or user data.
                for (let index = 0; index < this.messages.length; index++) {
                    const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                    this.messages[index] = _services_chat_helper__WEBPACK_IMPORTED_MODULE_8__["AddonModChatHelper"].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                    const message = this.messages[index];
                    if (message.beep && message.beep != String(this.currentUserId)) {
                        this.loadMessageBeepWho(message);
                    }
                }
                this.messages[this.messages.length - 1].showTail = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    loadMessageBeepWho(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            message.beepWho = yield this.getUserFullname(message.beep);
        });
    }
    /**
     * Get the user fullname for a beep.
     *
     * @param id User Id before parsing.
     * @return User fullname.
     */
    getUserFullname(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            if (isNaN(idNumber)) {
                return id;
            }
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(idNumber, this.courseId, true);
                return user.fullname;
            }
            catch (_a) {
                // Error getting profile.
                return id;
            }
        });
    }
    /**
     * Refresh session messages.
     *
     * @param refresher Refresher.
     */
    refreshMessages(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].invalidateSessionMessages(this.chatId, this.sessionStart, this.groupId));
                yield this.fetchMessages();
            }
            finally {
                refresher.complete();
            }
        });
    }
};
AddonModChatSessionMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-session-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-messages.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-messages.scss */ "./src/addons/mod/chat/pages/session-messages/session-messages.scss")).default]
    })
], AddonModChatSessionMessagesPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/sessions/sessions.ts":
/*!********************************************************!*\
  !*** ./src/addons/mod/chat/pages/sessions/sessions.ts ***!
  \********************************************************/
/*! exports provided: AddonModChatSessionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionsPage", function() { return AddonModChatSessionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _classes_chat_sessions_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../classes/chat-sessions-source */ "./src/addons/mod/chat/classes/chat-sessions-source.ts");
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
var AddonModChatSessionsPage_1;








/**
 * Page that displays list of chat sessions.
 */
let AddonModChatSessionsPage = AddonModChatSessionsPage_1 = class AddonModChatSessionsPage {
    constructor() {
        try {
            const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            const chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('chatId');
            const cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_chat_sessions_source__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionsSource"], [courseId, chatId, cmId]);
            this.sessions = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreListItemsManager"](source, AddonModChatSessionsPage_1);
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            return;
        }
    }
    get groupId() {
        return this.sessions.getSource().groupId;
    }
    set groupId(value) {
        this.sessions.getSource().groupId = value;
    }
    get showAll() {
        return this.sessions.getSource().showAll;
    }
    set showAll(value) {
        this.sessions.getSource().showAll = value;
    }
    get groupInfo() {
        return this.sessions.getSource().groupInfo;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchSessions();
            this.sessions.start(this.splitView);
        });
    }
    /**
     * Fetch chat sessions.
     *
     * @param showLoading Display a loading modal.
     */
    fetchSessions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.sessions.load();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
        });
    }
    /**
     * Reload chat sessions.
     */
    reloadSessions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showModalLoading();
            try {
                yield this.sessions.reload();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Refresh chat sessions.
     *
     * @param refresher Refresher.
     */
    refreshSessions(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sessions.getSource().setDirty(true);
                yield this.sessions.getSource().invalidateCache();
                yield this.fetchSessions();
            }
            finally {
                refresher.complete();
            }
        });
    }
    /**
     * Show more session users.
     *
     * @param session Chat session.
     * @param event The event.
     */
    showMoreUsers(session, event) {
        if (session.allsessionusers) {
            session.sessionusers = session.allsessionusers;
        }
        event.stopPropagation();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.sessions.destroy();
    }
};
AddonModChatSessionsPage.ctorParameters = () => [];
AddonModChatSessionsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__["CoreSplitViewComponent"],] }]
};
AddonModChatSessionsPage = AddonModChatSessionsPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-sessions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sessions.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html")).default,
    })
], AddonModChatSessionsPage);



/***/ })

}]);
//# sourceMappingURL=chat-lazy-module.js.map