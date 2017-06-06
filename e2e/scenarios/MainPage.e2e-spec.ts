/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../feed/test_data"

describe('Dziennik Lekcyjny Main Page', () => {

    let LOGIN_BUTTON = element(by.id('login'));
    let EMAIL_FIELD = element(by.id('email'));
    let LOGIN_FORM_BUTTON = element(by.id('login_form'));
    let PASSWORD_FIELD = element(by.id('password'));
    let STUDENTS_BUTTON = element(by.id('students'));
    let SUBJECTS_BUTTON = element(by.id('subjects'));
    let SCHEDULE_BUTTON = element(by.id('schedule'));
    let SETTINGS_BUTTON = element(by.id('settings'));
    let ABOUT_BUTTON = element(by.id('about'));

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

});
