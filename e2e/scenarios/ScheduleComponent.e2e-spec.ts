/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { browser, element, by } from "protractor";
import { LoginData } from "../feed/test_data"
import { LoginComponent } from "../components/LoginComponent/LoginComponent.po"
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent.po';
import { ScheduleComponent } from '../components/ScheduleComponent/ScheduleComponent.po';

describe('Dziennik Lekcyjny ScheduleComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();
  let scheduleComponent = ScheduleComponent.buildScheduleComponent();
  let ALL_ROWS = element.all(by.id('schedule_row'));

  beforeEach(() => {
    browser.get(browser.baseUrl);
    navbarComponent.waitForElementToBeVisible();
    navbarComponent.clickLoginButton();
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
      navbarComponent.clickScheduleButton();
      scheduleComponent.waitForAddButton();
      scheduleComponent.waitForScheduleRow();
      expect(ALL_ROWS.count()).toEqual(1, 'Number of rows before adding');
      scheduleComponent.clickAddButton();
      scheduleComponent.typeInDateField('01/01/2018');
      scheduleComponent.typeInDurationField('test-duration');
      scheduleComponent.typeInRoomField('test-room');
      scheduleComponent.typeInSubjectField('test-subject');
      scheduleComponent.typeInTimeField('test-time');
      scheduleComponent.typeInTypeField('test-type');
      scheduleComponent.typeInLecturerField('');
      scheduleComponent.scrollToFormEnd();
      scheduleComponent.clickSubmitButton();
      expect(ALL_ROWS.count()).toEqual(2, 'Number of rows after adding');
      scheduleComponent.clickDeleteButton();
      expect(ALL_ROWS.count()).toEqual(1, 'Number of rows after deleting');
  });

  it('Edit element functionality', () => {
      navbarComponent.clickScheduleButton();
      scheduleComponent.waitForScheduleRow();
      expect(scheduleComponent.getLecturerContent()).toEqual('');
      scheduleComponent.clickEditButton();
      scheduleComponent.editLecturerField('edited');
      scheduleComponent.scrollToFormEnd();
      scheduleComponent.clickEditSubmitButton();
      expect(scheduleComponent.getLecturerContent()).toEqual('edited');
      scheduleComponent.clickEditButton();
      scheduleComponent.clearLecturerField();
      scheduleComponent.editLecturerField(' ');
      scheduleComponent.scrollToFormEnd();
      scheduleComponent.clickEditSubmitButton();
      scheduleComponent.waitForScheduleRow();
  });
});
