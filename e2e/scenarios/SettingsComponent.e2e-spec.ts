/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { browser } from "protractor";
import { LoginData } from "../feed/test_data"
import { NavbarComponent } from "../components/NavbarComponent/NavbarComponent.po";
import { LoginComponent } from "../components/LoginComponent/LoginComponent.po";
import { SettingsComponent } from "../components/SettingsComponent/SettingsComponent.po";

describe('Dziennik Lekcyjny SettingsComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();
  let settingsComponent = SettingsComponent.buildSettingsComponent();

  beforeEach(() => {
    browser.get(browser.baseUrl);
    navbarComponent.waitForElementToBeVisible();
    navbarComponent.clickLoginButton();
    loginComponent.waitForEmailField();
    loginComponent.typeInEmailField(LoginData.correct_admin_login);
    loginComponent.typeInPasswordField(LoginData.correct_admin_password);
    loginComponent.clickSubmitButton();
    navbarComponent.waitForLogoutButton();
    navbarComponent.waitForScheduleButton();
    browser.sleep(2000);
  });

  afterEach(() => {
    navbarComponent.clickLogoutButton();
    navbarComponent.waitForLoginButton();
  });

  it('Settings component content presence', () => {
    navbarComponent.clickSettingsButton();
    settingsComponent.waitForSettingsTable();
  });

});
