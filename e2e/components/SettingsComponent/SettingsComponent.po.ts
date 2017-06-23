/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { by } from 'protractor';
import { By } from 'selenium-webdriver';
import { BaseWebCOntrol } from '../base/BaseWebControl';

export class SettingsComponent extends BaseWebCOntrol {

  private SETTINGS_TABLE = by.id('settings_table');

  constructor(public rootLocator: By) {
    super(rootLocator);
  }

  public static buildSettingsComponent() {
    return new SettingsComponent(by.id('settingsComponent'));
  }

  public waitForSettingsTable(){
    this.waitForElementToBeDisplayedInRootElement(this.SETTINGS_TABLE);
  }

}
