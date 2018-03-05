const { element, elements } = require('../dataDriverTesting/dataDriverAWB')

class UserPage {
    constructor() {
        this.menuPanel = element('.navbar-header')
        this.informEnterData = element('.btn.btn-warning')
        this.adding = element('.btn.btn-primary')
        this.calculationingFarm = elements('.btn.btn-default')
        this.inputForCalculation = elements('.form-control')
        this.checkboxes = elements('.checkbox-inline')
        this.checkedFarm = elements('div>label.checkbox-inline')

        this.userURL = 'http://localhost:3000/entries'
    }   

    async areDisplayed(selectors) {
        for (let key in selectors) { //перебирання значень якостей об'єкта
        let check = await element(selectors[key]).isDisplayed() //перевірка елемента по селектору, наявність на сторінці
            if(check == false) {
                return false;
            }
        } 
        return true     
    }

    async dataCalculation(obj, objJson) {
        //obj - поля вводу , які виуористовутимуться
        //objJson - дані, які потрібно ввести
    const keys = Object.keys(objJson) 
        for(let key in keys) {
            let namePropData = await keys[key];
            let elemDataInput = await elements(obj).get(+key).sendKeys(objJson[namePropData])
        }
    }

    async clickCheckbox(checkboxes, clickObject) {
        //let objectsCheck = await Object.keys(await elements(clickObject));
        //await console.log( await elements(clickObject))
        //await console.log(objectsCheck)
        //let checkboxes = await objectsCheck.length; 
        //await console.log(checkboxes) 
        let randomNumber = await Math.floor(Math.random() * checkboxes)
        await console.log(randomNumber)
        await elements(clickObject).get(randomNumber).click()
        await console.log(await elements(clickObject).get(randomNumber).getText())
        //await console.log(await elements(clickObject).get(0))
    }

}

module.exports = UserPage