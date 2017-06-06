/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../feed/test_data"

describe('Dziennik Lekcyjny Main Page', () => {

    let LOGIN_BUTTON = element(by.id('login'));
    let LOGOUT_BUTTON = element(by.id('logout'));
    let EMAIL_FIELD = element(by.id('email'));
    let LOGIN_FORM_BUTTON = element(by.id('login_form'));
    let REGISTER_BUTTON = element(by.id('register'));
    let PASSWORD_FIELD = element(by.id('password'));
    let STUDENTS_BUTTON = element(by.id('students'));
    let SUBJECTS_BUTTON = element(by.id('subjects'));
    let SCHEDULE_BUTTON = element(by.id('schedule'));
    let SETTINGS_BUTTON = element(by.id('settings'));
    let ABOUT_BUTTON = element(by.id('about'));
    let ADD_BUTTON = element(by.id('add-button'));
    let ADD_SUBMIT = element(by.id('add-submit'));
    let SUBJECTS_ADD_BUTTON = element(by.id('add-subject-button'));
    let STUDENTS_TABLE = element(by.id('students_table'));
    let SUBJECTS_TABLE = element(by.id('subjects_table'));
    let SCHEDULE_TABLE = element(by.id('schedule_table'));
    let SETTINGS_TABLE = element(by.id('settings_table'));
    let ADD_DATE_FIELD = element(by.id('add-date'));
    let ADD_DURATION_FIELD = element(by.id('add-duration'));
    let ADD_LECTURER_FIELD = element(by.id('add-lecturer'));
    let ADD_ROOM_FIELD = element(by.id('add-room'));
    let ADD_SUBJECT_FIELD = element(by.id('add-subject'));
    let ADD_TIME_FIELD = element(by.id('add-time'));
    let ADD_TYPE_FIELD = element(by.id('add-type'));


    let until = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.get(browser.baseUrl);
    });

    it('Verify that all menu components are displayed after successfull login', () => {
      expect(LOGIN_BUTTON.isPresent()).toBe(true);
      LOGIN_BUTTON.click();
      expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
      EMAIL_FIELD.sendKeys(LoginData.correct_login);
      PASSWORD_FIELD.sendKeys(LoginData.correct_password);
      expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
      LOGIN_FORM_BUTTON.click();
      browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'students button not available');
      expect(STUDENTS_BUTTON.isPresent()).toBe(true);
      browser.wait(until.presenceOf(SUBJECTS_BUTTON), 5000, 'subjects button not available');
      expect(SUBJECTS_BUTTON.isPresent()).toBe(true);
      browser.wait(until.presenceOf(SCHEDULE_BUTTON), 5000, 'schedule button not available');
      expect(SCHEDULE_BUTTON.isPresent()).toBe(true);
      browser.wait(until.presenceOf(SETTINGS_BUTTON), 5000, 'settings button not available');
      expect(SETTINGS_BUTTON.isPresent()).toBe(true);
      browser.wait(until.presenceOf(ABOUT_BUTTON), 5000, 'about button not available');
      expect(ABOUT_BUTTON.isPresent()).toBe(true);
    });


  it('ScheduleComponent table presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(SCHEDULE_BUTTON), 5000, 'schedule table not available');
    SCHEDULE_BUTTON.click();
    browser.wait(until.presenceOf(SCHEDULE_TABLE), 5000, 'schedule table not available');
  });

  it('ScheduleComponent adding  functionality presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(SCHEDULE_BUTTON), 5000, 'schedule button not available');
    SCHEDULE_BUTTON.click();
    browser.wait(until.presenceOf(ADD_BUTTON), 5000, 'add button not available');
    ADD_BUTTON.click();
    ADD_DATE_FIELD.sendKeys('2017-04-22');
    ADD_DURATION_FIELD.sendKeys('test-duration');
    ADD_LECTURER_FIELD.sendKeys('test-lecturer');
    ADD_ROOM_FIELD.sendKeys('test-room');
    ADD_SUBJECT_FIELD.sendKeys('test-subject');
    ADD_TIME_FIELD.sendKeys('test-time');
    ADD_TYPE_FIELD.sendKeys('test-type');
    ADD_SUBMIT.click();

  });

  it('SettingsComponent table presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(SETTINGS_BUTTON), 5000, 'settings table not available');
    SETTINGS_BUTTON.click();
    browser.wait(until.presenceOf(SETTINGS_TABLE), 5000, 'settings table not available');
  });

  it('ScheduleComponent adding  functionality presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(SCHEDULE_BUTTON), 5000, 'schedule button not available');
    SCHEDULE_BUTTON.click();
    browser.wait(until.presenceOf(ADD_BUTTON), 5000, 'add button not available');
    ADD_BUTTON.click();
  });

});
