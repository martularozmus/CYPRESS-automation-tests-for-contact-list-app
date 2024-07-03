describe("Dodaj nowy kontakt", () => {
  it("powinien dodawać nowy kontakt - z rokiem urodzenia 1410", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("input[id=email]").type("uzytkownikbenia@fake.com");
    cy.get("input[id=password]").type("benia123");
    cy.get("form").submit();
    cy.get("button[id=logout]").should("be.visible");
    cy.get("button[id=add-contact]").should("be.visible");
    cy.contains('Add a New Contact').click();
    cy.get("input[id=firstName]").type('Jeremi');
    cy.get("input[id=lastName]").type('Anieli');
    cy.get("input[id=email]").type('jeremianieli@example.com');
    cy.get("input[id=birthdate").type('1410-10-10');
    cy.get('form').submit(); 
  });
  it("powinien dodawać nowy kontakt - z rokiem urodzenia 9998", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("input[id=email]").type("uzytkownikbenia@fake.com");
    cy.get("input[id=password]").type("benia123");
    cy.get("form").submit();
    cy.get("button[id=logout]").should("be.visible");
    cy.get("button[id=add-contact]").should("be.visible");
    cy.contains('Add a New Contact').click();
    cy.get("input[id=firstName]").type('Wilhelm');
    cy.get("input[id=lastName]").type('Wielki');
    cy.get("input[id=email]").type('wilhelmwielki@example.com');
    cy.get("input[id=birthdate").type('9998-02-02');
    cy.get('form').submit(); 
    });
});