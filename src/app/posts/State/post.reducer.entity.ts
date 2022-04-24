import { createReducer, on } from "@ngrx/store"
import { addPost, addPostsSuccess, deletePost, deletePostSucess, editPost, loadPostsSuccess, updatePosts, updatePostsSuccess, updatePostsSuccesswithEntity } from "./posts.actions"
//importing normal state
//import { initialState } from "./posts.state"

//importing entity post state
import { initialState } from "./posts.state.entity"

import { postAdaptor } from "./posts.state.entity"


const _postReducer =  createReducer(initialState,

on(addPostsSuccess,(state,action)=>{
    
  return postAdaptor.addOne(action.post,state)
}),


on(updatePostsSuccesswithEntity,(state,action)=>{
    console.log(action);
    
return postAdaptor.updateOne(action.post,state)
}),



on(deletePostSucess,(state,{id})=>{
return  postAdaptor.removeOne(id,state)
   }),


on(loadPostsSuccess,(state,action)=>{
    return  postAdaptor.setAll(action.posts,state)

  
   }),



)




export function postReducer(state,action){
    return _postReducer(state,action)
}