/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { browser } from "protractor";
import { LoginData } from "../feed/test_data"
import { NavbarComponent } from "../components/NavbarComponent/NavbarComponent.po";
import { LoginComponent } from "../components/LoginComponent/LoginComponent.po";
import { SettingsComponent } from "../components/SettingsComponent/SettingsComponent.po";

describe('Dziennik Lekcyjny SubjectsComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();
  let settingsComponent = SettingsComponent.buildSettingsComponent();

  beforeEach(() => {
    browser.get(browser.baseUrl);
    navbarComponent.waitForElementToBeVisible();
    navbarComponent.clickLoginButton();
    loginComponent.typeInEmailField(LoginData.correct_admin_login);
    loginComponent.typeInPasswordField(LoginData.correct_admin_password);
    loginComponent.clickSubmitButton();
    navbarComponent.waitForLogoutButton();
    navbarComponent.waitForScheduleButton();
  });

  afterEach(() => {
    navbarComponent.clickLogoutButton();
    navbarComponent.waitForLoginButton();
  });

  //it('SubjectsComponent table presence', () => {
  //  expect(LOGIN_BUTTON.isPresent()).toBe(true);
  //  LOGIN_BUTTON.click();
  //  expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
  //  EMAIL_FIELD.sendKeys(LoginData.correct_login);
  //  PASSWORD_FIELD.sendKeys(LoginData.correct_password);
  //  expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
  //  LOGIN_FORM_BUTTON.click();
  //  browser.sleep(2000);
  //  browser.wait(until.presenceOf(SUBJECTS_BUTTON), 5000, 'student dropdown not available');
  //  SUBJECTS_BUTTON.click();
  //  browser.wait(until.presenceOf(SUBJECTS_TABLE), 5000, 'subjects table not available');
  //});
  //
  //it('SubjectsComponent adding  functionality presence', () => {
  //  browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
  //  LOGIN_BUTTON.click();
  //  expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
  //  EMAIL_FIELD.sendKeys(LoginData.correct_login);
  //  PASSWORD_FIELD.sendKeys(LoginData.correct_password);
  //  expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
  //  LOGIN_FORM_BUTTON.click();
  //  browser.sleep(2000);
  //  browser.wait(until.presenceOf(SUBJECTS_BUTTON), 5000, 'subjects button not available');
  //  SUBJECTS_BUTTON.click();
  //  browser.wait(until.presenceOf(SUBJECTS_ADD_BUTTON), 5000, 'add button not available');
  //  SUBJECTS_ADD_BUTTON.click();
  //});


});
