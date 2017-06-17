/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { By } from 'selenium-webdriver';
import { browser, element, ElementFinder, protractor } from 'protractor';

export class BaseWebCOntrol {

    constructor(public rootLocator: By) {
    }

    private rootElement(): ElementFinder {
        return element(this.rootLocator);
    }

    private componentElement(locator: By): ElementFinder {
        return this.rootElement().element(locator);
    }

    public clickElement(locator: By) {
        this.componentElement(locator).click();
    }

    public getText(locator: By) {
        return this.componentElement(locator).getText();
    }

    public putTextIntoElement(locator: By, text: string) {
        this.componentElement(locator).sendKeys(text);
    }

    public removeTextFromElement(locator: By) {
        this.componentElement(locator).clear();
    }

    public waitForElementToBeVisible() {
        let timeout = browser.params.webElementDisplayedTimeout;
        this.waitForElementToBeDisplayed(this.rootElement(), timeout);
    }

    public waitForElementToBeDisplayedInRootElement(locator: By) {
        let timeout = browser.params.webElementDisplayedTimeout;
        this.waitForElementToBeDisplayed(this.componentElement(locator), timeout);
    }

    private waitForElementToBeDisplayed(element: ElementFinder, timeout: number) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), timeout, 'Couldn\'t find element [' +
            element.locator() + '] within ' + browser.params.webElementDisplayedTimeout + ' milliseconds.');
    }
}
