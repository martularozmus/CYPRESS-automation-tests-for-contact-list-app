const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
    env: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY2ZDFjMDllYzZkOTAwMTM4M2E0ZGUiLCJpYXQiOjE3MTgxMTczNDN9.h0-V_2-5pc1I2WuZN33JiaJijUiOGfG2lT9FK9r0IQ0",
      userID:"666865170842020013c0ba2b"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});