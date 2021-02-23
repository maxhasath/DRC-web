exports.config = {
  tests: '*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://api-dev.itelasoft.com.au/api/',
     
  },
    Puppeteer: {
      chrome: {
        args: ['--no-sandbox', '--window-size=1440,1080'],
      },
      url: '',
      show: false,
      windowSize: '1440x700'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: "./src/pages/mainPage.js",
    registerPage: "./src/pages/registerPage.js",
    forfaitVoixPage: "./src/pages/forfaitVoixPage.js",
    smsPage: "./src/pages/smsPage.js",
    trasferInternetPage: "./src/pages/trasferInternetPage.js",
    buyDataPage: "./src/pages/buyDataPage.js",
    papaBonPage: "./src/pages/papaBonheurPage.js",
    transactionPage: "./src/pages/transactionPage.js"
    
  },
  bootstrap: null,
  mocha: {
    // "reporterOptions": {
    //   "codeceptjs-cli-reporter": {
    //     "stdout": "-",
    //     "options": {
    //       "verbose": false,
    //       "steps": true,
    //     }
    //   },
    //   "mochawesome": {
    //     "stdout": "-",
    //     "options": {
    //       "reportDir": "./output",
    //       "reportFilename": "report"
    //     },
    //     "mocha-junit-reporter": {
    //       "stdout": "-",
    //       "options": {
    //         "mochaFile": "./output/result.xml"
    //       },
    //       "attachments": true //add screenshot for a failed test
    //     }
    //   }
    // }
  },
  name: 'automation',
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  }
}