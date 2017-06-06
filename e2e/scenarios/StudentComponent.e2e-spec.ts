/**
 * Created by adam on 06.06.17.
 */

import {browser, element, by, protractor} from "protractor";
import {LoginData} from "../feed/test_data"

describe('Dziennik Lekcyjny StudentsComponent', () => {

  let LOGIN_BUTTON = element(by.id('login'));
  let LOGOUT_BUTTON = element(by.id('logout'));
  let EMAIL_FIELD = element(by.id('email'));
  let LOGIN_FORM_BUTTON = element(by.id('login_form'));
  let REGISTER_BUTTON = element(by.id('register'));
  let PASSWORD_FIELD = element(by.id('password'));
  let STUDENTS_BUTTON = element(by.id('students'));
  let SUBJECTS_BUTTON = element(by.id('subjects'));
  let SCHEDULE_BUTTON = element(by.id('schedule'));
  let SETTINGS_BUTTON = element(by.id('settings'));
  let ABOUT_BUTTON = element(by.id('about'));
  let ADD_BUTTON = element(by.id('add-button'));
  let ADD_SUBMIT = element(by.id('add-submit'));
  let SUBJECTS_ADD_BUTTON = element(by.id('add-subject-button'));
  let STUDENTS_TABLE = element(by.id('students_table'));
  let SUBJECTS_TABLE = element(by.id('subjects_table'));
  let SCHEDULE_TABLE = element(by.id('schedule_table'));
  let SETTINGS_TABLE = element(by.id('settings_table'));
  let ADD_DATE_FIELD = element(by.id('add-date'));
  let ADD_DURATION_FIELD = element(by.id('add-duration'));
  let ADD_LECTURER_FIELD = element(by.id('add-lecturer'));
  let ADD_ROOM_FIELD = element(by.id('add-room'));
  let ADD_SUBJECT_FIELD = element(by.id('add-subject'));
  let ADD_TIME_FIELD = element(by.id('add-time'));
  let ADD_TYPE_FIELD = element(by.id('add-type'));


  let until = protractor.ExpectedConditions;

  beforeEach(() => {
    browser.get(browser.baseUrl);
  });

  it('StudentsComponent table presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'student button not available');
    STUDENTS_BUTTON.click();
    browser.wait(until.presenceOf(STUDENTS_TABLE), 5000, 'students table not available');
  });

  it('StudentsComponent adding  functionality presence', () => {
    expect(LOGIN_BUTTON.isPresent()).toBe(true);
    LOGIN_BUTTON.click();
    expect(EMAIL_FIELD.isPresent()).toBe(true, "Display email field");
    EMAIL_FIELD.sendKeys(LoginData.correct_login);
    PASSWORD_FIELD.sendKeys(LoginData.correct_password);
    expect(LOGIN_FORM_BUTTON.isPresent()).toBe(true);
    LOGIN_FORM_BUTTON.click();
    browser.sleep(2000);
    browser.wait(until.presenceOf(STUDENTS_BUTTON), 5000, 'students button not available');
    STUDENTS_BUTTON.click();
    browser.wait(until.presenceOf(ADD_BUTTON), 5000, 'add button not available');
    ADD_BUTTON.click();
  });

});
