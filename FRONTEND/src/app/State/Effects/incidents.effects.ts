import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { IncidentsService } from "../../../Services/incidents.service"
import { IncidentsActions } from "../Actions/incidents.actions"
import { catchError, concatMap, map, of } from "rxjs"

@Injectable()

export class IncidentsEffects {
    constructor(private actions$: Actions, private incidentsService: IncidentsService) { }

    addIncident$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(IncidentsActions.addIncidents),
            concatMap (({newIncidents}) => this.incidentsService.addIncident(newIncidents).pipe(
                map(res => IncidentsActions.addIncidentsSuccess({ response: res })),
                catchError(error => of(IncidentsActions.addIncidentsFailure({message:error})))
            )

            )
        )
    })



    getViews$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(IncidentsActions.getIncidents),
            concatMap(req => this.incidentsService.getIncidents().pipe(
                map(res => {
                    return IncidentsActions.getIncidentsSuccess({ incidents: res })
                })
            )),
            catchError(error => of(IncidentsActions.getIncidentsFailure({ message: error })))
        )
    })


    

}
