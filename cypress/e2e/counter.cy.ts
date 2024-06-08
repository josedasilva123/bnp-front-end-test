describe("counter", () => {
   it("counter should work correctly", () => {
      cy.visit("/ciclo-de-vida");
      cy.get("[data-toggle-counter]").click();
      cy.get("[data-counter]").should("exist");
      for (let index = 0; index < 10; index++) {
         cy.get("[data-content] h2").should("contain.text", String(index));
         cy.get("[data-increment-button]").click();
      }
      cy.get("[data-counter]").should("not.exist");
   });

   it("counter toggle should open and close", () => {
      cy.visit("/ciclo-de-vida");
      cy.get("[data-toggle-counter]").click();
      cy.get("[data-counter]").should("exist");
      cy.get("[data-toggle-counter]").click();
      cy.get("[data-counter]").should("not.exist");
   });
});
