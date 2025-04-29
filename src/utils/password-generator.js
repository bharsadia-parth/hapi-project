const bcrypt = require("bcryptjs");


const generatePassword = async (password) => {

    let response = await bcrypt.hash(password, 10)
    console.log("response", response)
    return response;
}

module.exports = {
    generatePassword
}