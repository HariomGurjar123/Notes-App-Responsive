import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './src/database/db.js';

dotenv.config({
    path:'/.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server has started on http://localhost:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("server refused",err);
})
 