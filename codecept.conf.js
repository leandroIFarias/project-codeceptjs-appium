const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'project-codeceptjs-appium',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\projetos\\project-codeceptjs-appium\\app\\app-release.apk',
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: 'Pixel_2_API_28',
        platformVersion: "9",
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js",
    home_page: "./pages/home_page.js"
  },
}