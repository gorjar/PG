/*
 * Copyright 2017 GMO. All Rights Reserved
 */

import { browser } from "protractor";
import { LoginComponent } from "../components/LoginComponent/LoginComponent.po"
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent.po';

describe('Dziennik Lekcyjny LoginComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();

  beforeEach(() => {
    browser.get(browser.baseUrl);
  });

  //it('Should check application behaviour with false creditentials', () => {
    // TODO add test case here when functionality implemented
  //});
});
