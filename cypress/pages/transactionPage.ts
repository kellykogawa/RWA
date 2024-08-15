const { passCommandToAction } = require("commander");

class TransactionPage {
  selectorsList() {
    const selectors = {
      newTransactionButton: "[href='/transaction/new']",
      searchField: "[data-test='user-list-search-input']",
      usernameField: "[data-test='user-list-item-GjWovtg2hr']",
      amountField: "[name='amount']",
      descriptionField: "[data-test='transaction-create-description-input']",
      payButton: "[data-test='transaction-create-submit-payment']",
      paymentConfirmIcon: "[data-test='alert-bar-success']",
      returnButton: "[data-test='new-transaction-return-to-transactions']",

    };

    return selectors;
  }

  successTransaction() {
    cy.get(this.selectorsList().newTransactionButton).click()
    cy.get(this.selectorsList().searchField).type("Kristian Bradtke", {force: true})
    cy.get(this.selectorsList().usernameField).click()
    cy.get(this.selectorsList().amountField).type("1")
    cy.get(this.selectorsList().descriptionField).type("Pay")
    cy.get(this.selectorsList().payButton).click()
    cy.get(this.selectorsList().paymentConfirmIcon)
    cy.get('body').should('contain', 'Transaction Submitted!')
    cy.get(this.selectorsList().returnButton).click()

  }

  failTransaction() {
    cy.get(this.selectorsList().newTransactionButton).click()
    cy.get(this.selectorsList().searchField).type("Kristian Bradtke", {force: true})
    cy.get(this.selectorsList().usernameField).click()
    cy.get(this.selectorsList().amountField).type("10000000")
    cy.get(this.selectorsList().descriptionField).type("Pay")
    cy.get(this.selectorsList().payButton).click()
    //cy.get(this.selectorsList().paymentFailIcon) should contain Fail payment icon

  }
}

export default TransactionPage;
