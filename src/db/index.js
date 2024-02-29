import mongoose from "mongoose"
import {DB_NAME} from "../constants.js "

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log(`\n Error connecting to the database: ${error}\n`);
        Process.exit(1)
    }


}
export default connectDB;