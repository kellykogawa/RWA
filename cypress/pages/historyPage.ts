const { passCommandToAction } = require("commander");

class HistoryPage {
  selectorsList() {
    const selectors = {
      personalHistoryButton: "[data-test='nav-personal-tab']",
      emptyListAlert: "[data-test='empty-list-header']",
      transactionList: "[data-test='transaction-list']"
    };

    return selectors;
  }

    checkHistory() {
        cy.get(this.selectorsList().personalHistoryButton).click()
  }

    fullHistory() {
      cy.get(this.selectorsList().transactionList)
  }

    emptyHistory() {
        cy.get(this.selectorsList().emptyListAlert)
        cy.get('body').should('contain', "No Transactions")
  }
}

export default HistoryPage;
