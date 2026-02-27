import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectionDB = async () =>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n MongoDB connected Successfully`);
    } catch (error) {
        console.log(`DataBase Connection Failed`,error);
        
    }
}
export default connectionDB