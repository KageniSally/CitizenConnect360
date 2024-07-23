import { createReducer, on } from "@ngrx/store";
import { View } from "../../../Models/viewModel";
import { ViewsActions } from "../Actions/views.actions";

export interface ViewInterface {
    viewAddSuccessMessage: string,
    viewAddErrorMessage: string,
    viewAddLoading: boolean,


    viewGetSuccessMessage: View[],
    viewGetErrorMessage: string,
    viewGetLoading: boolean,
}



const initialState: ViewInterface = {
    viewAddSuccessMessage: '',
    viewAddErrorMessage: '',
    viewAddLoading: false,


    viewGetSuccessMessage: [],
    viewGetErrorMessage: '',
    viewGetLoading: false,
}



export const ViewReducer = createReducer(
    initialState,
    on(ViewsActions.addView, state => {
        return {
            ...state,
            viewAddSuccessMessage: '',
            viewAddErrorMessage: '',
            viewAddLoading: true,
        }
    }),

    on(ViewsActions.addViewSuccess, (state, action) => {
        return {
            ...state,
            viewAddSuccessMessage: action.response.message,
            viewAddErrorMessage: '',
            viewAddLoading: false,
        }
    }),

    on(ViewsActions.addViewFailure, (state, { message }) => {
        return {
            ...state,
            viewAddSuccessMessage: '',
            viewAddErrorMessage: message,
            viewAddLoading: false,
        }
    }),


    on(ViewsActions.getViews, state => {
        return {
            ...state,
            viewGetSuccessMessage: [],
            viewGetErrorMessage: '',
            viewGetLoading: true,
        }
    }),


    on(ViewsActions.getViewsSuccess,(state,{views})=>{
        return{
            ...state,
            viewGetSuccessMessage:views,
            viewGetErrorMessage:'',
            viewGetLoading:false
        }
    }),



    on(ViewsActions.getViewsFailure,(state,action)=>{
        return{
            ...state,
            viewGetSuccessMessage:[],
            viewGetErrorMessage:action.message,
            viewGetLoading:false
        }
    })
)