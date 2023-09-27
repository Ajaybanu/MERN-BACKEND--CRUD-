import express from "express";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import {
      categoryControlller,
      createCategoryController,
      deleteCategoryController,
      singleCategoryController,
      updateCategoryController
     } from "../controller/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);


//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );

  //getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//Delete category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController)
  


export default router;