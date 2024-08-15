const { passCommandToAction } = require("commander");

class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      wrongCredentialAlert: "[data-test='signin-error']",
      signupPageButton: "[data-test='signup']"
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("/signin");
  }

  accessSignupPage() {
    cy.get(this.selectorsList().signupPageButton).click();
    cy.location("pathname").should("equal", "/signup");
  }

  loginWithAnyUser(username: string, password: string) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }

  checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialAlert);
  }
}

export default LoginPage;
