describe("modal", () => {
   it("modal should open and close", () => {
      cy.visit("/modal");
      cy.get("#open-modal").click();
      cy.get('[role="dialog"]').should("exist");
      cy.get("[data-modal-close='true']").click();
      cy.get('[role="dialog"]').should("not.exist");
   });

   it("modal should not close when click inside of the modal box", () => {
      cy.visit("/modal");
      cy.get("#open-modal").click();
      cy.get('[role="dialog"]').click();
      cy.get('[role="dialog"]').should("exist");
   });
});
