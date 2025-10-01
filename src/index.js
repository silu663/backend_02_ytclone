// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,() => {

        console.log(`http://localhost${process.env.PORT}`);
        

    })
})
.catch((error) => {
    console.log('MONGODB connection error !!!',error);
    
})


/*

// it is the first approach for database connection ***********

import express from "express";
const app = express()

;(async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
       app.on("error",(error) => {
        console.log('error',error);
        throw error
       })

       app.listen(process.env.PORT,() => {
        console.log(`app is listening`);
        console.log(`http://localhost:${process.env.PORT}`);
        
        
       })
        
    } catch (error) {
        console.log('error',error);
        throw error
        
    }

})()

*/
