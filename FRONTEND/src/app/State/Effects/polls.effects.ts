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




    getPolls$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PollActions.getPolls),
            concatMap(req => this.pollService.getPolls().pipe(
                map(res => {
                    return PollActions.getPollsSuccess({ polls: res })
                })
            )),
            catchError(error => of(PollActions.getPollsFailure({ message: error })))
        )
    })



    // Effect for getting a specific poll
    getSpecificPoll$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PollActions.getSpecificPoll),
            concatMap(({ id }) =>
                this.pollService.getSpecificPoll(id).pipe(
                    map(res => {
                        return PollActions.getSpecificPollSuccess({ poll: res });
                    }),
                    catchError(error => of(PollActions.getSpecificPollFailure({ message: error.message })))
                )
            )
        );
    });



    //Add Poll Response
    addPollResponse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PollActions.addPollResponse),
            concatMap (({newPollResponse}) => this.pollService.addPollResponse(newPollResponse).pipe(
                map(res =>{
                    this.toastr.success(res.message,'Success')
                    return PollActions.addPollResponseSuccess({ response: res })
                } ),
                catchError(error => of(PollActions.addPollResponseFailure({message:error})))
            )

            )
        )
    })

}