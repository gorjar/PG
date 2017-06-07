// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:4200',
  specs: [
    './e2e/scenarios/*.ts',
    //'./e2e/scenarios/LoginComponent.e2e-spec.ts',
    //'./e2e/scenarios/MainPage.e2e-spec.ts',
    //'./e2e/scenarios/ScheduleComponent.e2e-spec.ts',
    //'./e2e/scenarios/SettingsComponent.e2e-spec.ts',
    //'./e2e/scenarios/StudentsComponent.e2e-spec.ts',
    //'./e2e/scenarios/SubjectsComponent.e2e-spec.ts',
  ],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: false,
    maxInstances: 1
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },

  onPrepare() {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }

};
