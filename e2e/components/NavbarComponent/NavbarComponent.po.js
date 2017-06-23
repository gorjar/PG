/*
 * Copyright 2017 GMO. All Rights Reserved
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BaseWebControl_1 = require("../base/BaseWebControl");
var NavbarComponent = (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent(rootLocator) {
        var _this = _super.call(this, rootLocator) || this;
        _this.rootLocator = rootLocator;
        _this.LOGOUT_BUTTON = protractor_1.by.id('logout');
        _this.LOGIN_BUTTON = protractor_1.by.id('login');
        _this.SCHEDULE_BUTTON = protractor_1.by.id('schedule');
        _this.STUDENTS_BUTTON = protractor_1.element(protractor_1.by.id('students'));
        _this.SUBJECTS_BUTTON = protractor_1.by.id('subjects');
        _this.SETTINGS_BUTTON = protractor_1.element(protractor_1.by.id('settings'));
        _this.CHAT_BUTTON = protractor_1.by.id('chat');
        _this.ABOUT_BUTTON = protractor_1.by.id('about');
        return _this;
    }
    NavbarComponent.buildNavbarComponent = function () {
        return new NavbarComponent(protractor_1.by.id('navbarComponent'));
    };
    NavbarComponent.prototype.clickLoginButton = function () {
        return this.clickElement(this.LOGIN_BUTTON);
    };
    NavbarComponent.prototype.clickLogoutButton = function () {
        return this.clickElement(this.LOGOUT_BUTTON);
    };
    NavbarComponent.prototype.clickScheduleButton = function () {
        return this.clickElement(this.SCHEDULE_BUTTON);
    };
    NavbarComponent.prototype.clickSubjectsButton = function () {
        return this.clickElement(this.SUBJECTS_BUTTON);
    };
    NavbarComponent.prototype.clickStudentsButton = function () {
        return this.clickElement(protractor_1.by.id('students'));
    };
    NavbarComponent.prototype.clickSettingsButton = function () {
        return this.clickElement(protractor_1.by.id('settings'));
    };
    NavbarComponent.prototype.waitForLoginButton = function () {
        this.waitForElementToBeDisplayedInRootElement(this.LOGIN_BUTTON);
    };
    NavbarComponent.prototype.waitForLogoutButton = function () {
        this.waitForElementToBeDisplayedInRootElement(this.LOGOUT_BUTTON);
    };
    NavbarComponent.prototype.waitForSubjectsButton = function () {
        this.waitForElementToBeDisplayedInRootElement(this.SUBJECTS_BUTTON);
    };
    NavbarComponent.prototype.waitForScheduleButton = function () {
        this.waitForElementToBeDisplayedInRootElement(this.SCHEDULE_BUTTON);
    };
    NavbarComponent.prototype.waitForChatButton = function () {
        this.waitForElementToBeDisplayedInRootElement(this.CHAT_BUTTON);
    };
    NavbarComponent.prototype.waitForAboutButton = function () {
        this.waitForElementToBeDisplayedInRootElement(this.ABOUT_BUTTON);
    };
    NavbarComponent.prototype.checkStudentsButtonPresence = function () {
        return this.STUDENTS_BUTTON.isPresent();
    };
    NavbarComponent.prototype.checkSettingsButtonPresence = function () {
        return this.SETTINGS_BUTTON.isPresent();
    };
    return NavbarComponent;
}(BaseWebControl_1.BaseWebCOntrol));
exports.NavbarComponent = NavbarComponent;
