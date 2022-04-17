import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/models/posts.model"

export const Add_Post_Action = '[posts page] add post'
export const Edit_Post_Action = '[posts page] update post'
export const Delete_Post_Action = '[posts page] delete post'
export const LOAD_POSTS = '[posts page] load post'
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success'




//Local Data
export const addPost = createAction(Add_Post_Action, props<{post:Post}>())
export const editPost = createAction(Edit_Post_Action, props<{post:Post}>())
export const deletePost = createAction(Delete_Post_Action, props<{id:string}>())


export const loadPosts = createAction(LOAD_POSTS)
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{posts:Post[]}>())
