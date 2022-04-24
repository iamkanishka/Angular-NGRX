import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/Store/app.state';
import { deletePost, deletePosts, loadPosts } from '../State/posts.actions';

//Importing for normal ngrx selector
//import { getPosts } from '../State/posts.selector';

//Importing for normal ngrx selector
import { getPosts } from '../State/posts.selector.entity';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  posts$:Observable<Post[]>

  constructor( private store: Store<AppState>) {
    this.posts$ = this.store.select(getPosts)
    this.store.dispatch(loadPosts())


   }

  ngOnInit(): void {
  }
  ondeletePost(id:string){
if(confirm("Sure you want you Delete Post")){
 this.store.dispatch(deletePosts({id}))
}
  }

}
