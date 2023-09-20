import express from "express"
import dotenv from 'dotenv'
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"

const app = express()


//config dotenv
 dotenv.config()

 //database config
 connectDB();

 //middleware
 app.use(express.json());
 app.use(morgan('dev'))

 //routers
 app.use("/api/v1/auth", authRoutes);

app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to AJ-Styles ecommerce App"
    })
})



const PORT=process.env.PORT || 8080;
//RUN LISTEN
app.listen(PORT,()=>{
console.log(`Server is running on ${PORT}`);
})