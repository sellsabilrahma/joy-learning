import {hash} from "node:crypto"

function createSecuredPass(password){
    return hash("sha1", password)
}

function checkPassword(encryptedPass, password){
    console.log(typeof password,password)
    const newPassword = hash("sha1", password)

    return encryptedPass === newPassword
}

export {
    createSecuredPass,
    checkPassword
}