const { passCommandToAction } = require("commander");

class SignupPage {
  selectorsList() {
    const selectors = {
      firstnameField: "[name='firstName']",
      lastnameField: "[name='lastName']",
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      confirmpasswordField: "[name='confirmPassword']",
      signupButton: "[type='submit']",
      credentialAlert: ".MuiFormHelperText-contained",
    };

    return selectors;
  }

  signupUser(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    confirmpassword: string
  ) {
    cy.get(this.selectorsList().firstnameField).type(firstname);
    cy.get(this.selectorsList().lastnameField).type(lastname);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmpasswordField).type(password);
    cy.get(this.selectorsList().signupButton).click();
  }

  failSignupUser(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    confirmpassword: string
  ) {
    cy.get(this.selectorsList().firstnameField).click();
    cy.get(this.selectorsList().lastnameField).type(lastname);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmpasswordField).type(password);
  }

  checkFailSignup() {
    cy.get(this.selectorsList().credentialAlert);
  }
}

export default SignupPage;
