import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Incidence, IncidenceResponse, IncidentsRequest } from "../../../Models/incidenceModel";

export const IncidentsActions = createActionGroup({
    source: "INCIDENTS API",
    events: {
        'add incidents': props<{ newIncidents: IncidentsRequest }>(),
        'add incidents success': props<{ response: IncidenceResponse }>(),
        'add incidents failure': props<{ message: string }>(),


        'get incidents': emptyProps,
        'get incidents success': props<{ incidents: Incidence[] }>(),
        'get incidents failure': props<{ message: string }>()

    }
})