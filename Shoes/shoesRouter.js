import { Router } from "express";

// import controller functions
import { getAllShoes } from "./shoesController.js";

const shoesRouter = Router ()

shoesRouter.get("/", getAllShoes)

export default shoesRouter
