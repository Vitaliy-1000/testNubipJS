
const awb = require('awb')

const {client: browser, element } = awb()

class Login {
    constructor() {
        this.baseURL = 'http://localhost:3000'
        this.inputName = element('#formHorizontalEmail')
    }
}

module.exports = Login