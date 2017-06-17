import {by, browser, element} from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class ScheduleComponent extends BaseWebCOntrol {

    private ADD_BUTTON = by.id('add-button');
    private EDIT_BUTTON = by.id('edit_button');
    private ADD_SUBMIT = by.id('addsubmit');
    private CANCEL_BUTTON = element(by.id('cancel_button'));
    private EDIT_SUBMIT = by.id('edit_submit');
    private DELETE_BUTTON = by.id('delete_button');
    private ADD_DATE_FIELD = by.id('add-date');
    private ADD_DURATION_FIELD = by.id('add-duration');
    private ADD_LECTURER_FIELD = by.id('add-lecturer');
    private ADD_ROOM_FIELD = by.id('add-room');
    private ADD_SUBJECT_FIELD = by.id('add-subject');
    private ADD_TIME_FIELD = by.id('add-time');
    private ADD_TYPE_FIELD = by.id('add-type');
    private TABLE_ROW = by.id('schedule_row');
    private LECTURER_SCHEDULE_FIELD = by.id('schedlecturer');
    private EDIT_LECTURER = by.id('edit_lecturer');

    constructor(public rootLocator: By) {
        super(rootLocator);
    }

    public static buildScheduleComponent() {
        return new ScheduleComponent(by.id('scheduleComponent'));
    }

    public waitForScheduleRow(){
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
