import { createEffect, ofType, Actions } from "@ngrx/effects";
import { AuthService } from "src/app/Services/auth.service";
import { autoLoginAction, loginStart, loginSuccess, LogoutAction, signupStart, signupSuccess } from "./auth.action";
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators'
import { Injectable } from "@angular/core";
import { AuthResponseData } from "src/app/models/authresponse.model";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { setErrorMessage, setloadingspinner } from 'src/app/Store/Shared/shared.action';
import { of, Observable } from "rxjs";
import { dispatch } from "rxjs/internal/observable/pairs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authservice: AuthService, private store: Store<AppState>, private router: Router) { }
    login$ = createEffect(() => {

        return this.action$.pipe(ofType(loginStart), exhaustMap((action) => {
            return this.authservice.login(action.email, action.password).pipe(map((data: AuthResponseData) => {
                this.store.dispatch(setloadingspinner({ status: false }))
                this.store.dispatch(setErrorMessage({ message: '' }))
                const user = this.authservice.formatUser(data)
                this.authservice.setUserLocalStorage(user)
                return loginSuccess({ user,redirect:true });
            }),
                catchError((errResp) => {
                    this.store.dispatch(setloadingspinner({ status: false }))

                    const errorMessage = this.authservice.getErrorMessage(errResp.error.error.message)
                    return of(setErrorMessage({ message: errorMessage }))

                })
            )
        }))
    })


signup$ = createEffect(() => {

        return this.action$.pipe(ofType(signupStart), exhaustMap((action) => {
            return this.authservice.signup(action.email, action.password).pipe(map((data: AuthResponseData) => {
                this.store.dispatch(setloadingspinner({ status: false }))
                this.store.dispatch(setErrorMessage({ message: '' }))
              const user = this.authservice.formatUser(data)
              this.authservice.setUserLocalStorage(user)

                return signupSuccess({ user ,redirect:true});
            }),
                catchError((errResp) => {
                    this.store.dispatch(setloadingspinner({ status: false }))
                  console.log(errResp.error.error.message);
                  
                    const errorMessage = this.authservice.getErrorMessage(errResp.error.error.message)
                    return of(setErrorMessage({ message: errorMessage }))

                })
            )
        }))
    })



    
    // signupRedirect$ = createEffect(() => {

    //     return this.action$.pipe(ofType(signupSuccess),
    //         tap((action) => {
    //             this.router.navigate(['/'])
    //         }))
    // }, { dispatch: false })


    loginRedirect$ = createEffect(() => {

        return this.action$.pipe(ofType(...[loginSuccess,signupSuccess]),
            tap((action) => {
               if(action.redirect){
                this.router.navigate(['/'])
               }
            }))
    }, { dispatch: false })


    autoLogin$ = createEffect(() => {

        return this.action$.pipe(ofType(autoLoginAction),
           mergeMap((action) => {
               const user = this.authservice.getUserFromLocalStorage()
          
               return of(loginSuccess({user,redirect:false }))
               
            }))
    }, { dispatch: true })


Logout$ = createEffect(() => {

        return this.action$.pipe(ofType(LogoutAction),
          map((action) => {
        this.authservice.logout()
        this.router.navigate(['auth'])
               
            }))
    }, { dispatch: false })

}