import express from 'express'
import {registerController,
    loginController,
    testController,
    forgotPasswordController,
 } from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
//router object
const router = express.Router()

//routing
//Register || METHOD POST
router.post('/register', registerController)

//LOGIN \\ POST
router.post('/login',loginController)

//forget password // post 
 router.post ('/forgot-password',forgotPasswordController)

//test routes
router.get("/test",requireSignIn,isAdmin, testController)

//protected route auth

router.get("/user-auth", requireSignIn, (req,res)=>{

})

export default router 