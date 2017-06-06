/**
 * Created by adam on 06.06.17.
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../feed/test_data"

describe('Dziennik Lekcyjny LoginComponent + Logout functionality', () => {

  let LOGIN_BUTTON = element(by.id('login'));
  let LOGOUT_BUTTON = element(by.id('logout'));
  let EMAIL_FIELD = element(by.id('email'));
  let LOGIN_FORM_BUTTON = element(by.id('login_form'));
  let PASSWORD_FIELD = element(by.id('password'));

  let until = protractor.ExpectedConditions;

  beforeEach(() => {
    browser.get(browser.baseUrl);
  });

  it('Should check if user can successfully login to application', () => {
    browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.wait(until.presenceOf(LOGOUT_BUTTON), 5000, 'Taking too long to load element');
    expect(LOGOUT_BUTTON.isPresent()).toBe(true);
  });

  it('Should check if user can successfully log out from application', () => {
    browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.wait(until.presenceOf(LOGOUT_BUTTON), 5000, 'Taking too long to load element');
    expect(LOGOUT_BUTTON.isPresent()).toBe(true);
    browser.sleep(2000);
    browser.wait(until.presenceOf(LOGOUT_BUTTON), 5000, 'Taking too long to load element');
    LOGOUT_BUTTON.click();
    browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
  });

});
