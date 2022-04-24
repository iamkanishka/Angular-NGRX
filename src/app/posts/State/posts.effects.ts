import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigatedAction, RouterNavigationAction, routerNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";

import { filter, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { PostsService } from "src/app/Services/posts.service";
import { AppState } from "src/app/Store/app.state";
import { addPosts, addPostsSuccess, deletePosts, deletePostSucess, editPost, loadPosts, loadPostsSuccess, updatePosts, updatePostsSuccess } from "./posts.actions";
import { getPosts } from "./posts.selector";


@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostsService,private store: Store<AppState>) { }

    loadpost$ = createEffect(() => {
        return this.actions$.pipe(ofType(loadPosts), mergeMap((action) => {
            return this.postsService.getPosts().pipe(map((posts) => {
                console.log(posts);

                return loadPostsSuccess({ posts })
            }))
        }))
    })


    addpost$ = createEffect(()=>{
        return this.actions$.pipe(ofType(addPosts), mergeMap((action) => {
            return this.postsService.addPost(action.post).pipe(map((data) => {
                const post = {...action.post, id:data.name}
                   return addPostsSuccess({ post })
            }))
        }))
    })

    updatepost$ = createEffect(()=>{
        return this.actions$.pipe(ofType(updatePosts), switchMap((action) => {
            return this.postsService.updatePost(action.post).pipe(map((data) => {
                const post = {...action.post}
                   return updatePostsSuccess({ post })
            }))
        }))
    })

    deletepost$ = createEffect(()=>{
        return this.actions$.pipe(ofType(deletePosts), switchMap((action) => {
            return this.postsService.deletePost(action.id).pipe(map((data) => {
           
                   return deletePostSucess({ id: action.id })
            }))
        }))
    })

    
    getSinglePost$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(ROUTER_NAVIGATION),
          filter((r: RouterNavigatedAction) => {
            return r.payload.routerState.url.startsWith('/posts/details');
          }),
          map((r: RouterNavigatedAction) => {
            return r.payload.routerState['params']['id'];
          }),
          withLatestFrom(this.store.select(getPosts)),
          switchMap(([id, posts]) => {
            if (!posts.length) {
              return this.postsService.getPostById(id).pipe(
                map((post) => {
                  console.log(post);
                 const postData = [{ ...post, id }];
                  return loadPostsSuccess({posts:postData});
                })
              );
            }
  
          })
        );
      });

}