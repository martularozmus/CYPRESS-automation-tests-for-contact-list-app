/// <reference types="cypress" />

describe('Contact List API Tests', () => {
    let token;
    before(() => {
      // Load token from Cypress environment variables
      token = Cypress.env('token');
    });

    it('should retrieve the contact list', () => {
        const apiUrl = `/contacts/`;
        cy.request({
          method: 'GET',
          url: apiUrl,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response) => {
          // Assert the response status
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
  
        });
      });
    });