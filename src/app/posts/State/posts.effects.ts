import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { PostsService } from "src/app/Services/posts.service";
import { addPosts, addPostsSuccess, deletePosts, deletePostSucess, editPost, loadPosts, loadPostsSuccess, updatePosts, updatePostsSuccess } from "./posts.actions";


@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostsService) { }

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
}