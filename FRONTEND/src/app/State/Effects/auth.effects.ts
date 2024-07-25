
import { AuthService } from "../../../Services/auth.service"
import { Router } from "@angular/router"
import { AuthActions } from "../Actions/auth.actions"
import { Injectable } from "@angular/core"
import { catchError, concatMap, map, mergeMap, of } from "rxjs"
import { Actions } from "@ngrx/effects"
import { createEffect, ofType } from "@ngrx/effects"
import {  ToastrService } from "ngx-toastr"




@Injectable()


export class AuthEffects {
    constructor(private actions$: Actions, private auth: AuthService, private router: Router, private toastr:ToastrService) { }

    loginUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            concatMap(({ user }) => this.auth.loginUser(user).pipe(
                map(res => {
                    localStorage.setItem('token', res.token)
                    localStorage.setItem('role', res.role)
                    localStorage.setItem('sub', res.sub)
                    localStorage.setItem('name', res.name)
                    localStorage.setItem('email', res.email)
                    console.log(res.message)
                   
                    console.log(!this.auth.showStatus())
                

                    if (res.token) {
                        setTimeout(() => {
                            this.router.navigate([''])
                           
                        }, 2000)


                    } else {
                        console.log("Could not find token")
                    }
                    this.toastr.success(res.message,'Login')
                    return AuthActions.loginSuccess({ response: res })
                }),
                catchError(error =>{
                    this.toastr.error("Failed to Login")
                    return of(AuthActions.loginFailure({ message: error.error.message }))})
            )

            ))

    })


    registerUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.register),
            concatMap(req => this.auth.registerUser(req.newUser).pipe(
                map(res => {
                    console.log("Register Success");
                    
                    this.router.navigate(['/login'])
                    return AuthActions.registerSuccess({ response: res })
                }),
                catchError(error => of(AuthActions.registerFailure({ message: error.error.message })))
            )
            ))

    })



    getUsersApproved$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(AuthActions.getUsersApproved),
            concatMap(()=>this.auth.getUsersApproved().pipe(
                map(res=>{
                    return AuthActions.getUsersApprovedSuccess({users:res})
                })
            )),
            catchError(error=>of(AuthActions.getUsersApprovedFailure({message:error})))
        )
    })



    getUsersNotApproved$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(AuthActions.getUsersNotApproved),
            concatMap(()=>this.auth.getUsersNotApproved().pipe(
                map(res=>{
                    return AuthActions.getUsersNotApprovedSuccess({users:res})
                })
            )),
            catchError(error=>of(AuthActions.getUsersNotApprovedFailure({message:error})))
        )
    })



    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
          ofType(AuthActions.deleteUser),
          mergeMap(action =>
            this.auth.deleteUser(action.id).pipe(
              map(() => AuthActions.deleteUserSuccess({ id: action.id })),
              catchError(error => of(AuthActions.deleteUserFailure({message:error})))
            )
          )
        )
      );


      updateUserApproval$ = createEffect(() =>
        this.actions$.pipe(
          ofType(AuthActions.updateUserApproval),
          mergeMap(action =>
            this.auth.updateUserApproval(action.id, action.isApproved).pipe(
              map(() => AuthActions.updateUserApprovalSuccess({ id: action.id, isApproved: action.isApproved })),
              catchError(error => of(AuthActions.updateUserApprovalFailure({ message: error.message })))
            )
          )
        )
      );


      getSpecificUser$=(()=>
        this.actions$.pipe(
            ofType(AuthActions.getSpecificUser),
            mergeMap(action=>
                this.auth.getSpecificUser(action.id).pipe(
                    map(()=> AuthActions.getSpecificUserSuccess({id:action.id})),
                    catchError(error=>of(AuthActions.getSpecificUserFailure({message:error.message})))
                )
            )
        )
    )
}

