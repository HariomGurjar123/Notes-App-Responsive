import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from 'url';
import { registerUser } from "./src/controller/user.controller.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors(
   {
    origin:process.env.CORS_ORIGIN,
    credentials:true
   }
))

app.use(express.json({limit:"64kb"}));
app.use(express.urlencoded({urlencoded:true}));
app.use(cookieParser());



app.get('/',(req,res)=>{
        res.sendFile("pages/index.html",{root:__dirname})
})
app.get('/login',(req,res)=>{
    res.sendFile("pages/login.html",{root:__dirname})
})
app.get('/signup',(req,res)=>{
    res.sendFile("pages/signup.html",{root:__dirname})
})
app.get('/Important-Notes',(req,res)=>{
    res.sendFile("pages/importantNotes.html",{root:__dirname})
})
app.get("/Notes",(req,res)=>{
    res.sendFile("pages/Notes.html",{root:__dirname})
})
app.get("/change-Password",(req,res)=>{
    res.sendFile("pages/password.html",{root:__dirname})
})
// routes 

import userRouter from './src/routes/user.route.js';

app.use("/",userRouter)



export {app}