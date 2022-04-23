import { sharedReducer } from "./Shared/shared.reducer"
import { SHARED_STATE_NAME } from "./Shared/shared.selector"
import { SharedState } from "./Shared/shared.state"
import { StoreModule } from '@ngrx/store';

import { Authstate } from "../auth/State/auth.state";
import { AUTH_STATE_NAME } from "../auth/State/auth.selector";
import { AuthReducer } from "../auth/State/auth.reducer";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";


export interface AppState{
    
    [SHARED_STATE_NAME]:SharedState,
 [AUTH_STATE_NAME]: Authstate
 router:RouterReducerState
  
}

export const appReducer = {
 [SHARED_STATE_NAME]:sharedReducer,
 [AUTH_STATE_NAME]: AuthReducer,
 router:routerReducer
}