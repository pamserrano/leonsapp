(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-discussion-discussion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <h2>{{ 'addon.messages.groupinfo' | translate }}</h2>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"closeModal()\" [attr.aria-label]=\"'core.close' | translate\">\n                <ion-icon name=\"fas-times\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item class=\"ion-text-center\" *ngIf=\"conversation\">\n            <ion-label>\n                <div class=\"large-avatar\">\n                    <img class=\"avatar\" [src]=\"conversation!.imageurl\" core-external-content [alt]=\"conversation!.name\"\n                        onError=\"this.src='assets/img/group-avatar.svg'\">\n                </div>\n                <h2>\n                    <core-format-text [text]=\"conversation!.name\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n                </h2>\n                <p>\n                    <core-format-text *ngIf=\"conversation!.subname\" [text]=\"conversation!.subname\" contextLevel=\"system\"\n                        [contextInstanceId]=\"0\">\n                    </core-format-text>\n                </p>\n                <p>{{ 'addon.messages.numparticipants' | translate:{$a: conversation!.membercount} }}</p>\n            </ion-label>\n        </ion-item>\n\n        <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" *ngFor=\"let member of members\" (click)=\"closeModal(member.id)\"\n            detail=\"true\" button>\n            <core-user-avatar [user]=\"member\" [linkProfile]=\"false\" [checkOnline]=\"member.showonlinestatus\" slot=\"start\">\n            </core-user-avatar>\n            <ion-label>\n                <p class=\"item-heading\">\n                    {{ member.fullname }}\n                    <ion-icon name=\"fas-user-slash\" *ngIf=\"member.isblocked\"\n                        [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\n                    </ion-icon>\n                </p>\n            </ion-label>\n        </ion-item>\n\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreMembers($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <img *ngIf=\"loaded && !otherMember && conversationImage\" class=\"core-bar-button-image\" [src]=\"conversationImage\" alt=\"\"\n                    onError=\"this.src='assets/img/group-avatar.svg'\" core-external-content role=\"presentation\" [siteId]=\"siteId || null\">\n                <core-user-avatar *ngIf=\"loaded && otherMember\" class=\"core-bar-button-image\" [user]=\"otherMember\" [linkProfile]=\"false\"\n                    [checkOnline]=\"otherMember.showonlinestatus\">\n                </core-user-avatar>\n                <core-format-text [text]=\"title\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\n                <ion-icon *ngIf=\"conversation && conversation.isfavourite\" name=\"fas-star\"\n                    [attr.aria-label]=\"'core.favourites' | translate\">\n                </ion-icon>\n                <ion-icon *ngIf=\"conversation && conversation.ismuted\" name=\"fas-bell-slash\"\n                    [attr.aria-label]=\"'addon.messages.mutedconversation' | translate\">\n                </ion-icon>\n            </h1>\n        </ion-title>\n        <ion-buttons slot=\"end\"></ion-buttons>\n    </ion-toolbar>\n    <core-navbar-buttons slot=\"end\">\n        <core-context-menu [attr.aria-label]=\"'addon.messages.conversationactions' | translate\">\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || isGroup\" [priority]=\"1000\"\n                [content]=\"'addon.messages.info' | translate\" (action)=\"viewInfo()\" iconAction=\"fas-info-circle\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || !isGroup\" [priority]=\"1000\"\n                [content]=\"'addon.messages.groupinfo' | translate\" (action)=\"viewInfo()\" iconAction=\"fas-info-circle\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversation\" [priority]=\"800\" (action)=\"changeFavourite($event)\"\n                [closeOnClick]=\"false\" [content]=\"(conversation && conversation.isfavourite ? 'addon.messages.removefromfavourites' :\n                'addon.messages.addtofavourites') | translate\" [iconAction]=\"favouriteIcon\" [iconSlash]=\"favouriteIconSlash\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || otherMember.isblocked\" [priority]=\"700\"\n                [content]=\"'addon.messages.blockuser' | translate\" (action)=\"blockUser()\" [iconAction]=\"blockIcon\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.isblocked\" [priority]=\"700\"\n                [content]=\"'addon.messages.unblockuser' | translate\" (action)=\"unblockUser()\" [iconAction]=\"blockIcon\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !muteEnabled || !conversation\" [priority]=\"600\" (action)=\"changeMute($event)\"\n                [closeOnClick]=\"false\" [content]=\"(conversation && conversation.ismuted ? 'addon.messages.unmuteconversation' :\n                'addon.messages.muteconversation') | translate\" [iconAction]=\"muteIcon\"></core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!canDelete || !messages || !messages.length\" [priority]=\"400\"\n                [content]=\"'addon.messages.showdeletemessages' | translate\" iconAction=\"toggle\" [(toggle)]=\"showDelete\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversationId || isGroup || !messages || !messages.length\"\n                [priority]=\"200\" [content]=\"'addon.messages.deleteconversation' | translate\" (action)=\"deleteConversation($event)\"\n                [closeOnClick]=\"false\" [iconAction]=\"deleteIcon\"></core-context-menu-item>\n            <core-context-menu-item\n                [hidden]=\"isSelf || !otherMember || otherMember.iscontact || requestContactSent || requestContactReceived\" [priority]=\"100\"\n                [content]=\"'addon.messages.addtoyourcontacts' | translate\" (action)=\"createContactRequest()\" [iconAction]=\"addRemoveIcon\">\n            </core-context-menu-item>\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.iscontact\" [priority]=\"100\"\n                [content]=\"'addon.messages.removefromyourcontacts' | translate\" (action)=\"removeContact()\" [iconAction]=\"addRemoveIcon\"\n                [iconSlash]=\"true\"></core-context-menu-item>\n        </core-context-menu>\n    </core-navbar-buttons>\n</ion-header>\n<ion-content (ionScroll)=\"scrollFunction()\">\n    <core-loading [hideUntil]=\"loaded\">\n        <!-- Load previous messages. -->\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadPrevious($event)\" position=\"top\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n\n        <ng-container *ngIf=\"isSelf && !canLoadMore\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.selfconversation' | translate }}</p>\n            <p class=\"ion-text-center\"><i>{{ 'addon.messages.selfconversationdefaultmessage' | translate }}</i></p>\n        </ng-container>\n\n        <h2 class=\"sr-only\">{{ title }}</h2>\n\n        <ion-list class=\"addon-messages-discussion-container\" [class.addon-messages-discussion-group]=\"isGroup\" [attr.aria-live]=\"'polite'\">\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\n                <h3 class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\n                    {{ message.timecreated | coreFormatDate: \"strftimedayshort\" }}\n                </h3>\n\n                <ion-chip class=\"addon-messages-unreadfrom\" *ngIf=\"unreadMessageFrom > 0 && message.id == unreadMessageFrom\" color=\"light\">\n                    <ion-label>{{ 'addon.messages.newmessages' | translate }}</ion-label>\n                    <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\n                </ion-chip>\n\n                <core-message [message]=\"message\" [user]=\"members[message.useridfrom]\" (afterRender)=\"last && scrollToBottom()\"\n                    [text]=\"message.text\" (onDeleteMessage)=\"deleteMessage(message, index)\" [showDelete]=\"showDelete\"\n                    [time]=\"message.timecreated\">\n                </core-message>\n            </ng-container>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\"\n            [message]=\"'addon.messages.nomessagesfound' | translate\">\n        </core-empty-box>\n    </core-loading>\n    <!-- Scroll bottom. -->\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"loaded && newMessages > 0\">\n        <ion-fab-button size=\"small\" (click)=\"scrollToFirstUnreadMessage()\" color=\"light\"\n            [attr.aria-label]=\"'addon.messages.newmessages' | translate\">\n            <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\n            <span class=\"sr-only\">{{ 'addon.messages.newmessages' | translate }}</span>\n        </ion-fab-button>\n        <ion-badge class=\"core-discussion-messages-badge\">{{ newMessages }}</ion-badge>\n    </ion-fab>\n</ion-content>\n<ion-footer class=\"footer-adjustable\" *ngIf=\"loaded && (!conversationId || conversation)\">\n    <ion-toolbar [color]=\"footerType == 'message' ? 'contrast' : 'light'\">\n        <p *ngIf=\"footerType == 'unable'\" class=\"ion-text-center ion-margin-horizontal\">\n            {{ 'addon.messages.unabletomessage' | translate }}\n        </p>\n        <div *ngIf=\"footerType == 'blocked'\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.youhaveblockeduser' | translate }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"unblockUser()\">\n                {{ 'addon.messages.unblockuser' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requiresContact' && otherMember\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">\n                <strong>{{ 'addon.messages.isnotinyourcontacts' | translate: {$a: otherMember.fullname} }}</strong>\n            </p>\n            <p class=\"ion-text-center\">{{ 'addon.messages.requirecontacttomessage' | translate: {$a: otherMember.fullname} }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"createContactRequest()\">\n                {{ 'addon.messages.sendcontactrequest' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requestReceived' && otherMember\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\">{{ 'addon.messages.userwouldliketocontactyou' | translate: {$a: otherMember.fullname} }}</p>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"confirmContactRequest()\">\n                {{ 'addon.messages.acceptandaddcontact' | translate }}\n            </ion-button>\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" fill=\"outline\" (click)=\"declineContactRequest()\">\n                {{ 'addon.messages.decline' | translate }}\n            </ion-button>\n        </div>\n        <div *ngIf=\"footerType == 'requestSent' || (footerType == 'message' && requestContactSent)\" class=\"ion-padding-horizontal\">\n            <p class=\"ion-text-center\"><strong>{{ 'addon.messages.contactrequestsent' | translate }}</strong></p>\n            <p class=\"ion-text-center\" *ngIf=\"otherMember\">\n                {{ 'addon.messages.yourcontactrequestpending' | translate: {$a: otherMember.fullname} }}\n            </p>\n        </div>\n        <core-send-message-form *ngIf=\"footerType == 'message'\" (onSubmit)=\"sendMessage($event)\" [showKeyboard]=\"showKeyboard\"\n            [placeholder]=\"'addon.messages.newmessage' | translate\"></core-send-message-form>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1 *ngIf=\"startingPost\">\n                <core-format-text contextLevel=\"module\" [text]=\"startingPost.subject\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n                </core-format-text>\n            </h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <!-- The context menu will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<core-navbar-buttons slot=\"end\">\n    <core-context-menu>\n        <core-context-menu-item *ngIf=\"discussionLoaded && !postHasOffline && isOnline\" [priority]=\"650\"\n            [content]=\"'addon.mod_forum.refreshposts' | translate\" [iconAction]=\"refreshIcon\" [closeOnClick]=\"false\"\n            (action)=\"doRefresh(null, $event)\">\n        </core-context-menu-item>\n        <core-context-menu-item *ngIf=\"discussionLoaded && isMobile && postHasOffline && isOnline\" [priority]=\"550\"\n            [content]=\"'core.settings.synchronizenow' | translate\" [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"\n            (action)=\"doRefresh(null, $event, true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'flat-oldest'\" [priority]=\"500\"\n            [content]=\"'addon.mod_forum.modeflatoldestfirst' | translate\" iconAction=\"fas-arrow-down\" (action)=\"changeSort('flat-oldest')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'flat-newest'\" [priority]=\"450\"\n            [content]=\"'addon.mod_forum.modeflatnewestfirst' | translate\" iconAction=\"fas-arrow-up\" (action)=\"changeSort('flat-newest')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"sort == 'nested'\" [priority]=\"400\" [content]=\"'addon.mod_forum.modenested' | translate\"\n            iconAction=\"fas-exchange-alt\" (action)=\"changeSort('nested')\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || discussion.locked\" [priority]=\"300\"\n            [content]=\"'addon.mod_forum.lockdiscussion' | translate\" iconAction=\"fas-lock\" (action)=\"setLockState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || !discussion.locked\" [priority]=\"300\"\n            [content]=\"'addon.mod_forum.unlockdiscussion' | translate\" iconAction=\"fas-unlock\" (action)=\"setLockState(false)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || discussion.pinned\" [priority]=\"250\"\n            [content]=\"'addon.mod_forum.pindiscussion' | translate\" iconAction=\"fas-map-pin\" (action)=\"setPinState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || !discussion.pinned\" [priority]=\"250\"\n            [content]=\"'addon.mod_forum.unpindiscussion' | translate\" [iconSlash]=\"true\" iconAction=\"fas-map-pin\"\n            (action)=\"setPinState(false)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || discussion.starred\" [priority]=\"200\"\n            [content]=\"'addon.mod_forum.addtofavourites' | translate\" iconAction=\"fas-star\" (action)=\"toggleFavouriteState(true)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || !discussion.starred\" [priority]=\"200\"\n            [content]=\"'addon.mod_forum.removefromfavourites' | translate\" iconAction=\"fas-star\" [iconSlash]=\"true\"\n            (action)=\"toggleFavouriteState(false)\">\n        </core-context-menu-item>\n        <core-context-menu-item [hidden]=\"!externalUrl\" [priority]=\"100\" [content]=\"'core.openinbrowser' | translate\" [href]=\"externalUrl\"\n            iconAction=\"fas-external-link-alt\" [showBrowserWarning]=\"false\"></core-context-menu-item>\n    </core-context-menu>\n</core-navbar-buttons>\n<ion-content [core-swipe-navigation]=\"discussions\" class=\"limited-width\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!discussionLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]=\"discussionLoaded\">\n        <!-- Discussion replies found to be synchronized -->\n        <ion-card class=\"core-warning-card\" *ngIf=\"postHasOffline || hasOfflineRatings\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: discussionStr} }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <!-- Cut-off date or due date message -->\n        <ion-card class=\"core-info-card\" *ngIf=\"availabilityMessage\">\n            <ion-item>\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ availabilityMessage }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <ion-card class=\"core-info-card\" *ngIf=\"discussion && discussion.locked\">\n            <ion-item>\n                <ion-icon name=\"fas-lock\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'addon.mod_forum.discussionlocked' | translate }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <!-- Q&A message. -->\n        <ion-card class=\"core-info-card\" *ngIf=\"showQAMessage\">\n            <ion-item>\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'addon.mod_forum.qandanotify' | translate }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <div *ngIf=\"startingPost\" class=\"ion-margin-bottom\">\n            <addon-mod-forum-post [post]=\"startingPost\" [discussion]=\"discussion\" [courseId]=\"courseId\" [highlight]=\"true\"\n                [discussionId]=\"discussionId\" [component]=\"component\" [componentId]=\"cmId\" [formData]=\"formData\"\n                [originalData]=\"originalData\" [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\n                [leavingPage]=\"leavingPage\" (onPostChange)=\"postListChanged()\">\n            </addon-mod-forum-post>\n        </div>\n\n        <ion-card *ngIf=\"sort != 'nested' && posts.length\">\n            <ng-container *ngFor=\"let post of posts; first as first\">\n                <core-spacer *ngIf=\"!first\"></core-spacer>\n                <addon-mod-forum-post [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\" [component]=\"component\"\n                    [componentId]=\"cmId\" [formData]=\"formData\" [originalData]=\"originalData\" [parentSubject]=\"postSubjects[post.parentid]\"\n                    [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\n                    [leavingPage]=\"leavingPage\" (onPostChange)=\"postListChanged()\">\n                </addon-mod-forum-post>\n            </ng-container>\n        </ion-card>\n\n        <ng-container *ngIf=\"sort == 'nested' && posts.length\">\n            <ng-container *ngFor=\"let post of posts\">\n                <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: post}\"></ng-container>\n            </ng-container>\n        </ng-container>\n\n        <ng-template #nestedPosts let-post=\"post\">\n            <ion-card>\n                <addon-mod-forum-post [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\" [component]=\"component\"\n                    [componentId]=\"cmId\" [formData]=\"formData\" [originalData]=\"originalData\" [parentSubject]=\"postSubjects[post.parentid]\"\n                    [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\n                    [leavingPage]=\"leavingPage\" (onPostChange)=\"postListChanged()\">\n                </addon-mod-forum-post>\n            </ion-card>\n            <div class=\"ion-padding-start\" *ngIf=\"post.children && post.children.length && post.children[0].subject\">\n                <ng-container *ngFor=\"let child of post.children\">\n                    <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: child}\"></ng-container>\n                </ng-container>\n            </div>\n        </ng-template>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/messages/components/components.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/messages/components/components.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonMessagesComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesComponentsModule", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
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




let AddonMessagesComponentsModule = class AddonMessagesComponentsModule {
};
AddonMessagesComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesConversationInfoComponent"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
    })
], AddonMessagesComponentsModule);



