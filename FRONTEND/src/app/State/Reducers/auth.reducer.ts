import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "../Actions/auth.actions"
import { User } from "../../../Models/authModel"
import { act } from "@ngrx/effects"

export interface AuthInterface {
    registerSuccessMessage: string,
    registerErrorMessage: string,
    registerLoading: boolean,

    loginSuccessMessage: string,
    loginErrorMessage: string,
    loginLoading: boolean,

    usersGetSuccessMessage:User[],
    usersGetErrorMessage:string,
    usersGetLoading:boolean,


    notApproved:User[],
    notApprovedGetErrorMessage:string,
    notApprovedGetLoading:boolean
}


const initialState: AuthInterface = {
    registerSuccessMessage: '',
    registerErrorMessage: '',
    registerLoading: false,
    loginSuccessMessage: '',
    loginErrorMessage: '',
    loginLoading: false,
    usersGetSuccessMessage:[],
    usersGetErrorMessage:'',
    usersGetLoading:false,
    notApproved:[],
    notApprovedGetErrorMessage:'',
    notApprovedGetLoading:false
}


export const authReducer = createReducer(
    initialState,
    on(AuthActions.register, state => {        
        return {
            ...state,
            registerSuccessMessage: '',
            registerErrorMessage: '',
            registerLoading: true
        }
    }),


    on(AuthActions.registerSuccess, (state, action) => {
        return {
            ...state,
            registerSuccessMessage: action.response.message,
            registerErrorMessage: '',
            registerLoading: false
        }
    }),


    on(AuthActions.registerFailure, (state, { message })=> {
    return {
        ...state,
        registerSuccessMessage: '',
        registerErrorMessage: message,
        registerLoading: false
    }
}),


on(AuthActions.login, state => {
    return {
        ...state,
        loginSuccessMessage: '',
        loginErrorMessage: '',
        loginLoading: true
    }
}),


on(AuthActions.loginSuccess, (state, action) => {
    return {
        ...state,
        loginSuccessMessage: action.response.message,
        loginErrorMessage: '',
        loginLoading: false
    }
}),


on(AuthActions.loginFailure, (state, { message })=> {
return {
    ...state,
    loginSuccessMessage: '',
    loginErrorMessage: message,
    loginLoading: false
}
}),


on(AuthActions.getUsersApproved,(state)=>{
    return{
        ...state,
        usersGetSuccessMessage:[],
        usersGetErrorMessage:'',
        usersGetLoading:true
    }
}),


on(AuthActions.getUsersApprovedSuccess,(state,{users})=>{
    return{
        ...state,
        usersGetSuccessMessage:users,
        usersGetErrorMessage:'',
        usersGetLoading:false
    }
}),
on(AuthActions.getUsersApprovedFailure,(state,action)=>{
    return{
        ...state,
        usersGetSuccessMessage:[],
        usersGetErrorMessage:action.message,
        usersGetLoading:false
    }
})
,


on(AuthActions.getUsersNotApproved,(state)=>{
    return{
        ...state,
        notApproved:[],
        notApprovedGetErrorMessage:'',
        notApprovedGetLoading:true
    }
}),


on(AuthActions.getUsersNotApprovedSuccess,(state,{users})=>{
    return{
        ...state,
        notApproved:users,
        notApprovedGetErrorMessage:'',
        notApprovedGetLoading:false
    }
}),
on(AuthActions.getUsersNotApprovedFailure,(state,action)=>{
    return{
        ...state,
        notApproved:[],
        notApprovedGetErrorMessage:action.message,
        notApprovedGetLoading:false
    }
}),



// Delete User Actions
on(AuthActions.deleteUser, state => ({
    ...state,
    usersGetLoading: true,
    usersGetErrorMessage: '',
    notApprovedGetLoading: true,
    notApprovedGetErrorMessage: ''
})),

on(AuthActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    usersGetSuccessMessage: state.usersGetSuccessMessage.filter(user => user.id !== id),
    notApproved: state.notApproved.filter(user => user.id !== id),
    usersGetLoading: false,
    notApprovedGetLoading: false
})),

on(AuthActions.deleteUserFailure, (state, { message }) => ({
    ...state,
    usersGetLoading: false,
    notApprovedGetLoading: false,
    usersGetErrorMessage: message,
    notApprovedGetErrorMessage: message
})),



// Update User Approval Actions
on(AuthActions.updateUserApproval, state => ({
    ...state,
    usersGetLoading: true,
    usersGetErrorMessage: ''
  })),

  on(AuthActions.updateUserApprovalSuccess, (state, { id, isApproved }) => ({
    ...state,
    usersGetSuccessMessage: state.usersGetSuccessMessage.map(user =>
      user.id === id ? { ...user, isApproved } : user
    ),
    notApproved: state.notApproved.filter(user => user.id !== id),
    usersGetLoading: false
  })),

  on(AuthActions.updateUserApprovalFailure, (state, { message }) => ({
    ...state,
    usersGetLoading: false,
    usersGetErrorMessage: message
  }))
)