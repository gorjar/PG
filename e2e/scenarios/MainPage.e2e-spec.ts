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
        loginComponent.typeInEmailField(LoginData.correct_login);
        loginComponent.typeInPasswordField(LoginData.correct_password);
        loginComponent.clickSubmitButton();
        navbarComponent.waitForLogoutButton();
    });

    afterEach(() => {
        navbarComponent.clickLogoutButton();
        navbarComponent.waitForLoginButton();
    });

    it('Verify that all menu components are displayed after successfull login', () => {
        navbarComponent.waitForChatButton();
        navbarComponent.waitForStudentsButton();
        navbarComponent.waitForSubjectsButton();
        navbarComponent.waitForAboutButton();
    });
});