/***/ }),

/***/ "./src/addons/messages/components/conversation-info/conversation-info.ts":
/*!*******************************************************************************!*\
  !*** ./src/addons/messages/components/conversation-info/conversation-info.ts ***!
  \*******************************************************************************/
/*! exports provided: AddonMessagesConversationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesConversationInfoComponent", function() { return AddonMessagesConversationInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Component that displays the list of conversations, including group conversations.
 */
let AddonMessagesConversationInfoComponent = class AddonMessagesConversationInfoComponent {
    constructor(route) {
        this.route = route;
        this.conversationId = 0;
        this.loaded = false;
        this.members = [];
        this.canLoadMore = false;
        this.loadMoreError = false;
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Fetch the required data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the conversation data first.
            try {
                const conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversation(this.conversationId, false, true, 0, 0);
                this.conversation = conversation;
                // Now get the members.
                yield this.fetchMembers();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
            }
        });
    }
    /**
     * Get conversation members.
     *
     * @param loadingMore Whether we are loading more data or just the first ones.
     * @return Promise resolved when done.
     */
    fetchMembers(loadingMore) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            const limitFrom = loadingMore ? this.members.length : 0;
            const data = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversationMembers(this.conversationId, limitFrom);
            if (loadingMore) {
                this.members = this.members.concat(data.members);
            }
            else {
                this.members = data.members;
            }
            this.canLoadMore = data.canLoadMore;
        });
    }
    /**
     * Function to load more members.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadMoreMembers(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchMembers(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
                this.loadMoreError = true;
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversation(this.conversationId));
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversationMembers(this.conversationId));
            yield Promise.all(promises);
            yield this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Close modal.
     *
     * @param userId User conversation to load.
     */
    closeModal(userId) {
        _singletons__WEBPACK_IMPORTED_MODULE_5__["ModalController"].dismiss(userId);
    }
};
AddonMessagesConversationInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddonMessagesConversationInfoComponent.propDecorators = {
    conversationId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddonMessagesConversationInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-conversation-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conversation-info.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html")).default,
    })
], AddonMessagesConversationInfoComponent);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.module.ts":
/*!*******************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddonMessagesDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPageModule", function() { return AddonMessagesDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/messages/pages/discussion/discussion.page.ts");
/* harmony import */ var _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/components/components.module */ "./src/addons/messages/components/components.module.ts");
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
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
    },
];
let AddonMessagesDiscussionPageModule = class AddonMessagesDiscussionPageModule {
};
AddonMessagesDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesDiscussionPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.page.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddonMessagesDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPage", function() { return AddonMessagesDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages-offline */ "./src/addons/messages/services/messages-offline.ts");
/* harmony import */ var _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/messages-sync */ "./src/addons/messages/services/messages-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/infinite-loading/infinite-loading */ "./src/core/components/infinite-loading/infinite-loading.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
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
 * Page that displays a message discussion page.
 */
