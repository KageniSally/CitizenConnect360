import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { IncidentsService } from "../../../Services/incidents.service"
import { IncidentsActions } from "../Actions/incidents.actions"
import { catchError, concatMap, map, of } from "rxjs"
import { ToastrService } from "ngx-toastr"

@Injectable()

export class IncidentsEffects {
    constructor(private actions$: Actions, private incidentsService: IncidentsService,private toastr:ToastrService) { }

    addIncident$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(IncidentsActions.addIncidents),
            concatMap (({newIncidents}) => this.incidentsService.addIncident(newIncidents).pipe(
                map(res => {
                    this.toastr.success("Incidents Added successfully")  
                    return IncidentsActions.addIncidentsSuccess({ response: res })}),
                catchError(error => {
                    this.toastr.error("Incidents Add Failed")
                    return of(IncidentsActions.addIncidentsFailure({message:error}))})
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
