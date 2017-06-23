/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, by, element} from "protractor";
import { LoginData } from "../feed/test_data"
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent.po';
import { StudentsComponent } from '../components/StudentsComponent/StudentsComponent.po';
import { LoginComponent } from '../components/LoginComponent/LoginComponent.po';

describe('Dziennik Lekcyjny StudentsComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();
  let studentsComponent = StudentsComponent.buildStudentsComponent();
  let ALL_ROWS = element.all(by.id('student_row'));

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
    navbarComponent.clickStudentsButton();
    studentsComponent.waitForAddButton();
    studentsComponent.waitForStudentsRow();
    expect(ALL_ROWS.count()).toEqual(1, 'Number of rows before adding');
    studentsComponent.clickAddButton();
    studentsComponent.typeInNameField('Test Name');
    studentsComponent.typeInLastnameField('Test Lastname');
    studentsComponent.typeInEmailField('');
    studentsComponent.scrollToFormEnd();
    studentsComponent.clickAddStudentButton();
    expect(ALL_ROWS.count()).toEqual(2, 'Number of rows after adding');
    studentsComponent.clickDeleteStudentButton();
    expect(ALL_ROWS.count()).toEqual(1, 'Number of rows after deleting');
  });

  it('Edit element functionality', () => {
    navbarComponent.clickStudentsButton();
    studentsComponent.waitForStudentsRow();
    expect(studentsComponent.getEmailContent()).toEqual('');
    studentsComponent.clickEditButton();
    studentsComponent.editEmailField('edited');
    studentsComponent.scrollToFormEnd();
    studentsComponent.clickEditSubmitButton();
    expect(studentsComponent.getEmailContent()).toEqual('edited');
    studentsComponent.clickEditButton();
    studentsComponent.clearEmailField();
    studentsComponent.editEmailField(' ');
    studentsComponent.scrollToFormEnd();
    studentsComponent.clickEditSubmitButton();
    studentsComponent.waitForStudentsRow();
  });

});
