describe("confirm modal", () => {
   it("confirm modal confirmation should work correctly", () => {
      cy.visit("/modal-de-confirmacao");
      cy.get("#open-modal").click();
      cy.get('[role="dialog"]').should("exist");
      cy.get("[data-modal-confirm]").click();
      cy.get('[role="dialog"]').should("not.exist");
      cy.get("[data-toast] [data-content]").should(
         "have.text",
         "Parabéns, você fez a parada!"
      );
      cy.wait(3200);
      cy.get("[data-toast] [data-content]").should("not.exist");
   });

   it("confirm modal should close when you click on cancel button", () => {
      cy.visit("/modal-de-confirmacao");
      cy.get("#open-modal").click();
      cy.get('[role="dialog"]').should("exist");
      cy.get("[data-modal-cancel]").click();
      cy.get('[role="dialog"]').should("not.exist");
      cy.get("[data-toast] [data-content]").should("not.exist");
   });

   it("confirm modal should close when you click on close button", () => {
      cy.visit("/modal-de-confirmacao");
      cy.get("#open-modal").click();
      cy.get('[role="dialog"]').should("exist");
      cy.get("[data-modal-close]").click();
      cy.get('[role="dialog"]').should("not.exist");
      cy.get("[data-toast] [data-content]").should("not.exist");
   });
});