let AddonMessagesDiscussionPage = class AddonMessagesDiscussionPage {
    constructor(route, elementRef) {
        this.route = route;
        this.elementRef = elementRef;
        this.fetching = false;
        this.messagesBeingSent = 0;
        this.pagesLoaded = 1;
        this.lastMessage = { text: '', timecreated: 0 };
        this.keepMessageMap = {};
        this.oldContentHeight = 0;
        this.scrollBottom = true;
        this.viewDestroyed = false;
        this.showLoadingModal = false; // Whether to show a loading modal while fetching data.
        this.showInfo = false;
        this.loaded = false;
        this.showKeyboard = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.messages = [];
        this.showDelete = false;
        this.canDelete = false;
        this.isGroup = false;
        this.members = {}; // Members that wrote a message, indexed by ID.
        this.favouriteIcon = 'fa-star';
        this.deleteIcon = 'fas-trash';
        this.blockIcon = 'fas-user-lock';
        this.addRemoveIcon = 'fas-user-plus';
        this.muteIcon = 'fas-bell-slash';
        this.favouriteIconSlash = false;
        this.muteEnabled = false;
        this.footerType = 'unable';
        this.requestContactSent = false;
        this.requestContactReceived = false;
        this.isSelf = false;
        this.newMessages = 0;
        this.unreadMessageFrom = 0;
        this.initialized = false;
        this.hostElement = elementRef.nativeElement;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.groupMessagingEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isGroupMessagingEnabled();
        this.muteEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMuteConversationEnabled();
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_12__["CoreLogger"].getInstance('AddonMessagesDiscussionPage');
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSyncProvider"].AUTO_SYNCED, (data) => {
            if ((data.userId && data.userId == this.userId) ||
                (data.conversationId && data.conversationId == this.conversationId)) {
                // Fetch messages.
                this.fetchMessages();
                // Show first warning if any.
                if (data.warnings && data.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(data.warnings[0]);
                }
            }
        }, this.siteId);
        // Refresh data if info of a mamber of the conversation have changed.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.userId && (this.members[data.userId] || this.otherMember && data.userId == this.otherMember.id)) {
                this.fetchData();
            }
        }, this.siteId);
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const oldConversationId = this.conversationId;
                const oldUserId = this.userId;
                let forceScrollToBottom = false;
                this.conversationId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('conversationId', { params }) || undefined;
                this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('userId', { params }) || undefined;
                this.showInfo = !params.hideInfo;
                if (oldConversationId != this.conversationId || oldUserId != this.userId) {
                    // Showing reload again can break animations.
                    this.loaded = false;
                    this.initialized = false;
                    forceScrollToBottom = true;
                }
                this.showKeyboard = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteBooleanParam('showKeyboard', { params }) || false;
                yield this.fetchData();
                this.scrollToBottom(forceScrollToBottom);
            }));
        });
    }
    /**
     * View has been initialized.
     */
    ngAfterViewInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
        });
    }
    /**
     * Adds a new message to the message list.
     *
     * @param message Message to be added.
     * @param keep If set the keep flag or not.
     * @return If message is not mine and was recently added.
     */
    addMessage(message, keep = true) {
        /* Create a hash to identify the message. The text of online messages isn't reliable because it can have random data
           like VideoJS ID. Try to use id and fallback to text for offline messages. */
        const id = 'id' in message ? message.id : '';
        message.hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__["Md5"].hashAsciiStr(String(id || message.text || '')) + '#' + message.timecreated + '#' +
            message.useridfrom;
        let added = false;
        if (this.keepMessageMap[message.hash] === undefined) {
            // Message not added to the list. Add it now.
            this.messages.push(message);
            added = message.useridfrom != this.currentUserId;
        }
        // Message needs to be kept in the list.
        this.keepMessageMap[message.hash] = keep;
        return added;
    }
    /**
     * Remove a message if it shouldn't be in the list anymore.
     *
     * @param hash Hash of the message to be removed.
     */
    removeMessage(hash) {
        if (this.keepMessageMap[hash]) {
            // Selected to keep it, clear the flag.
            this.keepMessageMap[hash] = false;
            return;
        }
        delete this.keepMessageMap[hash];
        const position = this.messages.findIndex((message) => message.hash == hash);
        if (position >= 0) {
            this.messages.splice(position, 1);
        }
    }
    /**
     * Convenience function to fetch the conversation data.
     *
     * @return Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader;
            if (this.showLoadingModal) {
                loader = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading();
            }
            if (!this.groupMessagingEnabled && this.userId) {
                // Get the user profile to retrieve the user fullname and image.
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId, undefined, true).then((user) => {
                    if (!this.title) {
                        this.title = user.fullname;
                    }
                    this.conversationImage = user.profileimageurl;
                    this.members[user.id] = user;
                    return;
                }).catch(() => {
                    // Ignore errors.
                });
            }
            // Synchronize messages if needed.
            try {
                const syncResult = yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].syncDiscussion(this.conversationId, this.userId);
                if (syncResult.warnings && syncResult.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(syncResult.warnings[0]);
                }
            }
            catch (_a) {
                // Ignore errors;
            }
            try {
                const promises = [];
                if (this.groupMessagingEnabled) {
                    // Get the conversation ID if it exists and we don't have it yet.
                    const exists = yield this.getConversation(this.conversationId, this.userId);
                    if (exists) {
                        // Fetch the messages for the first time.
                        promises.push(this.fetchMessages());
                    }
                    if (this.userId) {
                        // Get the member info. Invalidate first to make sure we get the latest status.
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateMemberInfo(this.userId).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getMemberInfo(this.userId);
                            if (!exists && this.otherMember) {
                                this.conversationImage = this.otherMember.profileimageurl;
                                this.title = this.otherMember.fullname;
                            }
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    else {
                        this.otherMember = undefined;
                    }
                }
                else {
                    if (this.userId) {
                        // Fake the user member info.
                        promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId).then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = {
                                id: user.id,
                                fullname: user.fullname,
                                profileurl: '',
                                profileimageurl: user.profileimageurl || '',
                                profileimageurlsmall: user.profileimageurlsmall || '',
                                isonline: false,
                                showonlinestatus: false,
                                isblocked: false,
                                iscontact: false,
                                isdeleted: false,
                                canmessageevenifblocked: true,
                                canmessage: true,
                                requirescontact: false,
                            };
                            this.otherMember.isblocked = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isBlocked(this.userId);
                            this.otherMember.iscontact = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isContact(this.userId);
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    // Fetch the messages for the first time.
                    promises.push(this.fetchMessages().then(() => {
                        if (!this.title && this.messages.length) {
                            // Didn't receive the fullname via argument. Try to get it from messages.
                            // It's possible that name cannot be resolved when no messages were yet exchanged.
                            const firstMessage = this.messages[0];
                            if ('usertofullname' in firstMessage) {
                                if (firstMessage.useridto != this.currentUserId) {
                                    this.title = firstMessage.usertofullname || '';
                                }
                                else {
                                    this.title = firstMessage.userfromfullname || '';
                                }
                            }
                        }
                        return;
                    }));
                }
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }
            finally {
                this.checkCanDelete();
                this.loaded = true;
                this.setPolling(); // Make sure we're polling messages.
                this.setContactRequestInfo();
                this.setFooterType();
                loader && loader.dismiss();
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.setPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.unsetPolling();
    }
    /**
     * Convenience function to fetch messages.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @return Resolved when done.
     */
    fetchMessages(messagesAreNew = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (this.messagesBeingSent > 0) {
                // We do not poll while a message is being sent or we could confuse the user.
                // Otherwise, his message would disappear from the list, and he'd have to wait for the interval to check for messages.
                return;
            }
            else if (this.fetching) {
                // Already fetching.
                return;
            }
            else if (this.groupMessagingEnabled && !this.conversationId) {
                // Don't have enough data to fetch messages.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No enough data provided to fetch messages');
            }
            if (this.conversationId) {
                this.logger.debug(`Polling new messages for conversation '${this.conversationId}'`);
            }
            else if (this.userId) {
                this.logger.debug(`Polling new messages for discussion with user '${this.userId}'`);
            }
            else {
                // Should not happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No enough data provided to fetch messages');
            }
            this.fetching = true;
            try {
                // Wait for synchronization process to finish.
                yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].waitForSyncConversation(this.conversationId, this.userId);
                let messages = [];
                // Fetch messages. Invalidate the cache before fetching.
                if (this.groupMessagingEnabled) {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversationMessages(this.conversationId);
                    messages = yield this.getConversationMessages(this.pagesLoaded);
                }
                else {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateDiscussionCache(this.userId);
                    messages = yield this.getDiscussionMessages(this.pagesLoaded);
                }
                this.loadMessages(messages, messagesAreNew);
            }
            finally {
                this.fetching = false;
            }
        });
    }
    /**
     * Format and load a list of messages into the view.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @param messages Messages to load.
     */
    loadMessages(messages, messagesAreNew = true) {
        if (this.viewDestroyed) {
            return;
        }
        // Check if we are at the bottom to scroll it after render.
        // Use a 5px error margin because in iOS there is 1px difference for some reason.
        this.scrollBottom = _singletons_dom__WEBPACK_IMPORTED_MODULE_23__["CoreDom"].scrollIsBottom(this.scrollElement, 5);
        if (this.messagesBeingSent > 0) {
            // Ignore polling due to a race condition.
            return;
        }
        // Add new messages to the list and mark the messages that should still be displayed.
        const newMessages = messages.reduce((val, message) => val + (this.addMessage(message) ? 1 : 0), 0);
        // Set the new badges message if we're loading new messages.
        if (messagesAreNew) {
            this.setNewMessagesBadge(this.newMessages + newMessages);
        }
        // Remove messages that shouldn't be in the list anymore.
        for (const hash in this.keepMessageMap) {
            this.removeMessage(hash);
        }
        // Sort the messages.
        _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortMessages(this.messages);
        // Calculate which messages need to display the date or user data.
        this.messages.forEach((message, index) => {
            message.showDate = this.showDate(message, this.messages[index - 1]);
            message.showUserData = this.showUserData(message, this.messages[index - 1]);
            message.showTail = this.showTail(message, this.messages[index + 1]);
        });
        // If we received a new message while using group messaging, force mark messages as read.
        const last = this.messages[this.messages.length - 1];
        const forceMark = this.groupMessagingEnabled && last && last.useridfrom != this.currentUserId && this.lastMessage.text != ''
            && (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated);
        // Notify that there can be a new message.
        this.notifyNewMessage();
        // Mark retrieved messages as read if they are not.
        this.markMessagesAsRead(forceMark);
    }
    /**
     * Set the new message badge number and set scroll listener if needed.
     *
     * @param addMessages Number of messages still to be read.
     */
    setNewMessagesBadge(addMessages) {
        if (this.newMessages == 0 && addMessages > 0) {
            this.scrollFunction();
        }
        this.newMessages = addMessages;
    }
    /**
     * The scroll was moved. Update new messages count.
     */
    scrollFunction() {
        var _a;
        if (this.newMessages == 0) {
            return;
        }
        if (_singletons_dom__WEBPACK_IMPORTED_MODULE_23__["CoreDom"].scrollIsBottom(this.scrollElement, 40)) {
            // At the bottom, reset.
            this.setNewMessagesBadge(0);
            return;
        }
        const scrollElRect = (_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const scrollBottomPos = (scrollElRect && scrollElRect.bottom) || 0;
        if (scrollBottomPos == 0) {
            return;
        }
        const messages = Array.from(this.hostElement.querySelectorAll('core-message:not(.is-mine)'))
            .slice(-this.newMessages)
            .reverse();
        const newMessagesUnread = messages.findIndex((message) => {
            const elementRect = message.getBoundingClientRect();
            if (!elementRect) {
                return false;
            }
            return elementRect.bottom <= scrollBottomPos;
        });
        if (newMessagesUnread > 0 && newMessagesUnread < this.newMessages) {
            this.setNewMessagesBadge(newMessagesUnread);
        }
    }
    /**
     * Get the conversation.
     *
     * @param conversationId Conversation ID.
     * @param userId User ID.
     * @return Promise resolved with a boolean: whether the conversation exists or not.
     */
    getConversation(conversationId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fallbackConversation;
            // Try to get the conversationId if we don't have it.
            if (!conversationId && userId) {
                try {
                    if (userId === this.currentUserId && _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isSelfConversationEnabled()) {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getSelfConversation();
                    }
                    else {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationBetweenUsers(userId, undefined, true);
                    }
                    conversationId = fallbackConversation.id;
                }
                catch (error) {
                    // Probably conversation does not exist or user is offline. Try to load offline messages.
                    this.isSelf = userId === this.currentUserId;
                    const messages = yield _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesOffline"].getMessages(userId);
                    if (messages && messages.length) {
                        // We have offline messages, this probably means that the conversation didn't exist. Don't display error.
                        messages.forEach((message) => {
                            message.pending = true;
                            message.text = message.smallmessage;
                        });
                        this.loadMessages(messages);
                    }
                    else if (error.errorcode != 'errorconversationdoesnotexist') {
                        // Display the error.
                        throw error;
                    }
                    return false;
                }
            }
            if (!conversationId) {
                return false;
            }
            // Retrieve the conversation. Invalidate data first to get the right unreadcount.
            yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversation(conversationId);
            try {
                this.conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(conversationId, undefined, true);
            }
            catch (error) {
                // Get conversation failed, use the fallback one if we have it.
                if (fallbackConversation) {
                    this.conversation = fallbackConversation;
                }
                else {
                    throw error;
                }
            }
            if (this.conversation) {
                this.conversationId = this.conversation.id;
                this.title = this.conversation.name;
                this.conversationImage = this.conversation.imageurl;
                this.isGroup = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP;
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                if (!this.isGroup) {
                    this.userId = this.conversation.userid;
                }
                this.isSelf = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_SELF;
                return true;
            }
            else {
                return false;
            }
        });
    }
    /**
     * Get the messages of the conversation. Used if group messaging is supported.
     *
     * @param pagesToLoad Number of "pages" to load.
     * @param offset Offset for message list.
     * @return Promise resolved with the list of messages.
     */
    getConversationMessages(pagesToLoad, offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversationId) {
                return [];
            }
            const excludePending = offset > 0;
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationMessages(this.conversationId, {
                excludePending: excludePending,
                limitFrom: offset,
            });
            pagesToLoad--;
            // Treat members. Don't use CoreUtilsProvider.arrayToObject because we don't want to override the existing object.
            if (result.members) {
                result.members.forEach((member) => {
                    this.members[member.id] = member;
                });
            }
            const messages = result.messages;
            if (pagesToLoad > 0 && result.canLoadMore) {
                offset += _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].LIMIT_MESSAGES;
                // Get more messages.
                const nextMessages = yield this.getConversationMessages(pagesToLoad, offset);
                return messages.concat(nextMessages);
            }
            // No more messages to load, return them.
            this.canLoadMore = !!result.canLoadMore;
            return messages;
        });
    }
    /**
     * Get a discussion. Can load several "pages".
     *
     * @param pagesToLoad Number of pages to load.
     * @param lfReceivedUnread Number of unread received messages already fetched, so fetch will be done from this.
     * @param lfReceivedRead Number of read received messages already fetched, so fetch will be done from this.
     * @param lfSentUnread Number of unread sent messages already fetched, so fetch will be done from this.
     * @param lfSentRead Number of read sent messages already fetched, so fetch will be done from this.
     * @return Resolved when done.
     */
    getDiscussionMessages(pagesToLoad, lfReceivedUnread = 0, lfReceivedRead = 0, lfSentUnread = 0, lfSentRead = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Only get offline messages if we're loading the first "page".
            const excludePending = lfReceivedUnread > 0 || lfReceivedRead > 0 || lfSentUnread > 0 || lfSentRead > 0;
            // Get next messages.
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getDiscussion(this.userId, excludePending, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
            pagesToLoad--;
            if (pagesToLoad > 0 && result.canLoadMore) {
                // More pages to load. Calculate new limit froms.
                result.messages.forEach((message) => {
                    if (!message.pending && 'read' in message) {
                        if (message.useridfrom == this.userId) {
                            if (message.read) {
                                lfReceivedRead++;
                            }
                            else {
                                lfReceivedUnread++;
                            }
                        }
                        else {
                            if (message.read) {
                                lfSentRead++;
                            }
                            else {
                                lfSentUnread++;
                            }
                        }
                    }
                });
                // Get next messages.
                const nextMessages = yield this.getDiscussionMessages(pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
                return result.messages.concat(nextMessages);
            }
            else {
                // No more messages to load, return them.
                this.canLoadMore = result.canLoadMore;
                return result.messages;
            }
        });
    }
    /**
     * Mark messages as read.
     */
    markMessagesAsRead(forceMark) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let readChanged = false;
            let messageUnreadFound = false;
            // Mark all messages at a time if there is any unread message.
            if (forceMark) {
                messageUnreadFound = true;
            }
            else if (this.groupMessagingEnabled) {
                messageUnreadFound = !!((((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) &&
                    (this.conversationId && this.conversationId > 0));
            }
            else {
                // If an unread message is found, mark all messages as read.
                messageUnreadFound = this.messages.some((message) => message.useridfrom != this.currentUserId && ('read' in message && !message.read));
            }
            if (messageUnreadFound) {
                this.setUnreadLabelPosition();
                if (this.groupMessagingEnabled) {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllConversationMessagesRead(this.conversationId);
                }
                else {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllMessagesRead(this.userId);
                    // Mark all messages as read.
                    this.messages.forEach((message) => {
                        if ('read' in message) {
                            message.read = true;
                        }
                    });
                }
                readChanged = true;
            }
            if (readChanged) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].READ_CHANGED_EVENT, {
                    conversationId: this.conversationId,
                    userId: this.userId,
                }, this.siteId);
            }
        });
    }
    /**
     * Notify the last message found so discussions list controller can tell if last message should be updated.
     */
    notifyNewMessage() {
        var _a, _b;
        const last = this.messages[this.messages.length - 1];
        let trigger = false;
        if (!last) {
            this.lastMessage = { text: '', timecreated: 0 };
            trigger = true;
        }
        else if (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated) {
            this.lastMessage = { text: last.text || '', timecreated: last.timecreated };
            trigger = true;
        }
        if (trigger) {
            // Update discussions last message.
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, {
                conversationId: this.conversationId,
                userId: this.userId,
                message: this.lastMessage.text,
                timecreated: this.lastMessage.timecreated,
                isfavourite: !!((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.isfavourite),
                type: (_b = this.conversation) === null || _b === void 0 ? void 0 : _b.type,
            }, this.siteId);
            // Update navBar links and buttons.
            const newCanDelete = (last && 'id' in last && last.id && this.messages.length == 1) || this.messages.length > 1;
            if (this.canDelete != newCanDelete) {
                this.checkCanDelete();
            }
        }
    }
    /**
     * Set the place where the unread label position has to be.
     */
    setUnreadLabelPosition() {
        var _a, _b;
        if (this.unreadMessageFrom != 0) {
            return;
        }
        if (this.groupMessagingEnabled) {
            // Use the unreadcount from the conversation to calculate where should the label be placed.
            if (this.conversation && (((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) && this.messages) {
                // Iterate over messages to find the right message using the unreadcount. Skip offline messages and own messages.
                let found = 0;
                for (let i = this.messages.length - 1; i >= 0; i--) {
                    const message = this.messages[i];
                    if (!message.pending && message.useridfrom != this.currentUserId && 'id' in message) {
                        found++;
                        if (found == this.conversation.unreadcount) {
                            this.unreadMessageFrom = Number(message.id);
                            break;
                        }
                    }
                }
            }
        }
        else {
            let previousMessageRead = false;
            for (const x in this.messages) {
                const message = this.messages[x];
                if (message.useridfrom != this.currentUserId && 'read' in message) {
                    const unreadFrom = !message.read && previousMessageRead;
                    if (unreadFrom) {
                        // Save where the label is placed.
                        this.unreadMessageFrom = Number(message.id);
                        break;
                    }
                    previousMessageRead = !!message.read;
                }
            }
        }
        // Do not update the message unread from label on next refresh.
        if (this.unreadMessageFrom == 0) {
            // Using negative to indicate the label is not placed but should not be placed.
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Check if there's any message in the list that can be deleted.
     */
    checkCanDelete() {
        // All messages being sent should be at the end of the list.
        const first = this.messages[0];
        this.canDelete = first && !first.sending;
    }
    /**
     * Hide unread label when sending messages.
     */
    hideUnreadLabel() {
        if (this.unreadMessageFrom > 0) {
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Wait until fetching is false.
     *
     * @return Resolved when done.
     */
    waitForFetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.fetching) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].wait(400);
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(this.waitForFetch());
        });
    }
    /**
     * Set a polling to get new messages every certain time.
     */
    setPolling() {
        if (this.groupMessagingEnabled && !this.conversationId) {
            // Don't have enough data to poll messages.
            return;
        }
        if (!this.polling) {
            // Start polling.
            this.polling = window.setInterval(() => {
                this.fetchMessages().catch(() => {
                    // Ignore errors.
                });
            }, _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].POLL_INTERVAL);
        }
    }
    /**
     * Unset polling.
     */
    unsetPolling() {
        if (this.polling) {
            this.logger.debug(`Cancelling polling for conversation with user '${this.userId}'`);
            clearInterval(this.polling);
            this.polling = undefined;
        }
    }
    /**
     * Copy message to clipboard.
     *
     * @param message Message to be copied.
     */
    copyMessage(message) {
        const text = 'smallmessage' in message ? message.smallmessage || message.text || '' : message.text || '';
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].copyToClipboard(_services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].decodeHTMLEntities(text));
    }
    /**
     * Function to delete a message.
     *
     * @param message Message object to delete.
     * @param index Index where the message is to delete it from the view.
     */
    deleteMessage(message, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const canDeleteAll = this.conversation && this.conversation.candeletemessagesforallusers;
            const langKey = message.pending || canDeleteAll || this.isSelf ? 'core.areyousure' :
                'addon.messages.deletemessageconfirmation';
            const options = {};
            if (canDeleteAll && !message.pending) {
                // Show delete for all checkbox.
                options.inputs = [{
                        type: 'checkbox',
                        name: 'deleteforall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.deleteforeveryone'),
                    }];
            }
            try {
                const data = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant(langKey), undefined, undefined, undefined, options);
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteMessage(message, data && data[0]);
                    // Remove message from the list without having to wait for re-fetch.
                    this.messages.splice(index, 1);
                    this.removeMessage(message.hash);
                    this.notifyNewMessage();
                    this.fetchMessages(); // Re-fetch messages to update cached data.
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errordeletemessage', true);
            }
        });
    }
    /**
     * Function to load previous messages.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.initialized) {
                // Don't load previous if the view isn't fully initialized.
                // Don't put the initialized condition in the "enabled" input because then the load more is hidden and
                // the scroll height changes when it appears.
                infiniteComplete && infiniteComplete();
                return;
            }
            let infiniteHeight = ((_a = this.infinite) === null || _a === void 0 ? void 0 : _a.hostElement.getBoundingClientRect().height) || 0;
            const scrollHeight = (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0);
            // If there is an ongoing fetch, wait for it to finish.
            try {
                yield this.waitForFetch();
            }
            finally {
                this.pagesLoaded++;
                try {
                    yield this.fetchMessages(false);
                    // Try to keep the scroll position.
                    const scrollBottom = scrollHeight - (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0);
                    const height = ((_d = this.infinite) === null || _d === void 0 ? void 0 : _d.hostElement.getBoundingClientRect().height) || 0;
                    if (this.canLoadMore && infiniteHeight && this.infinite) {
                        // The height of the infinite is different while spinner is shown. Add that difference.
                        infiniteHeight = infiniteHeight - height;
                    }
                    else if (!this.canLoadMore) {
                        // Can't load more, take into account the full height of the infinite loading since it will disappear now.
                        infiniteHeight = infiniteHeight || height;
                    }
                    this.keepScroll(scrollHeight, scrollBottom, infiniteHeight);
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    this.pagesLoaded--;
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            }
        });
    }
    /**
     * Keep scroll position after loading previous messages.
     */
    keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries = 0) {
        setTimeout(() => {
            var _a;
            const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
            if (newScrollHeight == oldScrollHeight) {
                // Height hasn't changed yet. Retry if max retries haven't been reached.
                if (retries <= 10) {
                    this.keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries + 1);
                }
                return;
            }
            // Scroll has changed, but maybe it hasn't reached the full height yet.
            setTimeout(() => {
                var _a;
                const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
                const scrollTo = newScrollHeight - oldScrollBottom + infiniteHeight;
                this.content.scrollToPoint(0, scrollTo, 0);
            }, 30);
        }, 30);
    }
    /**
     * Scroll bottom when render has finished.
     *
     * @param force Whether to force scroll to bottom.
     */
    scrollToBottom(force = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if scroll is at bottom. If so, scroll bottom after rendering since there might be something new.
            if (this.scrollBottom || force) {
                this.scrollBottom = false;
                // Reset the badge.
                this.setNewMessagesBadge(0);
                // Leave time for the view to be rendered.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].nextTicks(5);
                if (!this.viewDestroyed && this.content) {
                    this.content.scrollToBottom(0);
                }
                if (force) {
                    this.initialized = true;
                }
            }
        });
    }
    /**
     * Scroll to the first new unread message.
     */
    scrollToFirstUnreadMessage() {
        if (this.newMessages > 0) {
            const messages = Array.from(this.hostElement.querySelectorAll('core-message:not(.is-mine)'));
            _singletons_dom__WEBPACK_IMPORTED_MODULE_23__["CoreDom"].scrollToElement(messages[messages.length - this.newMessages]);
        }
    }
    /**
     * Sends a message to the server.
     *
     * @param text Message text.
     */
    sendMessage(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hideUnreadLabel();
            this.showDelete = false;
            this.scrollBottom = true;
            this.setNewMessagesBadge(0);
            const message = {
                id: -1,
                pending: true,
                sending: true,
                useridfrom: this.currentUserId,
                smallmessage: text,
                text: text,
                timecreated: new Date().getTime(),
            };
            message.showDate = this.showDate(message, this.messages[this.messages.length - 1]);
            this.addMessage(message, false);
            this.messagesBeingSent++;
            // If there is an ongoing fetch, wait for it to finish.
            // Otherwise, if a message is sent while fetching it could disappear until the next fetch.
            try {
                yield this.waitForFetch();
            }
            finally {
                try {
                    let data;
                    if (this.conversationId) {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessageToConversation(this.conversation, text);
                    }
                    else {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessage(this.userId, text);
                    }
                    this.messagesBeingSent--;
                    let failure = false;
                    if (data.sent) {
                        try {
                            if (!this.conversationId && data.message && 'conversationid' in data.message) {
                                // Message sent to a new conversation, try to load the conversation.
                                yield this.getConversation(data.message.conversationid, this.userId);
                                // Now fetch messages.
                                try {
                                    yield this.fetchMessages();
                                }
                                finally {
                                    // Start polling messages now that the conversation exists.
                                    this.setPolling();
                                }
                            }
                            else {
                                // Message was sent, fetch messages right now.
                                yield this.fetchMessages();
                            }
                        }
                        catch (_a) {
                            failure = true;
                        }
                    }
                    if (failure || !data.sent) {
                        // Fetch failed or is offline message, mark the message as sent.
                        // If fetch is successful there's no need to mark it because the fetch will already show the message received.
                        message.sending = false;
                        if (data.sent) {
                            // Message sent to server, not pending anymore.
                            message.pending = false;
                        }
                        else if (data.message) {
                            message.timecreated = data.message.timecreated || 0;
                        }
                        this.notifyNewMessage();
                    }
                }
                catch (error) {
                    this.messagesBeingSent--;
                    // Only close the keyboard if an error happens.
                    // We want the user to be able to send multiple messages without the keyboard being closed.
                    _services_app__WEBPACK_IMPORTED_MODULE_13__["CoreApp"].closeKeyboard();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.messagenotsent', true);
                    this.removeMessage(message.hash);
                }
            }
        });
    }
    /**
     * Check date should be shown on message list for the current message.
     * If date has changed from previous to current message it should be shown.
     *
     * @param message Current message where to show the date.
     * @param prevMessage Previous message where to compare the date with.
     * @return If date has changed and should be shown.
     */
    showDate(message, prevMessage) {
        if (!prevMessage) {
            // First message, show it.
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_16___default()(message.timecreated).isSame(prevMessage.timecreated, 'day');
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed for group conversations if the previous message was from another user.
     *
     * @param message Current message where to show the user info.
     * @param prevMessage Previous message.
     * @return Whether user data should be shown.
     */
    showUserData(message, prevMessage) {
        return this.isGroup && message.useridfrom != this.currentUserId && this.members[(message.useridfrom || 0)] &&
            (!prevMessage || prevMessage.useridfrom != message.useridfrom || !!message.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param message Current message where to show the user info.
     * @param nextMessage Next message.
     * @return Whether user data should be shown.
     */
    showTail(message, nextMessage) {
        return !nextMessage || nextMessage.useridfrom != message.useridfrom || !!nextMessage.showDate;
    }
    /**
     * View info. If it's an individual conversation, go to the user profile.
     * If it's a group conversation, view info about the group.
     */
    viewInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGroup) {
                // Display the group information.
                const userId = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                    component: _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_21__["AddonMessagesConversationInfoComponent"],
                    componentProps: {
                        conversationId: this.conversationId,
                    },
                });
                if (userId !== undefined) {
                    const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].isCurrentPathInTablet('**/messages/**/discussion');
                    // Open user conversation.
                    if (splitViewLoaded) {
                        // Notify the left pane to load it, this way the right conversation will be highlighted.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].OPEN_CONVERSATION_EVENT, { userId }, this.siteId);
                    }
                    else {
                        // Open the discussion in a new view.
                        _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].navigateToSitePath('/messages/discussion', { params: { userId } });
                    }
                }
            }
            else {
                // Open the user profile.
                _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].navigateToSitePath('/user/profile', { params: { userId: this.userId } });
            }
        });
    }
    /**
     * Change the favourite state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeFavourite(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.favouriteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].setFavouriteConversation(this.conversation.id, !this.conversation.isfavourite);
                this.conversation.isfavourite = !this.conversation.isfavourite;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'favourite',
                    value: this.conversation.isfavourite,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing favourite state.');
            }
            finally {
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                done && done();
            }
        });
    }
    /**
     * Change the mute state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeMute(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.muteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].muteConversation(this.conversation.id, !this.conversation.ismuted);
                this.conversation.ismuted = !this.conversation.ismuted;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'mute',
                    value: this.conversation.ismuted,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing muted state.');
            }
            finally {
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                done && done();
            }
        });
    }
    /**
     * Calculate whether there are pending contact requests.
     */
    setContactRequestInfo() {
        var _a, _b;
        this.requestContactSent = false;
        this.requestContactReceived = false;
        if (this.otherMember && !this.otherMember.iscontact) {
            this.requestContactSent = !!((_a = this.otherMember.contactrequests) === null || _a === void 0 ? void 0 : _a.some((request) => request.userid == this.currentUserId && request.requesteduserid == this.otherMember.id));
            this.requestContactReceived = !!((_b = this.otherMember.contactrequests) === null || _b === void 0 ? void 0 : _b.some((request) => request.userid == this.otherMember.id && request.requesteduserid == this.currentUserId));
        }
    }
    /**
     * Calculate what to display in the footer.
     */
    setFooterType() {
        if (!this.otherMember) {
            // Group conversation or group messaging not available.
            this.footerType = 'message';
        }
        else if (this.otherMember.isblocked) {
            this.footerType = 'blocked';
        }
        else if (this.requestContactReceived) {
            this.footerType = 'requestReceived';
        }
        else if (this.otherMember.canmessage) {
            this.footerType = 'message';
        }
        else if (this.requestContactSent) {
            this.footerType = 'requestSent';
        }
        else if (this.otherMember.requirescontact) {
            this.footerType = 'requiresContact';
        }
        else {
            this.footerType = 'unable';
        }
    }
    /**
     * Displays a confirmation modal to block the user of the individual conversation.
     *
     * @return Promise resolved when user is blocked or dialog is cancelled.
     */
    blockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be blocked.');
            }
            if (this.otherMember.canmessageevenifblocked) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.cantblockuser', { $a: this.otherMember.fullname }));
                return;
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.blockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.blockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].blockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Delete the conversation.
     *
     * @param done Function to call when done.
     */
    deleteConversation(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            const confirmMessage = 'addon.messages.' + (this.isSelf ? 'deleteallselfconfirm' : 'deleteallconfirm');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm(confirmMessage);
                this.deleteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteConversation(this.conversation.id);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                            conversationId: this.conversation.id,
                            action: 'delete',
                        }, this.siteId);
                        this.messages = [];
                    }
                    finally {
                        done && done();
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting conversation.');
                }
                finally {
                    this.deleteIcon = 'fas-trash';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to unblock the user of the individual conversation.
     *
     * @return Promise resolved when user is unblocked or dialog is cancelled.
     */
    unblockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be unblocked.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.unblockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.unblockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].unblockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to send a contact request to the other user of the individual conversation.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    createContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be requested.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.addcontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('core.add');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].createContactRequest(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Confirms the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    confirmContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be confirmed.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].confirmContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Declines the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    declineContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be declined.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].declineContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Displays a confirmation modal to remove the other user of the conversation from contacts.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    removeContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be removed.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.removecontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('core.remove');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_22__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].removeContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        // Unset again, just in case.
        this.unsetPolling();
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.memberInfoObserver) === null || _b === void 0 ? void 0 : _b.off();
        this.viewDestroyed = true;
    }
};
AddonMessagesDiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonMessagesDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__["CoreInfiniteLoadingComponent"],] }]
};
AddonMessagesDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/messages/pages/discussion/discussion.scss")).default]
    })
], AddonMessagesDiscussionPage);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.scss":
/*!**************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\nion-content {\n  --content-background: var(--background-alternative);\n  --background: var(--content-background);\n}\nion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n.addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px !important;\n  background: var(--content-background);\n}\n.addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-messages-unreadfrom {\n  color: var(--primary);\n  background-color: transparent;\n  margin-top: 6px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host .addon-messages-unreadfrom ion-icon {\n  color: var(--primary);\n  background-color: transparent;\n}\n:host .has-fab .scroll-content {\n  padding-bottom: 0;\n}\n:host ion-fab .core-discussion-messages-badge {\n  position: absolute;\n  color: var(--addon-messages-discussion-badge-text);\n  background-color: var(--addon-messages-discussion-badge);\n  display: block;\n  right: 0;\n  top: 0;\n}\n:host-context([dir=rtl]) ion-fab .core-discussion-messages-badge {\n  left: unset;\n  right: unset;\n  left: 0;\n}\n:host ion-header ion-toolbar ion-title {\n  padding: 0;\n}\n:host ion-header ion-toolbar ion-title h1 {\n  display: flex;\n  align-items: center;\n  padding: 0;\n}\n:host ion-header ion-toolbar ion-title h1 .core-bar-button-image {\n  margin-right: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar ion-title h1 .core-bar-button-image {\n    margin-right: unset;\n    -webkit-margin-end: 6px;\n    margin-inline-end: 6px;\n  }\n}\n:host ion-header ion-toolbar ion-title h1 core-format-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n:host ion-header ion-toolbar ion-title h1 ion-icon {\n  margin-left: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar ion-title h1 ion-icon {\n    margin-left: unset;\n    -webkit-margin-start: 6px;\n    margin-inline-start: 6px;\n  }\n}\n:host-context(.ios) ion-header ion-toolbar h1 {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvYWRkb25zL21lc3NhZ2VzL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBa0dBOztFQUFBO0FDcEdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM1REk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNtRFI7QUQvQ0E7RUFDSSxtREFBQTtFQUNBLHVDQUFBO0FDa0RKO0FEaERJO0VBQ0ksNEJBQUE7QUNrRFI7QUQ5Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FDaURKO0FEOUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ2lESjtBVDVFQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQWtHQTs7RUFBQTtBQ3BHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FFMURJO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBK0hSO0FBOUhRO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtBQWdJWjtBQTVIRztFQUNLLGlCQUFBO0FBOEhSO0FBM0hJO0VBQ0ksa0JBQUE7RUFDQSxrREFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FBQTtFTndURixRTXZUdUI7RU4yVTNCLE1NM1V3QjtBQThIMUI7QU5tRFc7RUF5SUwsV0FBQTtFQUNBLFlBQUE7RUFFQSxPTTdUdUI7QUFtSTdCO0FBaElJO0VBQ0ksVUFBQTtBQW1JUjtBQWpJUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFtSVo7QUFqSVk7RU51TlIsaUJNdE42QztBQW1JakQ7QU5zRk07RUFDRTtJQUtJLG1CQUFBO0lBS0YsdUJNcE91QztJTnFPdkMsc0JNck91QztFQXlJL0M7QUFDRjtBQXZJWTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF5SWhCO0FBdElZO0VOMk1SLGdCTTFNdUM7QUF3STNDO0FOc0VNO0VBQ0U7SUFFSSxrQkFBQTtJQU1GLHlCTXZOaUM7SU53TmpDLHdCTXhOaUM7RUE4SXpDO0FBQ0Y7QUF4SUk7RUFDSSx1QkFBQTtBQTJJUiIsImZpbGUiOiJzcmMvYWRkb25zL21lc3NhZ2VzL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcblxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXG4gKi9cblxuXG4vLyBTdHJpbmcgVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFN0cmluZyBSZXBsYWNlIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XG5cbiAgQGlmICRpbmRleCB7XG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xuICB9XG5cbiAgQHJldHVybiAkc3RyaW5nO1xufVxuXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XG4gIC8vIGVtcHR5IGFycmF5L2xpc3RcbiAgJHNwbGl0LWFycjogKCk7XG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcbiAgICAvLyBnZXQgdGhlIHN1YnN0cmluZyBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gdGhlIHNlcGFyYXRvclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XG4gICAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRpdGVtKTtcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xuICAgIC8vIGZpbmQgbmV3IGluZGV4IG9mIHNlcGFyYXRvclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICB9XG4gIC8vIGFkZCB0aGUgcmVtYWluaW5nIHN0cmluZyB0byBsaXN0ICh0aGUgbGFzdCBpdGVtKVxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XG5cbiAgQHJldHVybiAkc3BsaXQtYXJyO1xufVxuXG5cbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XG5cbiAgQGlmICRzdGFydC1pbmRleCB7XG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xuICAgICRlbmQtaW5kZXg6IHN0ci1pbmRleCgkcG9zdCwgJGVuZCk7XG5cbiAgICBAaWYgJGVuZC1pbmRleCB7XG4gICAgICBAcmV0dXJuIHN0ci1zbGljZSgkcG9zdCwgMSwgJGVuZC1pbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbnVsbDtcbn1cblxuXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xuICBAaWYgKHR5cGUtb2YoJHN0cmluZykgPT0gc3RyaW5nKSB7XG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcbiAgfVxuXG4gIEByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xuICAkc3BhY2VzOiBzdHItcmVwbGFjZSgkdmFsLCBcIiBcIiwgXCIlMjBcIik7XG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XG4gIEByZXR1cm4gJGVuY29kZWQ7XG59XG5cblxuLy8gQWRkIFJvb3QgU2VsZWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxuLy9cbi8vIEV4YW1wbGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdFwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxuLy9cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLmZpeGVkKVwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2hhZG93XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gYWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsICRhZGRIb3N0U2VsZWN0b3IpIHtcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XG5cbiAgJGxpc3Q6ICgpO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QoIGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBhIGNsYXNzIG9uIHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSk6aG9zdChcIik7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcblxuICAgICAgJG5ldy1lbGVtZW50OiAoKTtcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xuXG4gICAgICBAZWFjaCAkZWxlbWVudCBpbiAkZWxlbWVudHMge1xuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcblxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcblxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QgaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGp1c3QgdGhlIGhvc3RcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0XCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XG4gICAgICAvLyBvciBub3JtYWwgZWxlbWVudCBzbyBhcHBlbmQgYm90aCB0aGUgZGlyIGNoZWNrIGFuZCBob3N0LWNvbnRleHRcbiAgICB9IEBlbHNlIHtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiAkbGlzdDtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xuICovXG5cbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xuICBAaWYgJGFscGhhID09IG51bGwge1xuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcbiAgfVxufVxuXG4vLyBHZXRzIHRoZSBzcGVjaWZpYyBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIHRoZSBuYW1lIGFuZCB2YXJpYXRpb24uIEFscGhhL3JnYiBhcmUgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZilcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XG4gICR2YWx1ZTogbWFwLWdldCgkdmFsdWVzLCAkdmFyaWF0aW9uKTtcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xuXG4gIEBpZiAoJHZhcmlhdGlvbiA9PSBiYXNlKSB7XG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcbiAgfVxuXG4gIEBpZiAoJGFscGhhKSB7XG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xuICAgIEByZXR1cm4gcmdiYSh2YXIoI3skdmFyaWFibGV9LXJnYiwgJHZhbHVlKSwgJGFscGhhKTtcbiAgfVxuICBAaWYgKCRyZ2IpIHtcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xuICB9XG5cbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XG59XG5cbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG5cbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1MgZnJvbSBkaWZmZXJlbnQgY29tcG9uZW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5taXhpbnMuc2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXG4gKi9cblxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICB9XG4gIH1cblxuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcblxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gSXRlbSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBpdGVtLXB1c2gtc3ZnLXVybCgkZmlsbCkge1xuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcblxuICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsIHRydWUpO1xufVxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XG5cbi8qKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcbiAgfVxuXG4gIC8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4gIC8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIC0xMC5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQGZ1bmN0aW9uIGdldC1jb2xvci10aW50LXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogODAlKSB7XG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XG4gIH1cblxuICAvLyBJb25pYyBDb2xvcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXG4gIC8vIGNvbG9ycyBtYXBcblxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcbiAgICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcbiAgICAgICRsaWdodDogbWFwLWdldCgkYmFzZSwgJ2xpZ2h0Jyk7XG5cbiAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkbGlnaHQpO1xuXG4gICAgICBib2R5LmRhcmsge1xuICAgICAgICAgICRkYXJrOiBtYXAtZ2V0KCRiYXNlLCAnZGFyaycpO1xuICAgICAgICAgICRkYXJrOiBtaXgoJGxpZ2h0LCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcbiAgICAgICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGRhcmspO1xuICAgICAgfVxuICB9XG5cbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xuICAgICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xuICAgICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XG4gICAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XG5cbiAgICAgIC0tI3skY29sb3ItbmFtZX06ICN7JGJhc2V9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcblxuICAgICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcblxuICAgICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgICB9XG4gIH1cblxuXG4gQG1peGluIGNvcmUtZm9jdXMoKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XG4gICAgfVxuIH1cblxuIEBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG4gICAgLy8gVGhpY2tlciBvcHRpb246XG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbn1cblxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xuICAgICR0cmFuc2l0aW9uczogKCk7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XG4gICAgfVxuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxuICovXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XG5cbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XG59XG5cbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgbnVsbCwgJHB4ICR0eXBlICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xufVxuXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1peGluIGRhcmttb2RlKCkge1xuICAgICRyb290OiAjeyZ9O1xuXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJib2R5LmRhcmtcIil9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDb2xvciBtaXhpbnMuXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XG59XG5cbi8vIEdldCB0aGUgYmV0dGVyIGNvbG9yIGNvbnRyYXN0IHVzaW5nIFdDQUcgYWxnb3J5dGhtLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xuXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAwLlxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XG5cbiAgICBAcmV0dXJuIGlmKCR3aGl0ZUNvbnRyYXN0IDwgJGJsYWNrQ29udHJhc3QsIHdoaXRlLCBibGFjayk7XG59XG5cbi8vIENvbG9yIGNvbnRyYXN0IHVzaW5nIHlpcSBhcHJveGltYXRpb24gd2l0aCAxNTAgdGhyZXNob2xkLlxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcbiAgICAkcjogcmVkKCRjb2xvcik7XG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcblxuICAgICR5aXE6ICgoJHIgKiAyOTkpICsgKCRnICogNTg3KSArICgkYiAqIDExNCkpIC8gMTAwMDtcblxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xufVxuXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yeXRobVxuQGZ1bmN0aW9uIGNoZWNrLWNvbnRyYXN0KCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XG5cbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XG4gICAgfVxufVxuXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xuICAgICRyOiByZWQoJGNvbG9yKTtcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xuXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcbiAgICAkYjogY29tcG9uZW50LWx1bWluYW5jZSgkYik7XG5cbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcbn1cblxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLyAyNTU7XG5cbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XG4gICAgICAgIEByZXR1cm4gJHZhbHVlIC8gMTIuOTI7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXG4gKi9cbiIsIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogICAgI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICAgICM4Zjk1OWUgIWRlZmF1bHQ7IC8vIFN0cm9rZSBvbiBpbnB1dHNcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogICAgIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXG5cbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXG4kZ3JlZW46ICAgICAgICMzNTdhMzIgIWRlZmF1bHQ7XG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG5cbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcblxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3IpICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxuICAgIHNlY29uZGFyeTogKGxpZ2h0OiAkc2Vjb25kYXJ5LCBkYXJrOiAkZ3JheS03MDApLFxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxuICAgIGRhbmdlcjogIChsaWdodDogJGRhbmdlciksXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXG4gICAgbWVkaXVtOiAobGlnaHQ6ICRtZWRpdW0sIGRhcms6ICRncmF5LTIwMCksXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcbikgIWRlZmF1bHQ7XG5cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cblxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJHNjcmVlbi1icmVha3BvaW50czogKFxuICAgIHhzOiAwLFxuICAgIHNtOiA1NzZweCxcbiAgICBtZDogNzY4cHgsXG4gICAgbGc6IDk5MnB4LFxuICAgIHRhYmxldDogOTkycHgsXG4gICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XG4kY29yZS10ZXh0LWhpZ2h0bGlnaHQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcblxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWRhc2hib2FyZC1sb2dvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1zZWN0aW9uLXNlbGVjdG9yOiBmYWxzZSAhZGVmYXVsdDtcblxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLXRodW1iLW9uLWNhcmRzLWJhY2tncm91bmQ6IG51bGwgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbG9naW4gcGFnZS5cbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvcjogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1oaWRlLW5lZWQtaGVscDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLiAoZGVwcmVjYXRlZCBvbiA0LjApXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXG4kY29yZS11c2VyLWhpZGUtc2l0ZWluZm86ICRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbyAhZGVmYXVsdDtcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xuXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXG4gICAgYWRtaW5pc3RyYXRpb246ICM1ZDYzZjYsXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxuICAgIGNvbW11bmljYXRpb246ICMxMWE2NzYsXG4gICAgY29udGVudDogIzM5OWJlMixcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcbikgIWRlZmF1bHQ7XG5cbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxuICAgIGNhdGVnb3J5OiAjOGUyNGFhLFxuICAgIGNvdXJzZTogJHJlZCxcbiAgICBncm91cDogJHllbGxvdyxcbiAgICB1c2VyOiAkYmx1ZSxcbiAgICBzaXRlOiAkZ3JlZW5cbikgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHMuc2Nzc1wiO1xuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XG5cbiAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xufVxuXG4uYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cbiIsIkBpbXBvcnQgXCJ+dGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3NcIjtcbkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFscy5zY3NzXCI7XG5cbjpob3N0IHtcblxuICAgIC5hZGRvbi1tZXNzYWdlcy11bnJlYWRmcm9tIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgLmhhcy1mYWIgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgaW9uLWZhYiAuY29yZS1kaXNjdXNzaW9uLW1lc3NhZ2VzLWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1iYWRnZS10ZXh0KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1iYWRnZSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCBudWxsLCBudWxsKTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAuY29yZS1iYXItYnV0dG9uLWltYWdlIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCA2cHgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3JlLWZvcm1hdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCg2cHgsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.module.ts":
/*!********************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.module.ts ***!
  \********************************************************************/
