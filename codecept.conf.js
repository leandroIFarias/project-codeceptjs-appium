const server = require('./server/server.js')

exports.config = {
  output: './output',
  //timeout: 300,
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\projetos\\project-codeceptjs-appium\\app\\app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'Pixel_2_API_28',
        platformVersion: '9'
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
  ],
  name: 'project-codeceptjs-appium',
  tests: './steps/*_test.js'
}