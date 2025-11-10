const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/commands.js',
    /* viewportHeight:500,
    viewportWidth:1000, */
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
