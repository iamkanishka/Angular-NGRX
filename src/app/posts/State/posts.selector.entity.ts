import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/router/custom-serializer";
import { getCurrentRoute } from "src/app/router/router.selector";
import { PostsState, postAdaptor } from "./posts.state.entity";
export const POSTS_STATE_NAME = 'posts'

export const postSelectors =  postAdaptor.getSelectors()


const getPostState =  createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(getPostState, postSelectors.selectAll)


//Selector For Getting the Post by Id using Props in a normal way
// export const getPostsById = createSelector(getPostState, (state,props)=>{
//  return state.posts.find((post)=>{
//        return post.id === props.id
//     })
// })

export const getpostsEntities = createSelector(getPostState,postSelectors.selectEntities)

export const getPostsById = createSelector(getpostsEntities, getCurrentRoute,(posts, route:RouterStateUrl)=>{

       return posts ? posts[route.params['id']] :null

})

