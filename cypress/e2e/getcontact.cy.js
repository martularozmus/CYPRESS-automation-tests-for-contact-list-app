/// <reference types="cypress" />

describe('Contact List API Tests', () => {
    let token;
    let userID;
    before(() => {
      // Load token from Cypress environment variables
      token = Cypress.env('token')
      userID = Cypress.env('userID');
    });

    it('should retrieve the contact list', () => {
      const apiUrl = `/contacts/${userID}`;
        cy.request({
          method: 'GET',
          url: apiUrl,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response) => {
          // Assert the response status
          expect(response.status).to.eq(200);
    
  
        });
      });
    });