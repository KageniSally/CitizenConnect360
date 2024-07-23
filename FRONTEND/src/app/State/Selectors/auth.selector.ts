import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducer";


const authSelectorFeatureSelector=createFeatureSelector<AuthInterface>('auth')


export const errorSelector=createSelector(authSelectorFeatureSelector,(state)=>state.loginErrorMessage)
export const successSelector=createSelector(authSelectorFeatureSelector,(state)=>state.loginSuccessMessage)

// export const usersArraySelector=createSelector(
//     authSelectorFeatureSelector,(state)=>
//         state.usersGetErrorMessage
// )


//Get all approved  users
export const usersApprovedSelector=createSelector(authSelectorFeatureSelector,(state)=>
state.usersGetSuccessMessage)



//Get all not approved  users
export const usersNotApprovedSelector=createSelector(authSelectorFeatureSelector,(state)=>
    state.notApproved)