import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PollInterface } from "../Reducers/polls.reducer";

const pollsFeatureSelector=createFeatureSelector<PollInterface>('polls')



//get all polls
export const pollsSelector=createSelector(pollsFeatureSelector,state=>
    state.pollGetSuccessMessage
)

//get Specific Poll
export const specificPollSelector = createSelector(
    pollsFeatureSelector,
    (state: PollInterface) => state.specificPollSuccessMessage
)