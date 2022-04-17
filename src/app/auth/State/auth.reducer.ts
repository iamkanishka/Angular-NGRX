import { createReducer, on } from "@ngrx/store"
import { loginSuccess, LogoutAction, signupSuccess } from "./auth.action"
import { initialState } from "./auth.state"

const _authReducer =createReducer(initialState,on(loginSuccess,(state,action)=>{
    return {
        ...state,
        user:action.user
    }
}),
on(signupSuccess,(state,action)=>{
    return {
        ...state,
        user:action.user
    }
}),

on(LogoutAction,(state)=>{
    return {
        ...state,
        user:null
    }
})


)


export function AuthReducer(state,action){
    return _authReducer(state,action)
}