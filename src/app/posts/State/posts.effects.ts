import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Update } from "@ngrx/entity";
import { RouterNavigatedAction, RouterNavigationAction, routerNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";

import { filter, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { Post } from "src/app/models/posts.model";
import { PostsService } from "src/app/Services/posts.service";
import { AppState } from "src/app/Store/app.state";
import { addPosts, addPostsSuccess, deletePosts, deletePostSucess, editPost, loadPosts, loadPostsSuccess, updatePosts, updatePostsSuccess, updatePostsSuccesswithEntity, updatePostswithEntity } from "./posts.actions";

//Importing for normal ngrx selector
//import { getPosts } from '../State/posts.selector';

//Importing for normal ngrx selector
import { getPosts } from '../State/posts.selector.entity';
import { of } from "rxjs";
import { dummyAction } from "src/app/auth/State/auth.action";

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService, private store: Store<AppState>) { }

  loadpost$ = createEffect(() => {
    return this.actions$.pipe(ofType(loadPosts), 
    
    withLatestFrom(this.store.select(getPosts)),
    
    mergeMap(([action, posts]) => {
      if(!posts.length || posts.length===1){
   
      return this.postsService.getPosts().pipe(map((posts) => {
        console.log(posts);

        return loadPostsSuccess({ posts })
        
      }))
           
    }
    return of(dummyAction())
    }))
  })


  addpost$ = createEffect(() => {
    return this.actions$.pipe(ofType(addPosts), mergeMap((action) => {
      return this.postsService.addPost(action.post).pipe(map((data) => {
        const post = { ...action.post, id: data.name }
        return addPostsSuccess({ post })
      }))
    }))
  })


  //Implemetation of  normal ngrx  effect  and with entity to update the post
  updatepost$ = createEffect(() => {
    return this.actions$.pipe(ofType(updatePosts), switchMap((action) => {
      return this.postsService.updatePost(action.post).pipe(map((data) => {
       
        //to update the the post with norma ngrx way
        const post = { ...action.post }
        return updatePostsSuccess({ post })
      }))
    }))
  })


    //Implemetation of  normal ngrx  effect  and with entity to update the post
    updatepostwithentity$ = createEffect(() => {
      return this.actions$.pipe(ofType(updatePostswithEntity), switchMap((action) => {
        console.log(action.post);
        return this.postsService.updatePost(action.post).pipe(map((data) => {
          
          // to update the the post with norma ngrx way
            const updatedPost :Update<Post>={
                  id:action.post.id ,
                  changes:{
                    ...action.post
                  }
            } 
         
            console.log(updatedPost);
            
            
          return updatePostsSuccesswithEntity({ post : updatedPost })
          
        }))
      }))
    })





  deletepost$ = createEffect(() => {
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
              return loadPostsSuccess({ posts: postData });
            })
          );
        }
return of(dummyAction())
      })
    );
  });

}