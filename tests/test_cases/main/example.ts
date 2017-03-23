/**
 * Created by Maciej Galka on 12.03.2017.
 */

import {browser, element, by} from 'protractor';


describe('angularjs homepage todo list', function() {

    beforeEach(() => {
        browser.get('C:/Users/Maciej Galka/Desktop/DziennikOnline/GMO/templates/mainView/main.html');
    });
    it('should add a todo', function() {
        let logo = element(by.id('login_button'));

        expect(logo.getText()).toEqual('Login');
    });
});
