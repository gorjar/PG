/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { browser } from "protractor";
import { LoginData } from "../feed/test_data"
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent.po';
import { StudentsComponent } from '../components/StudentsComponent/StudentsComponent.po';
import { LoginComponent } from '../components/LoginComponent/LoginComponent.po';

describe('Dziennik Lekcyjny StudentsComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();
  let studentsComponent = StudentsComponent.buildStudentsComponent();

  beforeEach(() => {
    browser.get(browser.baseUrl);
    navbarComponent.waitForElementToBeVisible();
    navbarComponent.clickLoginButton();
    loginComponent.typeInEmailField(LoginData.correct_admin_login);
    loginComponent.typeInPasswordField(LoginData.correct_admin_password);
    loginComponent.clickSubmitButton();
    navbarComponent.waitForLogoutButton();
  });

  afterEach(() => {
    navbarComponent.clickLogoutButton();
    navbarComponent.waitForLoginButton();
  });


  it('Adding functionality', () => {
    navbarComponent.waitForStudentsButton();
    navbarComponent.clickStudentsButton();
    studentsComponent.waitForAddButton();
    studentsComponent.waitForScheduleRow();
    studentsComponent.clickAddButton();
    browser.sleep(2000);

  });

});
