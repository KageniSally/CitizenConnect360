import {  createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, User } from "../../../Models/authModel";


export const AuthActions = createActionGroup({
    source: "AUTH API",
    events: {
        'register': props<{ newUser: RegisterRequest }>(),
        'register success': props<{ response: RegisterResponse }>(),
        'register failure': props<{ message: string }>(),


        'login': props<{ user: LoginRequest }>(),
        'login success': props<{ response: LoginResponse }>(),
        'login failure': props<{ message: string }>(),

        'get users approved': emptyProps,
        'get users  approved success': props<{ users: User[] }>(),
        'get users  approved failure': props<{ message: string }>(),


        'get users not approved': emptyProps,
        'get users not  approved success': props<{ users: User[] }>(),
        'get users not  approved failure': props<{ message: string }>(),


        //Get specific User
        'get specific user':props<{id:string}>(),
        'get specific user success':props<{id:string}>(),
        'get specific user failure':props<{message:string}>(),


        // Delete user actions
        'delete user': props<{ id: string }>(),
        'delete user success': props<{ id: string }>(),
        'delete user failure': props<{ message: string }>(),


        // Update user approval actions
        'update User Approval': props<{ id: string, isApproved: number }>(),
        'update User Approval Success': props<{ id: string, isApproved: number }>(),
        'update User Approval Failure': props<{ message: string }>()
    }
})