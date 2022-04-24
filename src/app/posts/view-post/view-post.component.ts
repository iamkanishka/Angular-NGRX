import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/Store/app.state';
import { getPostsById } from '../State/posts.selector';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post:Observable<Post>


  constructor( private store: Store<AppState>) { 
  this.post =   this.store.select(getPostsById)

  }

  ngOnInit(): void {
  }

}
