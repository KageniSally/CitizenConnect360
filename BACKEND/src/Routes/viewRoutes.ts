import { Router } from "express";
import { addView, deleteView, getView, getViews } from "../controllers/viewsController";

const viewRoutes = Router()

viewRoutes.post('', addView)
viewRoutes.get('', getViews)
viewRoutes.get('/:id', getView)
viewRoutes.delete('/:id', deleteView)

export default viewRoutes