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
      browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
      LOGIN_BUTTON.click();
      browser.wait(until.presenceOf(EMAIL_FIELD), 5000, 'email field not available');
      EMAIL_FIELD.sendKeys(LoginData.correct_login);
      PASSWORD_FIELD.sendKeys(LoginData.correct_password);
      browser.wait(until.presenceOf(LOGIN_FORM_BUTTON), 5000, 'login form button not available');
      LOGIN_FORM_BUTTON.click();
      browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'students button not available');
      browser.wait(until.presenceOf(SUBJECTS_BUTTON), 5000, 'subjects button not available');
      browser.wait(until.presenceOf(SCHEDULE_BUTTON), 5000, 'schedule button not available');
      browser.wait(until.presenceOf(SETTINGS_BUTTON), 5000, 'settings button not available');
      browser.wait(until.presenceOf(ABOUT_BUTTON), 5000, 'about button not available');
    });

});
