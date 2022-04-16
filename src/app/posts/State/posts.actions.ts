import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/models/posts.model"

export const Add_Post_Action = '[posts page] add post'
export const Edit_Post_Action = '[posts page] update post'



export const addPost = createAction(Add_Post_Action, props<{post:Post}>())
export const editPost = createAction(Edit_Post_Action, props<{post:Post}>())
