import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";
export const POSTS_STATE_NAME = 'posts'

const getPostState =  createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(getPostState, (state)=>{
    return state.posts
})

export const getPostsById = createSelector(getPostState, (state,props)=>{
 return state.posts.find((post)=>{
       return post.id === props.id
    })
})