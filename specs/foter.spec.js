const { expect } = require('chai')
const awb = require('awb')

const Login = require('../objectPage/startPage.js')

const { client, element } = awb()
 
const login = new Login()

const browser = login.clientBrowser;
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
    const isInput = await login.inputName.isDisplayed()
    expect(await isInput).to.eql(true)
  })
  
})