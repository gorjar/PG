/**
 * Created by adam on 06.06.17.
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../feed/test_data"

describe('Dziennik Lekcyjny StudentsComponent', () => {

  let LOGIN_BUTTON = element(by.id('login'));
  let EMAIL_FIELD = element(by.id('email'));
  let LOGIN_FORM_BUTTON = element(by.id('login_form'));
  let PASSWORD_FIELD = element(by.id('password'));
  let STUDENTS_BUTTON = element(by.id('students'));
  let ADD_BUTTON = element(by.id('add-button'));
  let STUDENTS_TABLE = element(by.id('students_table'));

  let until = protractor.ExpectedConditions;

  beforeEach(() => {
    browser.get(browser.baseUrl);
  });

  //it('StudentsComponent table presence', () => {
  //  expect(LOGIN_BUTTON.isPresent()).toBe(true);
  //  LOGIN_BUTTON.click();
  //  expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
  //  EMAIL_FIELD.sendKeys(LoginData.correct_login);
  //  PASSWORD_FIELD.sendKeys(LoginData.correct_password);
  //  expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
  //  LOGIN_FORM_BUTTON.click();
  //  browser.sleep(2000);
  //  browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'student button not available');
  //  STUDENTS_BUTTON.click();
  //  browser.wait(until.presenceOf(STUDENTS_TABLE), 5000, 'students table not available');
  //});
  //
  //it('StudentsComponent adding  functionality presence', () => {
  //  browser.wait(until.presenceOf(LOGIN_BUTTON), 5000, 'Taking too long to load element');
  //  LOGIN_BUTTON.click();
  //  expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
  //  EMAIL_FIELD.sendKeys(LoginData.correct_login);
  //  PASSWORD_FIELD.sendKeys(LoginData.correct_password);
  //  expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
  //  LOGIN_FORM_BUTTON.click();
  //  browser.sleep(2000);
  //  browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'students button not available');
  //  STUDENTS_BUTTON.click();
  //  browser.wait(until.presenceOf(ADD_BUTTON), 5000, 'add button not available');
  //  ADD_BUTTON.click();
  //});

});
