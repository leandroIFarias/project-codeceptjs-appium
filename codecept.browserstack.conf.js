const server = require('./server/server.js')
require('dotenv').config();

exports.config = {
  name: 'codeceptjs-appium-browserstack',
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: process.env.BROWSERSTACK_APP_ID,
      hostname: 'hub-cloud.browserstack.com',
      port: 4444,
      platform: 'Android',
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      desiredCapabilities: {
          appPackage: process.env.APP_PACKAGE,
          appActivity: 'MainActivity',
          deviceName: 'Samsung Galaxy S9',
          platformVersion: '8.0',
          autoGrantPermissions: 'true',
      }
    },
    "Mochawesome": {
      "uniqueScreenshotNames": "true"
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  bootstrap: async () => {
    await server.start();
  },
  timeout: null,
  teardown: async () => {
    await server.stop();
  },
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*_steps.js' 
    //['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ]
}