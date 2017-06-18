/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { by, element } from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class NavbarComponent extends BaseWebCOntrol {

    private LOGOUT_BUTTON = by.id('logout');
    private LOGIN_BUTTON = by.id('login');
    private SCHEDULE_BUTTON = by.id('schedule');
    private STUDENTS_BUTTON = element(by.id('students'));
    private SUBJECTS_BUTTON = by.id('subjects');
    private SETTINGS_BUTTON = element(by.id('settings'));
    private CHAT_BUTTON = by.id('chat');
    private ABOUT_BUTTON = by.id('about');

    constructor(public rootLocator: By) {
        super(rootLocator);
    }

    public static buildNavbarComponent() {
        return new NavbarComponent(by.id('navbarComponent'));
    }

    public clickLoginButton(){
        return this.clickElement(this.LOGIN_BUTTON);
    }

    public clickLogoutButton(){
        return this.clickElement(this.LOGOUT_BUTTON);
    }

    public clickScheduleButton(){
        return this.clickElement(this.SCHEDULE_BUTTON);
    }

    public clickSubjectsButton(){
      return this.clickElement(this.SUBJECTS_BUTTON);
    }

    public clickStudentsButton() {
        return this.clickElement(by.id('students'));
    }

    public clickSettingsButton() {
      return this.clickElement(by.id('settings'));
    }

    public waitForLoginButton(){
        this.waitForElementToBeDisplayedInRootElement(this.LOGIN_BUTTON);
    }

    public waitForLogoutButton(){
        this.waitForElementToBeDisplayedInRootElement(this.LOGOUT_BUTTON);
    }

    public waitForStudentsButton(){
        this.waitForElementToBeDisplayedInRootElement(this.STUDENTS_BUTTON);
    }

    public waitForSubjectsButton(){
        this.waitForElementToBeDisplayedInRootElement(this.SUBJECTS_BUTTON);
    }

    public waitForScheduleButton(){
        this.waitForElementToBeDisplayedInRootElement(this.SCHEDULE_BUTTON);
    }

    public waitForSettingsButton(){
        this.waitForElementToBeDisplayedInRootElement(this.SETTINGS_BUTTON);
    }

    public waitForChatButton(){
        this.waitForElementToBeDisplayedInRootElement(this.CHAT_BUTTON);
    }

    public waitForAboutButton(){
        this.waitForElementToBeDisplayedInRootElement(this.ABOUT_BUTTON);
    }

    public checkStudentsButtonPresence() {
        return this.STUDENTS_BUTTON.isPresent();
    }

    public checkSettingsButtonPresence() {
        return this.SETTINGS_BUTTON.isPresent();
    }

}
