import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/router/custom-serializer";
import { getCurrentRoute } from "src/app/router/router.selector";
import { PostsState } from "./posts.state";
export const POSTS_STATE_NAME = 'posts'

const getPostState =  createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(getPostState, (state)=>{
    return state.posts
})


//Selector For Getting the Post by Id using Props in a normal way
// export const getPostsById = createSelector(getPostState, (state,props)=>{
//  return state.posts.find((post)=>{
//        return post.id === props.id
//     })
// })

export const getPostsById = createSelector(getPostState, getCurrentRoute,(posts, route:RouterStateUrl)=>{
 return posts.posts.find((post)=>{
       return posts ? post.id === route.params['id'] :null
    })
})

