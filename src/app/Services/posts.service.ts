import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'


import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { map } from 'rxjs/operators';
import { Post } from '../models/posts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private httpClient:HttpClient,private store:Store<AppState>) { }

  getPosts():Observable<Post[]> {
    let searchParams = new HttpParams();
    searchParams =searchParams.append('custom','hai')
    searchParams =searchParams.append('name','kamishka')

  //  return this.httpClient.get<Post[]>('https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json' )

  
    return this.httpClient
      .get< Post[]>(
        'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json',{
          headers:new HttpHeaders({
            'custom-header':'Get Request'
          }),
          params: new HttpParams().set('custom','hai')
        }
      )
      .pipe(
        map((response) => {
          let posts = [];
          for (let key in response) {
            posts.push({ ...response[key], key });
          }
          return posts;
        })
      );
  }

}
