/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, by, element} from "protractor";
import { LoginData } from "../feed/test_data"
import { NavbarComponent } from "../components/NavbarComponent/NavbarComponent.po";
import { LoginComponent } from "../components/LoginComponent/LoginComponent.po";
import {SubjectsComponent} from "../components/SubjectsComponent/SubjectsComponent.po";

describe('Dziennik Lekcyjny SubjectsComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();
  let subjectsComponent = SubjectsComponent.buildSubjectsComponent();
  let ALL_ROWS = element.all(by.id('subjects_row'));

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

  it('Adding and deleting functionality', () => {
    navbarComponent.clickSubjectsButton();
    subjectsComponent.waitForAddSubjectButton();
    subjectsComponent.waitForSubjectsRow();
    expect(ALL_ROWS.count()).toEqual(1, 'Number of rows before adding');
    subjectsComponent.clickAddSubjectButton();
    subjectsComponent.typeInSubjectField('test-subject');
    subjectsComponent.typeInLecturerField('');
    subjectsComponent.clickAddButton();
    expect(ALL_ROWS.count()).toEqual(2, 'Number of rows after adding');
    subjectsComponent.clickDeleteButton();
    expect(ALL_ROWS.count()).toEqual(1, 'Number of rows after deleting');
  });

  it('Edit element functionality', () => {
    navbarComponent.clickSubjectsButton();
    subjectsComponent.waitForAddSubjectButton();
    subjectsComponent.waitForSubjectsRow();
    expect(subjectsComponent.getLecturerContent()).toEqual('');
    subjectsComponent.clickEditButton();
    subjectsComponent.editLecturerField('edited');
    subjectsComponent.clickEditSubmitButton();
    expect(subjectsComponent.getLecturerContent()).toEqual('edited');
    subjectsComponent.clickEditButton();
    subjectsComponent.clearLecturerField();
    subjectsComponent.editLecturerField(' ');
    subjectsComponent.clickEditSubmitButton();
    subjectsComponent.waitForSubjectsRow();
  });
});
