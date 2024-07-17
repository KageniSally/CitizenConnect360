import { Router } from "express"
import { deleteUser, getUser, getUserApproved, getUserNotApproved, getUsers, updateUser } from "../controllers/userController"

const userRoutes = Router()

console.log("userRoutes");

userRoutes.get('', getUsers)
userRoutes.get('/:id', getUser)
userRoutes.delete('/:id', deleteUser)
console.log("userRoutes 2");
userRoutes.get('/notApproved', getUserNotApproved)
userRoutes.get('/approved', getUserApproved)
userRoutes.put('/:id',updateUser)

export default userRoutes