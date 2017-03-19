import {Config, browser} from 'protractor';

export let config: Config = {
    framework: 'jasmine2',
    onPrepare: function() {

        // By default, Protractor use data:text/html,<html></html> as resetUrl, but
        // location.replace from the data: to the file: protocol is not allowed
        // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
        // with the file: protocol (this particular one will open system's root folder)
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.resetUrl = 'file:///';
    },
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,
    specs: [ 'tests/test_cases/main/todo-spec.js' ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true
};
