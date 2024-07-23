import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ViewInterface } from "../Reducers/views.reducer";

const viewsFeatureSelector=createFeatureSelector<ViewInterface>('views')


//get all views
export const viewsSelector=createSelector(viewsFeatureSelector,state=>
    state.viewGetSuccessMessage
)