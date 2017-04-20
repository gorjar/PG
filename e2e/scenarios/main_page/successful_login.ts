/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../../feed/test_data"

describe('Dziennik Lekcyjny Main Page', () => {

    let LOGIN_BUTTON = element(by.id('signin'));
    let LOGOUT_BUTTON = element(by.id('logout'));
    let EMAIL_FIELD = element(by.id('email'));
    let SIGN_IN_BUTTON = element(by.id('sign-in'));
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




    it('login', () => {
        expect(LOGIN_BUTTON.isPresent()).toBe(true);
        LOGIN_BUTTON.click();
        expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
        EMAIL_FIELD.sendKeys(LoginData.correct_login);
        PASSWORD_FIELD.sendKeys(LoginData.correct_password);
        expect(SIGN_IN_BUTTON.isPresent()).toBe(true);
        SIGN_IN_BUTTON.click();
        //browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'Taking too long to load element');
    });


  it('logout', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(SIGN_IN_BUTTON.isPresent()).toBe(true);
    SIGN_IN_BUTTON.click();
    browser.wait(until.presenceOf(LOGOUT_BUTTON), 5000, 'Taking too long to load element');
    expect(LOGOUT_BUTTON.isPresent()).toBe(true);
    LOGOUT_BUTTON.click();
  });

  it('student component', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(SIGN_IN_BUTTON.isPresent()).toBe(true);
    SIGN_IN_BUTTON.click();
    browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'Taking too long to load element');
    expect(STUDENTS_BUTTON.isPresent()).toBe(true);
  });

  it('subjects component', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(SIGN_IN_BUTTON.isPresent()).toBe(true);
    SIGN_IN_BUTTON.click();
    browser.wait(until.presenceOf(SUBJECTS_BUTTON), 5000, 'Taking too long to load element');
    expect(SUBJECTS_BUTTON.isPresent()).toBe(true);
  });

  it('schedule component', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(SIGN_IN_BUTTON.isPresent()).toBe(true);
    SIGN_IN_BUTTON.click();
    browser.wait(until.presenceOf(SCHEDULE_BUTTON), 5000, 'Taking too long to load element');
    expect(SCHEDULE_BUTTON.isPresent()).toBe(true);
  });

  it('settings component', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(SIGN_IN_BUTTON.isPresent()).toBe(true);
    SIGN_IN_BUTTON.click();
    browser.wait(until.presenceOf(SETTINGS_BUTTON), 5000, 'Taking too long to load element');
    expect(SETTINGS_BUTTON.isPresent()).toBe(true);
  });

  it('about component', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(SIGN_IN_BUTTON.isPresent()).toBe(true);
    SIGN_IN_BUTTON.click();
    browser.wait(until.presenceOf(ABOUT_BUTTON), 5000, 'Taking too long to load element');
    expect(ABOUT_BUTTON.isPresent()).toBe(true);
  });











});
