
const awb = require('awb')

const defautlOpts = {
    withStandalone: true, // if true will run selenium standalone server when call start startDriver(), default true
    remote: false, // if remote true startDriver() will not work, default false
    directConnect: false, // if directConnect true directConnect() will run gecko or chrome driver without selenium standalone server, default false
    host: 'localhost', // host, default 'localhost' or '127.0.0.1' or '0.0.0.0'
    port: 4444, // port on what will be runned browser driver 
    desiredCapabilities: {
      javascriptEnabled: true,
      acceptSslCerts: true,
      platform: 'ANY',
      browserName: 'chrome'
    },
    timeout: 5000 // time what will wait response from driver 
  }
  
const { client, element, browser } = awb(defautlOpts)

class Login {
    constructor() {
        this.clientBrowser = client;
        this.baseURL = 'http://localhost:3000'
        this.inputName = element('#formHorizontalEmail')
    }
}

module.exports = Login
