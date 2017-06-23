/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { by } from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';


export class LoginComponent extends BaseWebCOntrol{

    private EMAIL_FIELD = by.id('email');
    private LOGIN_FORM_BUTTON = by.id('login_form');
    private PASSWORD_FIELD = by.id('password');

    constructor(public rootLocator: By) {
        super(rootLocator);
    }

    public typeInEmailField(email) {
        this.putTextIntoElement(this.EMAIL_FIELD, email);
    }

    public typeInPasswordField(password) {
        this.putTextIntoElement(this.PASSWORD_FIELD, password);
    }

    public clickSubmitButton(){
        return this.clickElement(this.LOGIN_FORM_BUTTON);
    }

    public static buildLoginComponent() {
        return new LoginComponent(by.id('loginComponent'));
    }

    public waitForEmailField(){
      this.waitForElementToBeDisplayedInRootElement(this.EMAIL_FIELD);
    }
}
