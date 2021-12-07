describe("The user trade order limit buy and sell", () => {
  before(() => {
    cy.visit("/global/trade/USDTUSD");
  });

  it("Poc get element", () => {
    cy.wait(5000);
    // uncomment this will match with condition visible then will log market
    // cy.get('[data-test="Market Order Type"]').click();
    cy.get("body").then(($body) => {
      if ($body.find('[name="Market"]').length > 0) {
        //evaluates as true if button exists at all
        cy.contains("Market")
          .should("be.visible")
          .then(($header) => {
            if ($header.is(":visible")) {
              // if tab market active will get text market
              cy.log("market");
            } else {
            }
          });
      } else {
        // get default price if tab is limit order
        cy.get('[name="limitPrice"]')
          .invoke("val")
          .then((label) => {
            cy.log(label);
          });
      }
    });
  });
});
