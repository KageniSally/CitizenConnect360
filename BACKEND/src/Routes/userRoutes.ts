import { Router } from "express"
import { approveUser, deleteUser, getUser, getUserApproved, getUserNotApproved, getUsers, updateUser } from "../controllers/userController"

const userRoutes = Router()

console.log("userRoutes");

userRoutes.get('', getUsers)
userRoutes.get('/:id', getUser)
userRoutes.delete('/:id', deleteUser)
userRoutes.put('/approve/:id',approveUser)
userRoutes.put('/:id',updateUser)
userRoutes.get('/notApproved/new', getUserNotApproved)
userRoutes.get('/approved/new/approved', getUserApproved)
// userRoutes.put('/:id',updateUser)

export default userRoutes