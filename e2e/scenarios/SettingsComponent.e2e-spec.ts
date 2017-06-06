/**
 * Created by adam on 06.06.17.
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../feed/test_data"

describe('Dziennik Lekcyjny SettingsComponent', () => {

  let LOGIN_BUTTON = element(by.id('login'));
  let EMAIL_FIELD = element(by.id('email'));
  let LOGIN_FORM_BUTTON = element(by.id('login_form'));
  let PASSWORD_FIELD = element(by.id('password'));
  let SETTINGS_BUTTON = element(by.id('settings'));
  let SETTINGS_TABLE = element(by.id('settings_table'));

  let until = protractor.ExpectedConditions;

  beforeEach(() => {
    browser.get(browser.baseUrl);
  });

  it('SettingsComponent table presence', () => {
    browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(SETTINGS_BUTTON), 5000, 'settings table not available');
    SETTINGS_BUTTON.click();
    browser.wait(until.presenceOf(SETTINGS_TABLE), 5000, 'settings table not available');
  });

});
