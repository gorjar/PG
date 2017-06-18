import { by } from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class StudentsComponent extends BaseWebCOntrol {

    private ADD_BUTTON = by.id('add-button');
    private ADD_STUDENT_NAME_FIELD = by.id('add_name_field');
    private ADD_STUDENT_LASTNAME_FIELD = by.id('add_lastname_field');
    private ADD_STUDENT_EMAIL_FIELD = by.id('add_email_field');
    private STUDENT_EMAIL_FIELD = by.id('email_content');
    private TABLE_ROW = by.id('student_row');
    private ADD_STUDENT_BUTTON = by.id('add_student_button');
    private DELETE_STUDENT_BUTTON = by.id('delete_student_button');
    private EDIT_BUTTON = by.id('edit_button');
    private EDIT_STUDENT_EMAIL_FIELD = by.id('email_student_field');
    private EDIT_SUBMIT_BUTTON = by.id('edit_submit_button');

    constructor(public rootLocator: By) {
        super(rootLocator);
    }

    public static buildStudentsComponent() {
        return new StudentsComponent(by.id('studentsComponent'));
    }

    public waitForAddButton(){
        this.waitForElementToBeDisplayedInRootElement(this.ADD_BUTTON);
    }

    public waitForStudentsRow(){
      this.waitForElementToBeDisplayedInRootElement(this.TABLE_ROW);
    }

    public clickAddButton(){
        return this.clickElement(this.ADD_BUTTON);
    }

    public clickDeleteStudentButton() {
      return this.clickElement(this.DELETE_STUDENT_BUTTON);
    }

    public clickEditButton() {
      return this.clickElement(this.EDIT_BUTTON);
    }

    public clickAddStudentButton(){
      return this.clickElement(this.ADD_STUDENT_BUTTON);
    }

    public typeInNameField(date) {
      this.putTextIntoElement(this.ADD_STUDENT_NAME_FIELD, date);
    }

    public typeInLastnameField(date) {
      this.putTextIntoElement(this.ADD_STUDENT_LASTNAME_FIELD, date);
    }

    public typeInEmailField(date) {
      this.putTextIntoElement(this.ADD_STUDENT_EMAIL_FIELD, date);
    }

    public getEmailContent() {
      return this.getText(this.STUDENT_EMAIL_FIELD);
    }

    public editEmailField(email) {
      this.putTextIntoElement(this.EDIT_STUDENT_EMAIL_FIELD, email);
    }

    public clickEditSubmitButton(){
      return this.clickElement(this.EDIT_SUBMIT_BUTTON);
    }

    public clearEmailField() {
      this.removeTextFromElement(this.EDIT_STUDENT_EMAIL_FIELD);
    }
}
