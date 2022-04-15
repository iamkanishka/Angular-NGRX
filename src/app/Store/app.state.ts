import { counterReducer } from "../counter/State/counter.reducer";
import { counterState } from "../counter/State/counter.state";
import { postReducer } from "../posts/State/posts.reducers";
import { PostsState } from "../posts/State/posts.state";

export interface AppState{
    counter:counterState
    posts:PostsState
}

export const appReducer = {
    counter : counterReducer,
    posts: postReducer
}