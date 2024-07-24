import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Poll, PollRequest, PollResponse } from "../../../Models/pollModel";

export const PollActions = createActionGroup({
    source: "POLL API",
    events: {
        'add polls': props<{ newPoll: PollRequest }>(),
        'add polls success': props<{ response: PollResponse }>(),
        'add polls failure': props<{ message: string }>(),


        'get polls': emptyProps,
        'get polls success': props<{ polls: Poll[] }>(),
        'get polls failure': props<{ message: string }>()
    }})