const { expect } = require('chai')

const Login = require('../objectPage/startPage.js')

const client = require('../dataDriverTesting/dataDriverAWB')
 
const login = new Login()

let browser = null;
browser = client;

describe('Google base example', () => {

  before (async () => {
    await browser.startDriver()
    await browser.goTo(login.baseURL)
  })
  after(async () => {
    await browser.closeBrowser()
    await browser.stopDriver()
  })

  it('start page', async () => {
  // const isInput = await login.inputName.isDisplayed()
  // expect(await isInput).to.eql(true)
  await console.log(true)
  })
  
})