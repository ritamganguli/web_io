const fs = require('fs');
exports.config = {
  user:"ritamg",
  key:"lHWNSA0QECwjeN8DoDb9U6KyXMBgAFXqlIIArkxeOTDSeEdLyG",
services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  updateJob: false,
  specs: ["./tests/specs/single_test.js"],
  exclude: [],
  capabilities: [
    {
      browserName: "chrome",
      version: "latest",
      platform: "WIN10",
      name: "webdriverIO-single_test",
      build: "webdriverIO-lambdatest",
      visual: false,
      video: true,
      console: false,
      network: false,
      "lambda:userFiles" : [

      ]
//      "goog:chromeOptions": {
////            "extensions": ["C:/Users/varunkumarb/Desktop/Watfix.zip"]
//            "extensions":[fs.readFileSync('C:/Users/varunkumarb/Desktop/Watfix.zip').toString('base64')]
//          },

//      'lambda:loadExtension': 'https://prod-magicleap-user-files-us-east-1-v1.s3.amazonaws.com/extensions/orgId-588659/Watfix.zip',
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 100000,
  connectionRetryTimeout: 900000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
};
