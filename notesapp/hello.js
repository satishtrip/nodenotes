appp = require('./nts.js')
const chalk = require('chalk')
const validator = require('validator')
const prod = appp()

console.log(prod)
console.log("function has been called")
console.log(validator.isEmail('satishl.com'))
console.log(validator.isURL('https://nodejs.org/en/'))
const redmsg = chalk.green.underline.bold('hey')
console.log(redmsg)
const msg = chalk.red.inverse.bold('brother')
console.log(msg)