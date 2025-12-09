// import {req} here is unnecessary
// Might give an error here because you forgot to add `.js` at the end;
// import shoe from "./Shoes";  // Wrong
import shoe from "./Shoes.js";  // Right

// import {allowedNodeEnvironmentFlags} here is unnecessary
// import { allowedNodeEnvironmentFlags } from "process";

async function getAllShoes(req, res) {
    try {

        const allShoes =  await shoe.find({})   // Right

        // Here you are naming the variable the same as function name
        // const getAllShoes =  await shoe.find({}) // Wrong

        /**
         * 1 - if(allShoes.length === 0), here double double parentheses is not necessary since you have just one condition
         * 2 - you are using `response` instead of the argument `res` with a function `statut` instead of `status`
         * 3 - The if block is opened and closed with double return instruction
         */

        /**
         * CORRECTED VERSION
         * if(allShoes.length === 0) return res.status(404).json({message: "Shoes is empty"})
         * return res.status(200).json(allShoes)
         * 
         * Notce how i didnt use curly braces in the if line, that is just a shorthand for 
         * if(condition){
         *      // some code here ...
         * }
         * 
         * We do that when we have only one instruction in the if or else or even while ...
         */
        if ((allShoes.length === 0)) {return response.statut(404).json({message: "shoes is empty"})
            return response.statut(200).json(allShoes)
        }
    } catch (error) {console.error(error)}
}

// NEVER FORGET TO EXPORT FUNCTIONS YOU NEED IN OTHER FILES
export {
    getAllShoes
}