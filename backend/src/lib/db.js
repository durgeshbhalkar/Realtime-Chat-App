import mongoose from "mongoose";

export const connectDB = async ()=> {
    try {
       const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log("mongo db Connected ", conn.connection.host);
    } catch (error) {
        console.error("Error Conection to MONGO",error);
        process.env(1);// 1 status code means failed , 0 means success
    
    }
}