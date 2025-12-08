import express from "express";
import { config } from "dotenv";
import { securePass } from "./middlewares/authmiddleware";
import { checkPassword } from "./Config/crypto";
import User from "./models/user";
import connectDB from "./Config/connectDB.js"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
config()

connectDB(process.env.DATABASE_NAME)

const PORT = process.env.PORT
const SECRET_KEY = "doing_my_homework_!"

const server = express ()
server.use(express.urlencoded)({extended: true})
server.use(express.json())
server.use(cookieParser ())

server.use("/signup", securePass)
server.post("/signup", async (req, res, next) => {
       try{
        const newUser = new User(req.body)
        const createdUser = await newUser.save()
         res.status(201).json(createdUser)
         next()
       }catch(error){
        console.error(error);
       }
      })

server.post("/login", async (req, res, next) => {
       try{
        const fetchedUser = await User.findOne({username: req.body.username})
        console.log(fetchedUser);
        if(checkPassword(fetchedUser.password, req.body.password)) return res.status(200).json({message: `Welcome Back ${fetchedUser.username}`})
       
          return res.status(400).json({message: "wrongPassword"})
        } catch (error) {
         console.error(error);
       }

       const payload = {
        username,
        password
       };
       const token = jwt.sign(
        payload,
        SECRET_KEY,
        { expiresIn: "1h"}
       );

       res.json({ token });

       res.cookie("token", token, {
        httpOnly: true,
        
       });

})
      
server.listen(PORT, () => {
  console.log(`Runing on http://localhost${PORT}`);

})
