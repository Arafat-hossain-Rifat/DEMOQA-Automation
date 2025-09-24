const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',       // set base URL
    pageLoadTimeout: 120000,             // 2 minutes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
