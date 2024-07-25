import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { onePoll, Poll, PollChoiceResponse, PollRequest, PollResponse, Responses } from "../../../Models/pollModel";

export const PollActions = createActionGroup({
    source: "POLL API",
    events: {
        'add polls': props<{ newPoll: PollRequest }>(),
        'add polls success': props<{ response: PollResponse }>(),
        'add polls failure': props<{ message: string }>(),


        'get polls': emptyProps,
        'get polls success': props<{ polls: Poll[] }>(),
        'get polls failure': props<{ message: string }>(),



        //Get specific Poll
        'get specific poll': props<{ id: string }>(),
        'get specific poll success': props<{ poll: onePoll }>(),
        'get specific poll failure': props<{ message: string }>(),


        //Add Poll Response
        'add poll response': props<{ newPollResponse:PollChoiceResponse  }>(),
        'add poll response success': props<{ response: PollResponse }>(),
        'add poll response failure': props<{ message: string }>(),

    }
})