import { createReducer, on } from "@ngrx/store"
import { addPost, deletePost, editPost } from "./posts.actions"
import { initialState } from "./posts.state"


const _postReducer =  createReducer(initialState,
    on(addPost,(state,action)=>{
    
    let post  = {...action.post}
    post.id = (state.posts.length +1).toString()
    return {
        state,
        posts:[...state.posts, post]
    }
}),
on(editPost,(state,action)=>{
    console.log(action.post);
    
 const updatedPosts  = state.posts.map((post)=>{
     return action.post.id === post.id? action.post :post
 })

 return{
     ...state,
     posts:updatedPosts
 }
}),

on(deletePost,(state,{id})=>{

    
 const updatedPosts  = state.posts.filter((post)=>{
     return post.id != id 
 })

 return{
     ...state,
     posts:updatedPosts
 }
}),

// on(deletePost, (state, )=>{

//  const updatedPosts  = state.posts.map((post)=>{
//      return post.id != id 
//  })

//  return{
//      ...state,
//      posts:updatedPosts
//  }
// })

)




export function postReducer(state,action){
    return _postReducer(state,action)
}