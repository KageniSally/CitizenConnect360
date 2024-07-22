import { Router } from "express"
import { approveUser, deleteUser, getUser, getUserApproved, getUserNotApproved, getUsers, updateUser } from "../controllers/userController"
import { verifyToken } from "../Middleware";

const userRoutes = Router()

console.log("userRoutes");

userRoutes.get('',verifyToken, getUsers)
userRoutes.get('/:id',verifyToken, getUser)
userRoutes.delete('/:id',verifyToken, deleteUser)
userRoutes.put('/approve/:id',verifyToken,approveUser)
userRoutes.put('/:id',verifyToken,updateUser)
userRoutes.get('/notApproved/new',verifyToken, getUserNotApproved)
userRoutes.get('/approved/new/approved',verifyToken, getUserApproved)
// userRoutes.put('/:id',updateUser)

export default userRoutes