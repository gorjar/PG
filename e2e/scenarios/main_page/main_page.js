/*
 * Copyright 2017 GMO. All Rights Reserved
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
fdescribe('dziennik-lekcyjny Login', function () {
    beforeEach(function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
    });
    fit('User ', function () {
        var login_button = protractor_1.element(protractor_1.by.css('#login_button'));
        expect(login_button.isPresent()).toBe(true, "Display Login Button");
        login_button.click();
        protractor_1.browser.getAllWindowHandles().then(function (handles) {
            protractor_1.browser.switchTo().window(handles[1]).then(function () {
                var login_field = protractor_1.element(protractor_1.by.css('#Email'));
                expect(login_field.isPresent()).toBe(true, "ggg");
                login_field.sendKeys("gala@desmart.com");
                login_field.submit();
                protractor_1.browser.sleep(1000);
                var password = protractor_1.element(protractor_1.by.css('#Passwd'));
                expect(password.isPresent()).toBe(true, "hhh");
                password.sendKeys("maciek1234");
                password.submit();
                protractor_1.browser.sleep(2000);
            });
        });
    });
});
