import express from "express"
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { 
      createProductController,
       getProductController, 
       getSingleProductController,
       productPhotoController}
from "../controller/productController.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const router = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));
//routes create products
//routes
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
  );
  //get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

export default router