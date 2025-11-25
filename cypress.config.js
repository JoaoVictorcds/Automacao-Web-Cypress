const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2
    },
    supportFile: 'cypress/support/commands.js',
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    /* viewportHeight:500,
    viewportWidth:1000, */
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "b77uss",
});
