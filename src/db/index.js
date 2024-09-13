import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://navyum:navyum234@cluster0.os2qfzq.mongodb.net/${DB_NAME}`)
        // console.log(connectionInstance);
        console.log(`\n MongoDB connected !! DB HOST:`);
    } catch (error) {
        console.error(" MONGODB connection FAILED : ", error);
        process.exit(1)
    }
}

export default connectDB