describe("Dodaj nowy kontakt", () => {
    it("powinien dodawać nowy kontakt", () => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("input[id=email]").type("uzytkownikbenia@fake.com");
      cy.get("input[id=password]").type("benia123");
      cy.get("form").submit();
      cy.get("button[id=logout]").should("be.visible");
      cy.get("button[id=add-contact]").should("be.visible");
      cy.contains('Add a New Contact').click();
      cy.get("input[id=firstName]").type('Tusiek');
      cy.get("input[id=lastName]").type('Gacusiek');
      cy.get("input[id=email]").type('tusiek@example.com');
      cy.get("input[id=country").type('@');
      cy.get('form').submit(); 
    });
    it("Usuń dodany kontakt", () => {
        cy.visit("https://thinking-tester-contact-list.herokuapp.com");
        cy.get("input[id=email]").type("uzytkownikbenia@fake.com");
        cy.get("input[id=password]").type("benia123");
        cy.get("form").submit();
        cy.get("button[id=logout]").should("be.visible");
        cy.get("button[id=add-contact]").should("be.visible");
        cy.contains('Tusiek').click();
        cy.contains('Delete Contact').click();
      });
  });