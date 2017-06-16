/**
 * Created by Maciej Galka on 08.06.17.
 */

import { browser } from "protractor";
import { LoginData } from "../feed/test_data"
import { LoginComponent } from "../components/LoginComponent/LoginComponent.po"
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent.po';

describe('Dziennik Lekcyjny LoginComponent', () => {

  let navbarComponent = NavbarComponent.buildNavbarComponent();
  let loginComponent = LoginComponent.buildLoginComponent();

  beforeEach(() => {
    browser.get(browser.baseUrl);
  });

  it('Should check if user can successfully login and logout from application', () => {
    navbarComponent.waitForElementToBeVisible();
    navbarComponent.clickLoginButton();
    loginComponent.typeInEmailField(LoginData.correct_admin_login);
    loginComponent.typeInPasswordField(LoginData.correct_admin_password);
    loginComponent.clickSubmitButton();
    navbarComponent.waitForLogoutButton();
    navbarComponent.clickLogoutButton();
    navbarComponent.waitForLoginButton();
  });
});
