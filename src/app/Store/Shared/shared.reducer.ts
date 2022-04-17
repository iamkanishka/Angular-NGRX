import { createReducer, on } from "@ngrx/store"
import { setloadingspinner } from "./shared.action"

import { initialState } from "./shared.state"

const _sharedReducer = createReducer(initialState,
    on(setloadingspinner, (state, action) => {
        console.log(state,action);
        
        return {
            state,
            showLoading: action.status
        }

    }))



export function sharedReducer(state, action) {
    return _sharedReducer(state, action)

}