/*! exports provided: AddonForumDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonForumDiscussionPageModule", function() { return AddonForumDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/mod/forum/components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/mod/forum/pages/discussion/discussion.page.ts");
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
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    }];
let AddonForumDiscussionPageModule = class AddonForumDiscussionPageModule {
};
AddonForumDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__["AddonModForumComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        ],
    })
], AddonForumDiscussionPageModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.page.ts":
/*!******************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.page.ts ***!
  \******************************************************************/
/*! exports provided: AddonModForumDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPage", function() { return AddonModForumDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _features_rating_services_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/rating/services/rating */ "./src/core/features/rating/services/rating.ts");
/* harmony import */ var _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/rating/services/rating-offline */ "./src/core/features/rating/services/rating-offline.ts");
/* harmony import */ var _features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/rating/services/rating-sync */ "./src/core/features/rating/services/rating-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_array__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/array */ "./src/core/singletons/array.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../classes/forum-discussions-source */ "./src/addons/mod/forum/classes/forum-discussions-source.ts");
/* harmony import */ var _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../classes/forum-discussions-swipe-manager */ "./src/addons/mod/forum/classes/forum-discussions-swipe-manager.ts");
/* harmony import */ var _services_forum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/forum */ "./src/addons/mod/forum/services/forum.ts");
/* harmony import */ var _services_forum_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/forum-helper */ "./src/addons/mod/forum/services/forum-helper.ts");
/* harmony import */ var _services_forum_offline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/forum-offline */ "./src/addons/mod/forum/services/forum-offline.ts");
/* harmony import */ var _services_forum_sync__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../services/forum-sync */ "./src/addons/mod/forum/services/forum-sync.ts");
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
 * Page that displays a forum discussion.
 */
