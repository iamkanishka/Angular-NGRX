//SharedState is used for selectors
export interface SharedState{
showLoading:boolean;
errorMessage:string

}


//initialState is used for reducers
export const initialState : SharedState ={
    showLoading: false,
    errorMessage: ''
} 