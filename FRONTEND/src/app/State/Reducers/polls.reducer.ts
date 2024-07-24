import { createReducer, on } from "@ngrx/store"
import { PollActions } from "../Actions/polls.actions"

export interface PollInterface {
    pollAddSuccessMessage: string,
    pollAddErrorMessage: string,
    pollAddLoading: boolean
}




const initialState: PollInterface = {
    pollAddSuccessMessage: '',
    pollAddErrorMessage: '',
    pollAddLoading: false
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
)
