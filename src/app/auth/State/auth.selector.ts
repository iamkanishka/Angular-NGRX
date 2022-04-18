import { createFeatureSelector, createSelector } from "@ngrx/store"
import { Authstate } from "./auth.state"

export const AUTH_STATE_NAME = 'auth'

const getAuthState = createFeatureSelector<Authstate>(AUTH_STATE_NAME);

export const isAuthenticated =  createSelector(getAuthState,(state)=>{
 
    return state.user ? true:false
})

export const getToken =  createSelector(getAuthState,(state)=>{
  return state.user!=null ? state.user.getUserToken():null
})