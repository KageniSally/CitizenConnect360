import { Router } from "express"
import { addPoll, addResponse, getPollById, getPolls } from "../controllers/pollsController"
import { verifyToken } from "../Middleware"


const pollRoutes=Router()

pollRoutes.post('',verifyToken,addPoll)
pollRoutes.get('',getPolls)
pollRoutes.post('/addResponse',verifyToken,addResponse)
pollRoutes.get('/:id',getPollById)


export default pollRoutes