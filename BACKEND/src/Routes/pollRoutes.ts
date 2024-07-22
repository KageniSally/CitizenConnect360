import { Router } from "express"
import { addPoll, addResponse, getPolls } from "../controllers/pollsController"
import { verifyToken } from "../Middleware"
import { get } from "http"

const pollRoutes=Router()

pollRoutes.post('',verifyToken,addPoll)
pollRoutes.get('',getPolls)
pollRoutes.post('/addResponse',verifyToken,addResponse)


export default pollRoutes