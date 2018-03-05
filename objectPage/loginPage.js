const { element, elements } = require('../dataDriverTesting/dataDriverAWB')

class LoginForm {
    constructor() {
        this.baseURL = 'http://localhost:3000'
        this.loginName = element('#formHorizontalEmail')
        this.menuPanel = element('.navbar.navbar-inverse')
        this.loginButton = element('.btn.btn-default')
    }

    async url() {
        return await browser.getCurrentUrl();
    }

    async areDisplyed(selectors) {
        for (let key in selectors) { //перебирання значень якостей об'єкта
            let check = await element(selectors[key]).isDisplayed() //перевірка елемента по селектору, наявність на сторінці
            if(check == false) {
                return false;
            }
        }   
        return true   
    }

    async loginGo(userName) {
        await this.loginName.sendKeys(userName);
        await this.loginButton.click();
    }
}

module.exports = LoginForm
