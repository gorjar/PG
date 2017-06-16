import { by } from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class StudentsComponent extends BaseWebCOntrol {

    private ADD_BUTTON = by.id('add-button');
    private STUDENT_ROW = by.id('student_row');

    constructor(public rootLocator: By) {
        super(rootLocator);
    }

    public static buildStudentsComponent() {
        return new StudentsComponent(by.id('studentsComponent'));
    }

    public waitForAddButton(){
        this.waitForElementToBeDisplayedInRootElement(this.ADD_BUTTON);
    }

    public clickAddButton(){
        return this.clickElement(this.ADD_BUTTON);
    }

    public waitForScheduleRow(){
        this.waitForElementToBeDisplayedInRootElement(this.STUDENT_ROW);
    }
}