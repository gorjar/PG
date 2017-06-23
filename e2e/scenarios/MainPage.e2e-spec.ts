/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { browser } from "protractor";
import { LoginData } from "../feed/test_data"
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent.po';
import { LoginComponent } from '../components/LoginComponent/LoginComponent.po'

describe('Dziennik Lekcyjny Main Page', () => {

    let navbarComponent = NavbarComponent.buildNavbarComponent();
    let loginComponent = LoginComponent.buildLoginComponent();

    beforeEach(() => {
        browser.get(browser.baseUrl);
        navbarComponent.waitForElementToBeVisible();
        navbarComponent.clickLoginButton();
        browser.sleep(2000);
    });

    afterEach(() => {
        navbarComponent.clickLogoutButton();
        navbarComponent.waitForLoginButton();
    });

    it('Verify that all menu components are displayed after successful login for ADMIN', () => {
        loginComponent.waitForEmailField();
        loginComponent.typeInEmailField(LoginData.correct_admin_login);
        loginComponent.typeInPasswordField(LoginData.correct_admin_password);
        loginComponent.clickSubmitButton();
        navbarComponent.waitForLogoutButton();
        navbarComponent.waitForChatButton();
        expect(navbarComponent.checkStudentsButtonPresence()).toBe(true);
        expect(navbarComponent.checkSettingsButtonPresence()).toBe(true);
        navbarComponent.waitForSubjectsButton();
        navbarComponent.waitForAboutButton();
        navbarComponent.waitForScheduleButton();
    });

    it('Verify that all menu components are displayed after successful login for STUDENT', () => {
        loginComponent.waitForEmailField();
        loginComponent.typeInEmailField(LoginData.correct_student_login);
        loginComponent.typeInPasswordField(LoginData.correct_student_password);
        loginComponent.clickSubmitButton();
        navbarComponent.waitForLogoutButton();
        navbarComponent.waitForChatButton();
        expect(navbarComponent.checkStudentsButtonPresence()).not.toBe(true);
        navbarComponent.waitForSubjectsButton();
        navbarComponent.waitForAboutButton();
        expect(navbarComponent.checkSettingsButtonPresence()).not.toBe(true);
        navbarComponent.waitForScheduleButton();
    });

    it('Verify that all menu components are displayed after successful login for LECTURER', () => {
       loginComponent.waitForEmailField();
       loginComponent.typeInEmailField(LoginData.correct_lecturer_login);
       loginComponent.typeInPasswordField(LoginData.correct_lecturer_password);
       loginComponent.clickSubmitButton();
       navbarComponent.waitForLogoutButton();
       navbarComponent.waitForChatButton();
       expect(navbarComponent.checkStudentsButtonPresence()).toBe(true);
       navbarComponent.waitForSubjectsButton();
       navbarComponent.waitForAboutButton();
       expect(navbarComponent.checkSettingsButtonPresence()).not.toBe(true);
       navbarComponent.waitForScheduleButton();
    });
});
