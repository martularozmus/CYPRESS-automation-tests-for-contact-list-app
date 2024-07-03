describe("Create User", () => {
  it("Create User", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser");
    cy.get("input[id=firstName]").type("Anna");
    cy.get("input[id=lastName]").type("Sroka");
    cy.get("input[id=email]").type("annasroka@fake.com");
    cy.get("input[id=password]").type("benia123");
    cy.get("form").submit();
    cy.get("button[id=logout]").should("be.visible");
    cy.get("button[id=add-contact]").should("be.visible");
  });
  it("Create User with the same data", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser");
    cy.get("input[id=firstName]").type("Anna");
    cy.get("input[id=lastName]").type("Sroka");
    cy.get("input[id=email]").type("annasroka@fake.com");
    cy.get("input[id=password]").type("benia123");
    cy.get("form").submit();
    cy.get("button[id=logout]").should("be.visible");
    cy.get("button[id=add-contact]").should("be.visible");
  });
  afterEach(() => {
    cy.get("button[id=logout]").click();
  });
});