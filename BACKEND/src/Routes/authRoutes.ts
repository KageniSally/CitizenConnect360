import { Router } from "express";
import { forgotPassword, loginUser, registerUser } from "../controllers/authController";

const authRoutes=Router()


authRoutes.post('/register',registerUser)
authRoutes.post('/login',loginUser)
authRoutes.patch('/forgotPass/:email',forgotPassword)



console.log("authroutes")
export default authRoutes