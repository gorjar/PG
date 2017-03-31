/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../../feed/test_data"

describe('Dziennik Lekcyjny Main Page', () => {

    let LOGIN_BUTTON = element(by.id('login_button'));
    let EMAIL_FIELD = element(by.id('Email'));
    let PASSWORD_FIELD = element(by.id('Passwd'));
    let STUDENTS_BUTTON = element(by.id('students'));
    let SUBJECTS_BUTTON = element(by.id('subjects'));
    let SCHEDULE_BUTTON = element(by.id('schedule'));
    let SETTINGS_BUTTON = element(by.id('settings'));
    let ABOUT_BUTTON = element(by.id('about'));

    beforeEach(() => {
        browser.get(browser.baseUrl);
    });

    it('Log-in to application and verify that all elements are displayed ', () => {
        expect(LOGIN_BUTTON.isPresent()).toBe(true);
        LOGIN_BUTTON.click();

        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]).then(function () {
                expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
                EMAIL_FIELD.sendKeys(LoginData.correct_login);
                EMAIL_FIELD.submit();
                browser.wait(protractor.ExpectedConditions.visibilityOf(PASSWORD_FIELD));

                expect(PASSWORD_FIELD.isPresent()).toBe(true, "Display password field");
                PASSWORD_FIELD.sendKeys(LoginData.correct_password);
                PASSWORD_FIELD.submit();
                expect(PASSWORD_FIELD.isPresent()).toBe(false, "Display password field after log-in");
            });
            browser.switchTo().window(handles[0]).then(function () {
                browser.wait(protractor.ExpectedConditions.visibilityOf(STUDENTS_BUTTON));
                expect(SUBJECTS_BUTTON.isPresent()).toBe(true, "Display email field");
                expect(SCHEDULE_BUTTON.isPresent()).toBe(true, "Display email field");
                expect(SETTINGS_BUTTON.isPresent()).toBe(true, "Display email field");
                expect(ABOUT_BUTTON.isPresent()).toBe(true, "Display email field");
            });
        });
    });
});
