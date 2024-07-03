describe("Niedozwolone znaki w obowiązkowych polach", () => {
  it("Dodanie kontaktu za pomocą znaków specjalnych", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("input[id=email]").type("uzytkownikbenia@fake.com");
    cy.get("input[id=password]").type("benia123");
    cy.get("form").submit();
    cy.get("button[id=logout]").should("be.visible");
    cy.get("button[id=add-contact]").should("be.visible");
    cy.contains('Add a New Contact').click();
    cy.get("input[id=firstName]").type('*');
    cy.get("input[id=lastName]").type('@');
    cy.get('form').submit(); 
  });
});