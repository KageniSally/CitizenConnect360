import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { PollsService } from "../../../Services/polls.service"
import { catchError, concatMap, map, of } from "rxjs"
import { PollActions } from "../Actions/polls.actions"
import { ToastrService } from "ngx-toastr"

@Injectable()

export class PollEffects {
    constructor(private actions$: Actions, private pollService: PollsService, private toastr:ToastrService) { }

    addPoll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PollActions.addPolls),
            concatMap (({newPoll}) => this.pollService.addPoll(newPoll).pipe(
                map(res =>{
                    this.toastr.success(res.message,'Success')
                    return PollActions.addPollsSuccess({ response: res })
                } ),
                catchError(error => of(PollActions.addPollsFailure({message:error})))
            )

            )
        )
    })

}