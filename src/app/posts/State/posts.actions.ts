import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/models/posts.model"

export const Add_Post_Action = '[posts page] add post'
export const Edit_Post_Action = '[posts page] update post'
export const Delete_Post_Action = '[posts page] delete post'
export const LOAD_POSTS = '[posts page] load post'
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success'


export const ADD_POSTS = '[posts page] Add post'
export const ADD_POSTS_SUCCESS = '[posts page] add posts success'

export const UPDATE_POST = '[posts page] udpate post'
export const UPDATE_POSTS_SUCCESS = '[posts page] update posts success'

export const DELETE_POST = '[posts page] delete post'
export const DELETE_POSTS_SUCCESS = '[posts page] delete posts success'


//Local Data
export const addPost = createAction(Add_Post_Action, props<{post:Post}>())
export const editPost = createAction(Edit_Post_Action, props<{post:Post}>())
export const deletePost = createAction(Delete_Post_Action, props<{id:string}>())


export const loadPosts = createAction(LOAD_POSTS)
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{posts:Post[]}>())


export const addPosts = createAction(ADD_POSTS, props<{post:Post}>())
export const addPostsSuccess = createAction(ADD_POSTS_SUCCESS, props<{post:Post}>())


export const updatePosts = createAction(UPDATE_POST, props<{post:Post}>())
export const updatePostsSuccess = createAction(UPDATE_POSTS_SUCCESS, props<{post:Post}>())

export const deletePosts= createAction(DELETE_POST, props<{id:string}>())
export const deletePostSucess = createAction(DELETE_POSTS_SUCCESS, props<{id:string}>())
