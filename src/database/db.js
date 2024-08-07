import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION)
        console.log("database connected successfully");
    } catch (error) {
        console.log("db connection failed" , error);
        process.exit(1);
    }
}

export default connectDB