import express from "express"
import dotenv from 'dotenv'
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoute.js"
import cors from 'cors'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url));

//config dotenv
 dotenv.config()

 //database config
 connectDB();

 //middleware
 app.use(cors());
 app.use(express.json());
 app.use(morgan('dev'))

 //routers
 app.use("/api/v1/auth", authRoutes);
 app.use("/api/v1/category", categoryRoutes);
 app.use("/api/v1/product", productRoutes);

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