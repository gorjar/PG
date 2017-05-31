/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../../feed/test_data"

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
    let SUBJECTS_ADD_BUTTON = element(by.id('add-subject-button'));
    let STUDENTS_TABLE = element(by.id('students_table'));
    let SUBJECTS_TABLE = element(by.id('subjects_table'));
    let SCHEDULE_TABLE = element(by.id('schedule_table'));
    let SETTINGS_TABLE = element(by.id('settings_table'));

    let until = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.get(browser.baseUrl);
    });

    it('Should check if user can successfully login to application', () => {
        expect(LOGIN_BUTTON.isPresent()).toBe(true);
        LOGIN_BUTTON.click();
        expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
        EMAIL_FIELD.sendKeys(LoginData.correct_login);
        PASSWORD_FIELD.sendKeys(LoginData.correct_password);
        expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
        LOGIN_FORM_BUTTON.click();
        browser.wait(until.presenceOf(LOGOUT_BUTTON), 5000, 'Taking too long to load element');
        expect(LOGOUT_BUTTON.isPresent()).toBe(true);
    });

    it('Should check if user can successfully log out from application', () => {
      expect(LOGIN_BUTTON.isPresent()).toBe(true);
      LOGIN_BUTTON.click();
      expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
      EMAIL_FIELD.sendKeys(LoginData.correct_login);
      PASSWORD_FIELD.sendKeys(LoginData.correct_password);
      expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
      LOGIN_FORM_BUTTON.click();
      browser.wait(until.presenceOf(LOGOUT_BUTTON), 5000, 'Taking too long to load element');
      expect(LOGOUT_BUTTON.isPresent()).toBe(true);
      LOGOUT_BUTTON.click();
      browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
      expect(LOGIN_BUTTON.isPresent()).toBe(true);
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

  it('StudentsComponent table presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'student button not available');
    STUDENTS_BUTTON.click();
    browser.wait(until.presenceOf(STUDENTS_TABLE), 5000, 'students table not available');
  });

  it('StudentsComponent adding  functionality presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'students button not available');
    STUDENTS_BUTTON.click();
    browser.wait(until.presenceOf(ADD_BUTTON), 5000, 'add button not available');
    ADD_BUTTON.click();
  });

  it('SubjectsComponent table presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(SUBJECTS_BUTTON), 5000, 'student dropdown not available');
    SUBJECTS_BUTTON.click();
    browser.wait(until.presenceOf(SUBJECTS_TABLE), 5000, 'subjects table not available');
  });

  it('SubjectsComponent adding  functionality presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(SUBJECTS_BUTTON), 5000, 'subjects button not available');
    SUBJECTS_BUTTON.click();
    browser.wait(until.presenceOf(SUBJECTS_ADD_BUTTON), 5000, 'add button not available');
    SUBJECTS_ADD_BUTTON.click();
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
