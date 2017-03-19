/**
 * Created by Maciej Galka on 12.03.2017.
 */
"use strict";
var protractor_1 = require('protractor');
describe('angularjs homepage todo list', function () {
    beforeEach(function () {
        protractor_1.browser.get('C:/Users/Maciej Galka/Desktop/DziennikOnline/GMO/templates/mainView/main.html');
    });
    it('should add a todo', function () {
        var logo = protractor_1.element(protractor_1.by.id('login_button'));
        expect(logo.getText()).toEqual('Login');
    });
});
