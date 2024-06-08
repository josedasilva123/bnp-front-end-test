describe("list", () => {
   it("list should load users and render correctly", () => {
      cy.visit("/lista");
      cy.wait(3000);
      cy.get("[data-list-container]").should("exist");
      cy.get("[data-list-container] li").should("have.length", 2);
   });
});
