import { createEntityAdapter, EntityState } from "@ngrx/entity"
import { Post } from "src/app/models/posts.model"


export interface PostsState extends EntityState<Post>{}

// we can define the primary key for the Entity
// export const postAdaptor =  createEntityAdapter<Post>({
//     selectId: (post:Post)=>post.id
// });

//we can Sort varialbes  the primary key for the Entity
// export function sortByName(a: Post, b: Post): number {
//      const compare = a.title.localeCompare(b.title);
//   if (compare > 0) {
//     return -1;
//   }

//   if (compare < 0) {
//     return 1;
//   }

//   return compare;
//   }
// export const postAdaptorsorted =  createEntityAdapter<Post>({
//     sortComparer: sortByName,
// });

export const postAdaptor =  createEntityAdapter<Post>();

export const initialState:PostsState =postAdaptor.getInitialState()
