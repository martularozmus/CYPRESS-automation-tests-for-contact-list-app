describe("Dodaj dwa razy ten sam kontakt, korzystając z tego samego maila", () => {
  it("Dodanie kontaktu", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("input[id=email]").type("uzytkownikbenia@fake.com");
    cy.get("input[id=password]").type("benia123");
    cy.get("form").submit();
    cy.get("button[id=logout]").should("be.visible");
    cy.get("button[id=add-contact]").should("be.visible");
    cy.contains('Add a New Contact').click();
    cy.get("input[id=firstName]").type('Anna');
    cy.get("input[id=lastName]").type('Kowalska');
    cy.get("input[id=birthdate").type('1985-10-10');
    cy.get("input[id=email]").type('akowalska@example.com');
    cy.get("input[id=phone]").type('123456789');
    cy.get("input[id=city]").type('London');
    cy.get("input[id=city]").type('Anglia');
    cy.get('form').submit(); 
  });
  it("Ponowne dodanie kontaktu", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("input[id=email]").type("uzytkownikbenia@fake.com");
    cy.get("input[id=password]").type("benia123");
    cy.get("form").submit();
    cy.get("button[id=logout]").should("be.visible");
    cy.get("button[id=add-contact]").should("be.visible");
    cy.contains('Add a New Contact').click();
    cy.get("input[id=firstName]").type('Anna');
    cy.get("input[id=lastName]").type('Kowalska');
    cy.get("input[id=birthdate").type('1985-10-10');
    cy.get("input[id=email]").type('akowalska@example.com');
    cy.get("input[id=phone]").type('123456789');
    cy.get("input[id=city]").type('London');
    cy.get("input[id=city]").type('Anglia');
    cy.get('form').submit(); 
    });
});