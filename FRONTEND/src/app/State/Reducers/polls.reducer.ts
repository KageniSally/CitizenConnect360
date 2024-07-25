import { createReducer, on } from "@ngrx/store"
import { PollActions } from "../Actions/polls.actions"
import { onePoll, Poll } from "../../../Models/pollModel"

export interface PollInterface {
    pollAddSuccessMessage: string,
    pollAddErrorMessage: string,
    pollAddLoading: boolean,

    pollGetSuccessMessage: Poll[],
    pollGetErrorMessage: string,
    pollGetLoading: boolean,


    specificPollSuccessMessage: onePoll | null,
    specificPollErrorMessage: string,
    specificPollLoading: boolean



    pollResponseAddSuccessMessage: string,
    pollResponseAddErrorMessage: string,
    pollResponseAddLoading: boolean,
}




const initialState: PollInterface = {
    pollAddSuccessMessage: '',
    pollAddErrorMessage: '',
    pollAddLoading: false,


    pollGetSuccessMessage: [],
    pollGetErrorMessage: '',
    pollGetLoading: false,


    specificPollSuccessMessage: null,
    specificPollErrorMessage: '',
    specificPollLoading: false,


    pollResponseAddSuccessMessage: '',
    pollResponseAddErrorMessage: '',
    pollResponseAddLoading: false,
}



export const PollReducer = createReducer(
    initialState,


    on(PollActions.addPolls, state => {
        return {
            ...state,
            pollAddSuccessMessage: '',
            pollAddErrorMessage: '',
            pollAddLoading: true,
        }
    }),

    on(PollActions.addPollsSuccess, (state, action) => {
        return {
            ...state,
            pollAddSuccessMessage: action.response.message,
            pollAddErrorMessage: '',
            pollAddLoading: false,
        }
    }),

    on(PollActions.addPollsFailure, (state, { message }) => {
        return {
            ...state,
            pollAddSuccessMessage: '',
            pollAddErrorMessage: message,
            pollAddLoading: false,
        }
    }),


    on(PollActions.getPolls, state => {
        return {
            ...state,
            pollGetSuccessMessage: [],
            pollGetErrorMessage: '',
            pollGetLoading: true,
        }
    }),


    on(PollActions.getPollsSuccess, (state, { polls }) => {
        return {
            ...state,
            pollGetSuccessMessage: polls,
            pollGetErrorMessage: '',
            pollGetLoading: false
        }
    }),



    on(PollActions.getPollsFailure, (state, action) => {
        return {
            ...state,
            pollGetSuccessMessage: [],
            pollGetErrorMessage: action.message,
            pollGetLoading: false
        }
    }),


    //Get specific poll
    // Get Specific Poll Reducers
    on(PollActions.getSpecificPoll, state => ({
        ...state,
        specificPollSuccessMessage: null,
        specificPollErrorMessage: '',
        specificPollLoading: true,
    })),

    on(PollActions.getSpecificPollSuccess, (state, action) => ({
        ...state,
        specificPollSuccessMessage: action.poll,
        specificPollErrorMessage: '',
        specificPollLoading: false,
    })),

    on(PollActions.getSpecificPollFailure, (state, action) => ({
        ...state,
        specificPollSuccessMessage: null,
        specificPollErrorMessage: action.message,
        specificPollLoading: false,
    })),



    //Add poll response
    on(PollActions.addPollResponse, state => {
        return {
            ...state,
            pollResponseAddSuccessMessage: '',
            pollResponseAddErrorMessage: '',
            pollResponseAddLoading: true,
        }
    }),

    on(PollActions.addPollResponseSuccess, (state, action) => {
        return {
            ...state,
            pollResponseAddSuccessMessage: action.response.message,
            pollResponseAddErrorMessage: '',
            pollResponseAddLoading: false,
        }
    }),

    on(PollActions.addPollResponseFailure, (state, { message }) => {
        return {
            ...state,
            pollResponseAddSuccessMessage: '',
            pollResponseAddErrorMessage: message,
            pollResponseAddLoading: false,
        }
    }),

)
