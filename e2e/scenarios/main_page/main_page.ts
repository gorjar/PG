/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {browser, element, by} from "protractor";
import {LoginData} from "../../feed/test_data"

fdescribe('dziennik-lekcyjny Login', () => {

    beforeEach(() => {
        browser.get(browser.baseUrl);
    });

    fit('User ', () => {
        let login_button = element(by.css('#login_button'));

        expect(login_button.isPresent()).toBe(true, "Display Login Button");
        login_button.click();

        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                let login_field = element(by.css('#Email'));
                expect(login_field.isPresent()).toBe(true, "ggg");
                login_field.sendKeys(LoginData.correct_login);
                login_field.submit();
                browser.sleep(1000);

                let password = element(by.css('#Passwd'));
                expect(password.isPresent()).toBe(true, "hhh");
                password.sendKeys(LoginData.correct_password);
                password.submit();
                browser.sleep(5000);
            });
        });
    });
});
