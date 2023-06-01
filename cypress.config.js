const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implemente os listeners de eventos do Node aqui, se necessário
    },
  },
});
