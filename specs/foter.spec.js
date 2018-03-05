const { expect } = require('chai')

const LoginForm = require('../objectPage/loginPage.js')
const UserPage = require('../objectPage/userPage')

const {login, user, dataForCalculation, userName} = require('../dataObjectTesting/selectors.json')
const { client, element, elements } = require('../dataDriverTesting/dataDriverAWB')
 
const loginForm = new LoginForm()
const userPage = new UserPage()

let browser = null;
browser = client;

describe('testCase by NubipProject', () => {

  before (async () => {
    await browser.startDriver()
    await browser.goTo(loginForm.baseURL)
  })
  after(async () => {
    await browser.closeBrowser()
    await browser.stopDriver()
  })
/*
  it('login page', async () => {
      expect (await browser.getUrl()).to.eql('http://localhost:3000/')
      expect (await loginForm.areDisplyed(login)).to.eql(true)
    });
*/
  it('go to userPage', async function() {
    // login button
    await loginForm.loginGo(userName);
    expect (await browser.getUrl()).to.eql(userPage.userURL)
    expect (await userPage.areDisplayed(user)).to.eql(true)
    // recording by farm
    await userPage.dataCalculation(user.inputForCalculation, dataForCalculation);
    //await userPage.clickCheckbox(user.checkedKeepCows);
    await userPage.clickCheckbox(user.checkedFarm);
  })
  
  
})