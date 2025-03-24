var generatePassword = require('password-generator');
function getPassword() {
    console.log(generatePassword());
}

getPassword();