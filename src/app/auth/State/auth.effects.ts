import { createEffect, ofType, Actions } from "@ngrx/effects";
import { AuthService } from "src/app/Services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { Injectable } from "@angular/core";
import { AuthResponseData } from "src/app/models/authresponse.model";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { setErrorMessage, setloadingspinner } from 'src/app/Store/Shared/shared.action';
import { of ,Observable} from "rxjs";

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authservice: AuthService, private store: Store<AppState>) { }
    login$ = createEffect(() => {

        return this.action$.pipe(ofType(loginStart), exhaustMap((action) => {
            return this.authservice.login(action.email, action.password).pipe(map((data: AuthResponseData) => {
                this.store.dispatch(setloadingspinner({ status: false }))
                this.store.dispatch(setErrorMessage({message:''}))


                const user = this.authservice.formatUser(data)
                return loginSuccess({ user });
            }),
                catchError((errResp) => {
                this.store.dispatch(setloadingspinner({ status: false }))

                const errorMessage = this.authservice.getErrorMessage(errResp.error.error.message)
                     return of(setErrorMessage({message:errorMessage}))

                })
            )
        }))
    })
}