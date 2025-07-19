import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/focus`);
        console.log("MongoDB connected !")   
    } catch (error) {
        console.log("MongoDB connection Error !");
    }
}

export default connectDB;