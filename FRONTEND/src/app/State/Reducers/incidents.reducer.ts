import { createReducer, on } from "@ngrx/store"
import { Incidence } from "../../../Models/incidenceModel"
import { IncidentsActions } from "../Actions/incidents.actions"

export interface IncidenceInterface {
    incidentsAddSuccessMessage: string,
    incidentsAddErrorMessage: string,
    incidentsAddLoading: boolean,


    incidentsGetSuccessMessage: Incidence[],
    incidentsGetErrorMessage: string,
    incidentsGetLoading: boolean,
}



const initialState: IncidenceInterface = {
    incidentsAddSuccessMessage: '',
    incidentsAddErrorMessage: '',
    incidentsAddLoading: false,


    incidentsGetSuccessMessage: [],
    incidentsGetErrorMessage: '',
    incidentsGetLoading: false,
}



export const IncidentsReducer = createReducer(
    initialState,
    on(IncidentsActions.addIncidents, state => {
        return {
            ...state,
            incidentsAddSuccessMessage: '',
            incidentsAddErrorMessage: '',
            incidentsAddLoading: true,
        }
    }),

    on(IncidentsActions.addIncidentsSuccess, (state, action) => {
        return {
            ...state,
            incidentsAddSuccessMessage: action.response.message,
            incidentsAddErrorMessage: '',
            incidentsAddLoading: false,
        }
    }),

    on(IncidentsActions.addIncidentsFailure, (state, { message }) => {
        return {
            ...state,
            incidentsAddSuccessMessage: '',
            incidentsAddErrorMessage: message,
            incidentsAddLoading: false,
        }
    }),


    on(IncidentsActions.getIncidents, (state) => {
        return {
            ...state,
            incidentsGetSuccessMessage: [],
            incidentsGetErrorMessage: '',
            incidentsGetLoading: true
        }
    }),


    on(IncidentsActions.getIncidentsSuccess, (state, { incidents }) => {
        return {
            ...state,
            incidentsGetSuccessMessage: incidents,
            incidentsGetErrorMessage: '',
            incidentsGetLoading: false
        }
    }),
    on(IncidentsActions.getIncidentsFailure, (state, action) => {
        return {
            ...state,
            incidentsGetSuccessMessage: [],
            incidentsGetErrorMessage: action.message,
            incidentsGetLoading: false
        }
    })
)
