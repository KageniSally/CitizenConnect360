import { Injectable, viewChild } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ViewsService } from "../../../Services/views.service";
import { ViewsActions } from "../Actions/views.actions";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";


@Injectable()

export class ViewsEffects {
    constructor(private actions$: Actions, private viewsService: ViewsService) { }

    addView$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ViewsActions.addView),
            concatMap (({newView}) => this.viewsService.addView(newView).pipe(
                map(res => ViewsActions.addViewSuccess({ response: res })),
                catchError(error => of(ViewsActions.addViewFailure({message:error})))
            )

            )
        )
    })



    getViews$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ViewsActions.getViews),
            concatMap(req => this.viewsService.getViews().pipe(
                map(res => {
                    return ViewsActions.getViewsSuccess({ views: res })
                })
            )),
            catchError(error => of(ViewsActions.getViewsFailure({ message: error })))
        )
    })


    

}
