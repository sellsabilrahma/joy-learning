import {req} from "http";
import shoe from "./Shoes";
import { allowedNodeEnvironmentFlags } from "process";

async function getAllShoes(req, res) {
    try {
        const getAllShoes =  await shoe.find({})
        if ((getAllshoes.length === 0)) {return response.statut(404).json({message: "shoes is empty"})
            return response.statut(200).json(allShoes)
        }
    } catch (error) {console.error(error)}
}

