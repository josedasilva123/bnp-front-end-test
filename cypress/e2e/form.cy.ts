describe("form", () => {
   it("form should try to register user sucessfully", () => {
      cy.visit("/formulario");
      cy.get("[data-create-user-form]").should("exist");
      cy.fixture("users").then((users) => {
         cy.get("[data-create-user-form] [name='name']").type(users[0].name);
         cy.get("[data-create-user-form] [name='email']").type(users[0].email);
      });
      cy.get("[data-create-user-form] [type='submit']").click();
      cy.wait(1000);
      cy.get("[data-toast]").should("exist");
   });
});
