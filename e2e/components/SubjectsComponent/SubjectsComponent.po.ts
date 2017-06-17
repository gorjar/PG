/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import {by, browser, element} from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class SubjectsComponent extends BaseWebCOntrol {

  private LOGIN_BUTTON = element(by.id('login'));
  private LOGOUT_BUTTON = element(by.id('logout'));
  private EMAIL_FIELD = element(by.id('email'));
  private LOGIN_FORM_BUTTON = element(by.id('login_form'));
  private REGISTER_BUTTON = element(by.id('register'));
  private PASSWORD_FIELD = element(by.id('password'));
  private STUDENTS_BUTTON = element(by.id('students'));
  private SUBJECTS_BUTTON = element(by.id('subjects'));
  private SCHEDULE_BUTTON = element(by.id('schedule'));
  private SETTINGS_BUTTON = element(by.id('settings'));
  private ABOUT_BUTTON = element(by.id('about'));
  private ADD_BUTTON = element(by.id('add-button'));
  private ADD_SUBMIT = element(by.id('add-submit'));
  private SUBJECTS_ADD_BUTTON = element(by.id('add-subject-button'));
  private STUDENTS_TABLE = element(by.id('students_table'));
  private SUBJECTS_TABLE = element(by.id('subjects_table'));
  private SCHEDULE_TABLE = element(by.id('schedule_table'));
  private SETTINGS_TABLE = element(by.id('settings_table'));
  private ADD_DATE_FIELD = element(by.id('add-date'));
  private ADD_DURATION_FIELD = element(by.id('add-duration'));
  private ADD_LECTURER_FIELD = element(by.id('add-lecturer'));
  private ADD_ROOM_FIELD = element(by.id('add-room'));
  private ADD_SUBJECT_FIELD = element(by.id('add-subject'));
  private ADD_TIME_FIELD = element(by.id('add-time'));
  private ADD_TYPE_FIELD = element(by.id('add-type'));
  private TABLE_ROW = by.id('subjects_row');


  constructor(public rootLocator: By) {
    super(rootLocator);
  }

  public static buildSubjectsComponent() {
    return new SubjectsComponent(by.id('subjects_component'));
  }

  public waitForSubjectsRow(){
    this.waitForElementToBeDisplayedInRootElement(this.TABLE_ROW);
  }

  public waitForAddButton(){
    this.waitForElementToBeDisplayedInRootElement(this.ADD_BUTTON);
  }

  public clickAddButton(){
    return this.clickElement(this.ADD_BUTTON);
  }

  public clickEditSubmitButton(){
    return this.clickElement(this.EDIT_SUBMIT);
  }

  public clickDeleteButton() {
    return this.clickElement(this.DELETE_BUTTON);
  }

  public clickEditButton() {
    return this.clickElement(this.EDIT_BUTTON);
  }

  public scrollToFormEnd() {
    browser.executeScript("arguments[0].scrollIntoView();", this.CANCEL_BUTTON.getWebElement());
  }

  public typeInDateField(date) {
    this.putTextIntoElement(this.ADD_DATE_FIELD, date);
  }

  public typeInDurationField(duration) {
    this.putTextIntoElement(this.ADD_DURATION_FIELD, duration);
  }

  public typeInLecturerField(lecturer) {
    this.putTextIntoElement(this.ADD_LECTURER_FIELD, lecturer);
  }

  public editLecturerField(lecturer) {
    this.putTextIntoElement(this.EDIT_LECTURER, lecturer);
  }

  public clearLecturerField() {
    this.removeTextFromElement(this.EDIT_LECTURER)
  }

  public typeInRoomField(room) {
    this.putTextIntoElement(this.ADD_ROOM_FIELD, room);
  }

  public typeInSubjectField(subject) {
    this.putTextIntoElement(this.ADD_SUBJECT_FIELD, subject);
  }

  public typeInTimeField(time) {
    this.putTextIntoElement(this.ADD_TIME_FIELD, time);
  }

  public typeInTypeField(type) {
    this.putTextIntoElement(this.ADD_TYPE_FIELD, type);
  }

  public clickSubmitButton(){
    return this.clickElement(this.ADD_SUBMIT);
  }

  public getLecturerContent() {
    return this.getText(this.LECTURER_SCHEDULE_FIELD);
  }
}
