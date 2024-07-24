import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IncidenceInterface } from "../Reducers/incidents.reducer"

const incidentsFeatureSelector=createFeatureSelector<IncidenceInterface>('incidents')


//get all Incidents
export const  incidentsSelector=createSelector(incidentsFeatureSelector,
    (state)=>state.incidentsGetSuccessMessage
)