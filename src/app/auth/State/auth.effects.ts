import { createEffect, ofType, Actions } from "@ngrx/effects";
import { AuthService } from "src/app/Services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
import { exhaustMap, map } from 'rxjs/operators'
import { Injectable } from "@angular/core";

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authservice: AuthService) { }
    login$ = createEffect(() => {

        return this.action$.pipe(ofType(loginStart), exhaustMap((action) => {
           return this.authservice.login(action.email, action.password).pipe(map((data)=>{
               return loginSuccess();
           }))
        }))
    })
}