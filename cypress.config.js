const  { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, 
    specPattern: "cypress/e2e/**/*.{js,ts,feature}",
    baseUrl:"http://www.webdriveruniversity.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com"

    }, 
  },
});


// // cypress.config.js
// import { defineConfig } from 'cypress'
// import createBundler from '@bahmutov/cypress-esbuild-preprocessor'

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', createBundler())
//     },
//   },
// })