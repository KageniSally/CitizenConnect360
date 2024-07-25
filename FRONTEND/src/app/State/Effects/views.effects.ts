import { Injectable, viewChild } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ViewsService } from "../../../Services/views.service";
import { ViewsActions } from "../Actions/views.actions";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import { ToastrService } from "ngx-toastr";


@Injectable()

export class ViewsEffects {
    constructor(private actions$: Actions, private viewsService: ViewsService, private toastr:ToastrService) { }

    addView$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ViewsActions.addView),
            concatMap (({newView}) => this.viewsService.addView(newView).pipe(
                map(
                  
                  res => {
                    this.toastr.success("View Added successfully")  
                     return ViewsActions.addViewSuccess({ response: res })}),
                catchError(error => {
                    this.toastr.error("View Add Failed")  
                    return of(ViewsActions.addViewFailure({message:error}))})
            )

            )
        )
    })



    getViews$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ViewsActions.getViews),
            concatMap(
              req =>{ 
                this.toastr.info("Getting views") 
                return this.viewsService.getViews().pipe(
                map(res => {
                    return ViewsActions.getViewsSuccess({ views: res })
                })
            )}),
            catchError(error => of(ViewsActions.getViewsFailure({ message: error })))
        )
    })


    

}
