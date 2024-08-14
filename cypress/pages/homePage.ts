class HomePage {
  selectorsList() {
    const selectors = {
      homedGrid: '[data-test="sidenav-home"]',
    };

    return selectors;
  }

  checkHomePage() {
    cy.get(this.selectorsList().homedGrid).should("be.visible");
  }
}

export default HomePage;
