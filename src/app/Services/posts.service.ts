import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'


import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { map } from 'rxjs/operators';
import { Post } from '../models/posts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  getPosts(): Observable<Post[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('custom', 'hai')
    searchParams = searchParams.append('name', 'kamishka')

    //  return this.httpClient.get<Post[]>('https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json' )


    return this.httpClient
      .get<Post[]>(
        'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json'
      )
      .pipe(
        map((response) => {
          let posts = [];
          for (let key in response) {
            posts.push({ ...response[key], id: key });
          }
          return posts;
        })
      );
  }


  addPost(postdata: Post): Observable<{ name: string }> {
    return this.httpClient.post<{ name: string }>(
      'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json',
      postdata, {
      headers: new HttpHeaders({
        'custom-header': 'Post Request'
      }),

      // observe: 'response'
    }
    );
  }

  updatePost(postdata: Post): Observable<{ name: string }> {
    const postData = {
      [postdata.id]: { title: postdata.title, description: postdata.description }
    }
    return this.httpClient.patch<{ name: string }>(
      'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json',
      postData,
    );
  }

  deletePost(id: string) {

    return this.httpClient.delete(`https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json?id=${id}`);
  }


}
