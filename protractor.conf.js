"use strict";
var protractor_1 = require('protractor');
exports.config = {
    framework: 'jasmine2',
    onPrepare: function () {
        // By default, Protractor use data:text/html,<html></html> as resetUrl, but
        // location.replace from the data: to the file: protocol is not allowed
        // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
        // with the file: protocol (this particular one will open system's root folder)
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.waitForAngular();
        protractor_1.browser.resetUrl = 'file:///';
    },
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,
    specs: ['tests/test_cases/main/todo-spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true
};
