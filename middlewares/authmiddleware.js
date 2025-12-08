import { createSecuredPass } from "../Config/crypto.js";

function securePass(req, res, next){
    console.log(req.body);
    req.body.password = createSecuredPass(req.body.password)
    next()
}

export {
    securePass
}