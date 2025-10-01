// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path : './env'
})


connectDB()


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