let AddonModForumDiscussionPage = class AddonModForumDiscussionPage {
    constructor(splitView, elementRef, route) {
        this.splitView = splitView;
        this.elementRef = elementRef;
        this.route = route;
        this.forum = {};
        this.accessInfo = {};
        this.posts = [];
        this.discussionLoaded = false;
        this.sort = 'nested';
        this.formData = {
            replyingTo: 0,
            isEditing: false,
            subject: '',
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.originalData = {
            subject: null,
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.discussionStr = '';
        this.component = _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].COMPONENT;
        this.canPin = false;
        this.availabilityMessage = null;
        this.showQAMessage = false;
        this.leavingPage = false;
        this.hasOfflineRatings = false;
    }
    get isMobile() {
        return _services_screen__WEBPACK_IMPORTED_MODULE_14__["CoreScreen"].isMobile;
    }
    ngOnInit() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const routeData = this.route.snapshot.data;
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('cmId');
                this.forumId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('forumId');
                this.discussion = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteParam('discussion');
                this.discussionId = this.discussion
                    ? this.discussion.discussion
                    : _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRequiredRouteNumberParam('discussionId');
                this.trackPosts = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteBooleanParam('trackPosts') || false;
                this.postId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('postId');
                this.parent = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('parent');
                if (this.courseId && this.cmId && ((_a = routeData.swipeEnabled) !== null && _a !== void 0 ? _a : true)) {
                    this.discussions = new AddonModForumDiscussionDiscussionsSwipeManager(_classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_4__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__["AddonModForumDiscussionsSource"], [this.courseId, this.cmId, (_b = routeData.discussionsPathPrefix) !== null && _b !== void 0 ? _b : '']));
                    yield this.discussions.start();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
                this.goBack();
                return;
            }
            this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].isOnline();
            this.externalUrl = (_c = _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSite()) === null || _c === void 0 ? void 0 : _c.createSiteUrl('/mod/forum/discuss.php', { d: this.discussionId.toString() });
            this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                _singletons__WEBPACK_IMPORTED_MODULE_18__["NgZone"].run(() => {
                    this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].isOnline();
                });
            });
            this.discussionStr = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.mod_forum.discussion');
        });
    }
    /**
     * View loaded.
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sort = this.parent
                ? 'nested' // Force nested order.
                : yield this.getUserSort();
            yield this.fetchPosts(true, false, true);
            const scrollTo = this.postId || this.parent;
            if (scrollTo) {
                // Scroll to the post.
                _singletons_dom__WEBPACK_IMPORTED_MODULE_20__["CoreDom"].scrollToElement(this.elementRef.nativeElement, '#addon-mod_forum-post-' + scrollTo);
            }
        });
    }
    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.syncObserver) {
                // Already setup.
                return;
            }
            // The discussion object was not passed as parameter.
            if (!this.discussion) {
                yield this.loadDiscussion(this.discussionId, this.forumId, this.cmId);
            }
            const discussion = this.discussion;
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSyncProvider"].AUTO_SYNCED, data => {
                if (data.forumId == this.forumId && this.discussionId == data.discussionId
                    && data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
            // Refresh data if this forum discussion is synchronized from discussions list.
            this.syncManualObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSyncProvider"].MANUAL_SYNCED, data => {
                if (data.source != 'discussion' && data.forumId == this.forumId &&
                    data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
            // Invalidate discussion list if it was not read.
            if (this.forumId && discussion && discussion.numunread > 0) {
                _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateDiscussionsList(this.forumId);
            }
            // Listen for offline ratings saved and synced.
            this.ratingOfflineObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_features_rating_services_rating__WEBPACK_IMPORTED_MODULE_7__["CoreRatingProvider"].RATING_SAVED_EVENT, (data) => {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = true;
                }
            });
            this.ratingSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_9__["CoreRatingSyncProvider"].SYNCED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = false;
                }
            }));
            this.changeDiscObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data => {
                if (discussion && this.forumId && (this.forumId === data.forumId || data.cmId === this.cmId)) {
                    _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateDiscussionsList(this.forumId).finally(() => {
                        var _a;
                        if (data.locked !== undefined) {
                            discussion.locked = data.locked;
                        }
                        if (data.pinned !== undefined) {
                            discussion.pinned = data.pinned;
                        }
                        if (data.starred !== undefined) {
                            discussion.starred = data.starred;
                        }
                        if (data.deleted !== undefined && data.deleted) {
                            if (!((_a = data.post) === null || _a === void 0 ? void 0 : _a.parentid)) {
                                this.goBack();
                            }
                            else {
                                this.discussionLoaded = false;
                                this.refreshPosts();
                            }
                        }
                    });
                }
            });
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].hasPostDataChanged(this.formData, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_6__["CoreFileUploader"].clearTmpFiles(this.formData.files);
            this.leavingPage = true;
            return true;
        });
    }
    /**
     * Helper function to go back.
     */
    goBack() {
        var _a;
        if (this.leavingPage) {
            return;
        }
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigate('../');
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].back();
        }
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
        this.ratingOfflineObserver && this.ratingOfflineObserver.off();
        this.ratingSyncObserver && this.ratingSyncObserver.off();
        this.changeDiscObserver && this.changeDiscObserver.off();
        delete this.syncObserver;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
        this.discussions && this.discussions.destroy();
    }
    /**
     * Get sort type configured by the current user.
     *
     * @return Promise resolved with the sort type.
     */
    getUserSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const value = yield _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getRequiredCurrentSite().getLocalSiteConfig('AddonModForumDiscussionSort');
                return value;
            }
            catch (error) {
                try {
                    const value = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_10__["CoreUser"].getUserPreference('forum_displaymode');
                    switch (Number(value)) {
                        case 1:
                            return 'flat-oldest';
                        case -1:
                            return 'flat-newest';
                        case 3:
                            return 'nested';
                        case 2: // Threaded not implemented.
                        default:
                        // Not set, use default sort.
                        // @TODO add fallback to $CFG->forum_displaymode.
                    }
                }
                catch (error) {
                    // Ignore errors.
                }
            }
            return 'flat-oldest';
        });
    }
    /**
     * Convenience function to get the forum.
     *
     * @return Promise resolved with the forum.
     */
    fetchForum() {
        if (this.courseId && this.cmId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].getForum(this.courseId, this.cmId);
        }
        if (this.courseId && this.forumId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].getForumById(this.courseId, this.forumId);
        }
        throw new Error('Cannot get the forum');
    }
    /**
     * Convenience function to get the posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @param forceMarkAsRead Whether to mark all posts as read.
     * @return Promise resolved when done.
     */
    fetchPosts(sync, showErrors, forceMarkAsRead) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onlinePosts = [];
            const offlineReplies = [];
            let hasUnreadPosts = false;
            try {
                if (sync) {
                    // Try to synchronize the forum.
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].ignoreErrors(this.syncDiscussion(!!showErrors));
                }
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].getDiscussionPosts(this.discussionId, { cmId: this.cmId });
                const replies = yield _services_forum_offline__WEBPACK_IMPORTED_MODULE_26__["AddonModForumOffline"].getDiscussionReplies(this.discussionId);
                this.ratingInfo = response.ratinginfo;
                onlinePosts = response.posts;
                this.courseId = response.courseid || this.courseId;
                this.forumId = response.forumid || this.forumId;
                // Check if there are responses stored in offline.
                this.postHasOffline = !!replies.length;
                const convertPromises = [];
                // Index posts to allow quick access. Also check unread field.
                const onlinePostsMap = {};
                onlinePosts.forEach((post) => {
                    onlinePostsMap[post.id] = post;
                    hasUnreadPosts = hasUnreadPosts || !!post.unread;
                });
                replies.forEach((offlineReply) => {
                    // If we don't have forumId and courseId, get it from the post.
                    if (!this.forumId) {
                        this.forumId = offlineReply.forumid;
                    }
                    if (!this.courseId) {
                        this.courseId = offlineReply.courseid;
                    }
                    convertPromises.push(_services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].instance
                        .convertOfflineReplyToOnline(offlineReply)
                        .then((reply) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        offlineReplies.push(reply);
                        // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                        reply.parentid && (onlinePostsMap[reply.parentid].capabilities.reply = false);
                        return;
                    })));
                });
                yield Promise.all(convertPromises);
                // Convert back to array.
                onlinePosts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].objectToArray(onlinePostsMap);
                let posts = offlineReplies.concat(onlinePosts);
                this.startingPost = _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].extractStartingPost(posts);
                // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
                if (this.sort == 'nested') {
                    // Sort first by creation date to make format tree work.
                    _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].sortDiscussionPosts(posts, 'ASC');
                    const rootId = this.startingPost ? this.startingPost.id : (this.discussion ? this.discussion.id : 0);
                    posts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].formatTree(posts, 'parentid', 'id', rootId);
                }
                else {
                    // Set default reply subject.
                    const direction = this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                    _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].sortDiscussionPosts(posts, direction);
                }
                try {
                    // Now try to get the forum.
                    const forum = yield this.fetchForum();
                    // "forum.istracked" is more reliable than "trackPosts".
                    if (forum.istracked !== undefined) {
                        this.trackPosts = forum.istracked;
                    }
                    this.forumId = forum.id;
                    this.cmId = forum.cmid;
                    this.courseId = forum.course;
                    this.forum = forum;
                    this.availabilityMessage = _services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].getAvailabilityMessage(forum);
                    const promises = [];
                    promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].instance
                        .getAccessInformation(this.forumId, { cmId: this.cmId })
                        .then((accessInfo) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.accessInfo = accessInfo;
                        // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                        // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                        if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                            posts.forEach((post) => {
                                post.capabilities.reply = false;
                            });
                        }
                        // Show Q&A message if user hasn't posted.
                        const currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId();
                        this.showQAMessage = forum.type === 'qanda' && !accessInfo.canviewqandawithoutposting &&
                            !posts.some(post => post.author.id === currentUserId);
                        return;
                    })));
                    // The discussion object was not passed as parameter and there is no starting post.
                    if (!this.discussion) {
                        promises.push(this.loadDiscussion(this.discussionId, this.forumId, this.cmId));
                    }
                    yield Promise.all(promises);
                }
                catch (error) {
                    // Ignore errors.
                }
                if (!this.discussion && !this.startingPost) {
                    // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                    throw new Error('Invalid forum discussion.');
                }
                if (this.startingPost && this.startingPost.author && this.forum.type == 'single') {
                    // Hide author and groups for first post and type single.
                    delete this.startingPost.author.fullname;
                    delete this.startingPost.author.groups;
                }
                this.posts = posts;
                this.postSubjects = this.getAllPosts().reduce((postSubjects, post) => {
                    postSubjects[post.id] = post.subject;
                    return postSubjects;
                }, this.startingPost
                    ? { [this.startingPost.id]: this.startingPost.subject }
                    : {});
                if (_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].isSetPinStateAvailableForSite() && this.forumId) {
                    // Use the canAddDiscussion WS to check if the user can pin discussions.
                    try {
                        const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
                        this.canPin = !!response.canpindiscussions;
                    }
                    catch (error) {
                        this.canPin = false;
                    }
                }
                else {
                    this.canPin = false;
                }
                this.hasOfflineRatings =
                    yield _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_8__["CoreRatingOffline"].hasRatings('mod_forum', 'post', "module" /* MODULE */, this.cmId, this.discussionId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.discussionLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_SYNC;
                if (forceMarkAsRead || (hasUnreadPosts && this.trackPosts)) {
                    // Add log in Moodle and mark unread posts as readed.
                    _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].logDiscussionView(this.discussionId, this.forumId || -1, this.forum.name).catch(() => {
                        // Ignore errors.
                    }).finally(() => {
                        if (!this.courseId || !this.cmId) {
                            return;
                        }
                        // Trigger mark read posts.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].MARK_READ_EVENT, {
                            courseId: this.courseId,
                            moduleId: this.cmId,
                        }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                    });
                }
            }
        });
    }
    /**
     * Convenience function to load discussion.
     *
     * @param discussionId Discussion ID.
     * @param forumId Forum ID.
     * @param cmId Forum cmid.
     * @return Promise resolved when done.
     */
    loadDiscussion(discussionId, forumId, cmId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the discussion if not passed as parameter.
            if (this.discussion || !forumId || !cmId) {
                return;
            }
            this.discussion = yield _services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].getDiscussionById(forumId, cmId, discussionId);
            this.discussionId = this.discussion.discussion;
        });
    }
    /**
     * Tries to synchronize the posts discussion.
     *
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    syncDiscussion(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSync"].instance
                .syncDiscussionReplies(this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                if (result && result.updated && this.forumId) {
                    // Sync successful, send event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSyncProvider"].MANUAL_SYNCED, {
                        forumId: this.forumId,
                        userId: _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId(),
                        source: 'discussion',
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                }
                return;
            }));
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSync"].instance
                .syncRatings(this.cmId, this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                return;
            }));
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new Error('Failed syncing discussion');
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors If show errors to the user of hide them.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.discussionLoaded) {
                yield this.refreshPosts(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            }
        });
    }
    /**
     * Refresh posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    refreshPosts(sync, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.content.scrollToTop();
            this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
            const promises = [];
            this.courseId && promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateForumData(this.courseId));
            promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateDiscussionPosts(this.discussionId, this.forumId));
            this.forumId && promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateAccessInformation(this.forumId));
            this.forumId && promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateCanAddDiscussion(this.forumId));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].ignoreErrors(_services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].allPromises(promises));
            yield this.fetchPosts(sync, showErrors);
        });
    }
    /**
     * Function to change posts sorting
     *
     * @param type Sort type.
     * @return Promised resolved when done.
     */
    changeSort(type) {
        this.discussionLoaded = false;
        this.sort = type;
        _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getRequiredCurrentSite().setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
        this.content.scrollToTop();
        return this.fetchPosts();
    }
    /**
     * Lock or unlock the discussion.
     *
     * @param locked True to lock the discussion, false to unlock.
     */
    setLockState(locked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.discussion || !this.forumId || !this.cmId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].setLockState(this.forumId, this.discussionId, locked);
                this.discussion.locked = response.locked;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    locked: this.discussion.locked,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showToast('addon.mod_forum.lockupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Pin or unpin the discussion.
     *
     * @param pinned True to pin the discussion, false to unpin it.
     */
    setPinState(pinned) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.discussion || !this.forumId || !this.cmId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].setPinState(this.discussionId, pinned);
                this.discussion.pinned = pinned;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    pinned: this.discussion.pinned,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showToast('addon.mod_forum.pinupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Star or unstar the discussion.
     *
     * @param starred True to star the discussion, false to unstar it.
     */
    toggleFavouriteState(starred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.discussion || !this.forumId || !this.cmId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].toggleFavouriteState(this.discussionId, starred);
                this.discussion.starred = starred;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    starred: this.discussion.starred,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showToast('addon.mod_forum.favouriteupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * New post added.
     */
    postListChanged() {
        if (!this.forumId || !this.cmId) {
            return;
        }
        // Trigger an event to notify a new reply.
        const data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId,
        };
        _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].REPLY_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
        this.discussionLoaded = false;
        this.refreshPosts().finally(() => {
            this.discussionLoaded = true;
        });
    }
    /**
     * Get all the posts contained in the discussion.
     *
     * @return Array containing all the posts of the discussion.
     */
    getAllPosts() {
        const allPosts = this.posts.map(post => this.flattenPostHierarchy(post));
        return _singletons_array__WEBPACK_IMPORTED_MODULE_19__["CoreArray"].flatten(allPosts);
    }
    /**
     * Flatten a post's hierarchy into an array.
     *
     * @param parent Parent post.
     * @return Array containing all the posts within the hierarchy (including the parent).
     */
    flattenPostHierarchy(parent) {
        const posts = [parent];
        const children = parent.children || [];
        for (const child of children) {
            posts.push(...this.flattenPostHierarchy(child));
        }
        return posts;
    }
};
AddonModForumDiscussionPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddonModForumDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"],] }]
};
AddonModForumDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-forum-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/mod/forum/pages/discussion/discussion.scss")).default]
    })
], AddonModForumDiscussionPage);

/**
 * Helper to manage swiping within a collection of discussions.
 */
class AddonModForumDiscussionDiscussionsSwipeManager extends _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_23__["AddonModForumDiscussionsSwipeManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return this.getSource().DISCUSSIONS_PATH_PREFIX + route.params.discussionId;
    }
}


/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.scss":
/*!***************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-forum-reply-button .label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksU0FBQTtBQURSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gICAgLmFkZG9uLWZvcnVtLXJlcGx5LWJ1dHRvbiAubGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG59XG4iXX0= */");

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
//# sourceMappingURL=pages-discussion-discussion-module.js.map