import { Router } from "express";
import { addView, deleteView, getView, getViews } from "../controllers/viewsController";
import { verifyToken } from "../Middleware";

const viewRoutes = Router()

viewRoutes.post('',verifyToken, addView)
viewRoutes.get('',verifyToken, getViews)
viewRoutes.get('/:id', verifyToken,getView)
viewRoutes.delete('/:id',verifyToken, deleteView)

export default viewRoutes