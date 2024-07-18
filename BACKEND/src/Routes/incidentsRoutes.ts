import { Router } from "express";
import { addIncidence, deleteIncident, getIncident, getIncidents } from "../controllers/incidentsController";

const incidentsRoutes=Router()

incidentsRoutes.post('',addIncidence)
incidentsRoutes.get('',getIncidents)
incidentsRoutes.get('/:id',getIncident)
incidentsRoutes.delete('/:id',deleteIncident)

export default incidentsRoutes