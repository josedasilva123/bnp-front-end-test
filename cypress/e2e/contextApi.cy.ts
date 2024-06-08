describe("context api", () => {
   it("should be able to show success message correctly", () => {
      cy.visit("/context-api");
      cy.get("[data-success-button]").click();
      cy.get("[data-toast-type='success']").should("exist");
      cy.get("[data-toast-type='success'] [data-content]").should(
         "have.text",
         "Mensagem de sucesso!"
      );
      cy.wait(3200);
      cy.get("[data-toast-type='success']").should("not.exist");
   });

   it("should be able to show error message correctly", () => {
      cy.visit("/context-api");
      cy.get("[data-error-button]").click();
      cy.get("[data-toast-type='error']").should("exist");
      cy.get("[data-toast-type='error'] [data-content]").should(
         "have.text",
         "Mensagem de erro!"
      );
      cy.wait(3200);
      cy.get("[data-toast-type='error']").should("not.exist");
   });
});
