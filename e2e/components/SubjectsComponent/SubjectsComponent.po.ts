/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { by } from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class SubjectsComponent extends BaseWebCOntrol {

  private ADD_BUTTON = by.id('add_button');
  private SUBJECTS_ADD_BUTTON = by.id('add-subject-button');
  private ADD_LECTURER_FIELD = by.id('lecturer_field');
  private ADD_SUBJECT_FIELD = by.id('subject_field');
  private TABLE_ROW = by.id('subjects_row');
  private DELETE_BUTTON = by.id('delete_button');
  private LECTURER_SUBJECT_FIELD = by.id('lecturer_content_field');
  private EDIT_BUTTON = by.id('edit_button');
  private EDIT_LECTURER = by.id('edit_lecturer');
  private EDIT_SUBMIT_BUTTON = by.id('edit_submit_button');


  constructor(public rootLocator: By) {
    super(rootLocator);
  }

  public static buildSubjectsComponent() {
    return new SubjectsComponent(by.id('subjects_component'));
  }

  public waitForSubjectsRow(){
    this.waitForElementToBeDisplayedInRootElement(this.TABLE_ROW);
  }

  public waitForAddSubjectButton(){
    this.waitForElementToBeDisplayedInRootElement(this.SUBJECTS_ADD_BUTTON);
  }

  public clickAddSubjectButton(){
    return this.clickElement(this.SUBJECTS_ADD_BUTTON);
  }

  public clickAddButton(){
    return this.clickElement(this.ADD_BUTTON);
  }

  public clickDeleteButton() {
    return this.clickElement(this.DELETE_BUTTON);
  }

  public typeInLecturerField(lecturer) {
    this.putTextIntoElement(this.ADD_LECTURER_FIELD, lecturer);
  }

  public typeInSubjectField(subject) {
    this.putTextIntoElement(this.ADD_SUBJECT_FIELD, subject);
  }

  public getLecturerContent() {
    return this.getText(this.LECTURER_SUBJECT_FIELD);
  }

  public clickEditButton() {
    return this.clickElement(this.EDIT_BUTTON);
  }

  public clickEditSubmitButton() {
    return this.clickElement(this.EDIT_SUBMIT_BUTTON);
  }

  public clearLecturerField() {
    this.removeTextFromElement(this.EDIT_LECTURER)
  }

  public editLecturerField(lecturer) {
    this.putTextIntoElement(this.EDIT_LECTURER, lecturer);
  }
}
