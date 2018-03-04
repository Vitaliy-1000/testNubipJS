const { element, elements } = require('../dataDriverTesting/dataDriverAWB')

class Login {
    constructor() {
        this.baseURL = 'http://localhost:3000'
        this.inputName = element('#formHorizontalEmail')
    }
}

module.exports = Login
