const { passCommandToAction } = require("commander");

class NewAccountPage {
  selectorsList() {
    const selectors = {
      nextButton: "[data-test='user-onboarding-next']",
      bankNamField: "[name='bankName']",
      routingNumberField: "[name='routingNumber']",
      accountNumber: "[name='accountNumber']",
      submitBankButton: "[data-test='bankaccount-submit']",
      onBoardingButton: "[data-test='user-onboarding-next']"
    };

    return selectors;
  }

registerNewBank() {
    cy.get(this.selectorsList().nextButton).click();
    cy.get(this.selectorsList().bankNamField).type("Bank Test");
    cy.get(this.selectorsList().routingNumberField).type("testtestt");
    cy.get(this.selectorsList().accountNumber).type("testtestt");
    cy.get(this.selectorsList().submitBankButton).click();
    cy.get(this.selectorsList().onBoardingButton).click()
  }
}

export default NewAccountPage;