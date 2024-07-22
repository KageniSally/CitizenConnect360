import { Router } from "express";
import { addIncidence, deleteIncident, getIncident, getIncidents } from "../controllers/incidentsController";
import { verifyToken } from "../Middleware";

const incidentsRoutes=Router()

incidentsRoutes.post('',verifyToken, addIncidence)
incidentsRoutes.get('',verifyToken,getIncidents)
incidentsRoutes.get('/:id',verifyToken, getIncident)
incidentsRoutes.delete('/:id',verifyToken, deleteIncident)

export default incidentsRoutes