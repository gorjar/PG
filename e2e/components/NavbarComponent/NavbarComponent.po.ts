import { by } from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class NavbarComponent extends BaseWebCOntrol {

    private LOGOUT_BUTTON = by.id('logout');
    private LOGIN_BUTTON = by.id('login');
    private SCHEDULE_BUTTON = by.id('schedule');
    private STUDENTS_BUTTON = by.id('students');
    private SUBJECTS_BUTTON = by.id('subjects');
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

    public waitForChatButton(){
        this.waitForElementToBeDisplayedInRootElement(this.CHAT_BUTTON);
    }

    public waitForAboutButton(){
        this.waitForElementToBeDisplayedInRootElement(this.ABOUT_BUTTON);
    }

}