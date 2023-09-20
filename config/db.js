import mongoose from "mongoose";

 const connectDB = async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`Conneted to Mongodb Database ${conn.connection.host}`);
    }catch(err) {
        console.log(`Error in Mongodb ${error}`)
    }
 }

 export default connectDB;