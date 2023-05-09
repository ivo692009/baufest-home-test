const { defineConfig } = require("cypress");

module.exports = defineConfig({
projectId: "71oma6",
reporter: 'cypress-mochawesome-reporter',
"pageLoadTimeout" :60000,
"defaultCommandTimeout": 15000,
  e2e: {
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
    },
    
  },
});

