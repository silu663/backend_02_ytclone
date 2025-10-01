import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
    try {

       const conncectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
       console.log(`mongodb conncted ! and connction instance\n ${conncectionInstance.connection.host} `);
       
    } catch (error) {
        console.log("mongodb connection error",error);
        process.exit(1)
    }
    
}

export default connectDB