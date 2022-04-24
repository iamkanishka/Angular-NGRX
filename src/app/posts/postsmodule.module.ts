import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostListsComponent } from './post-lists/post-lists.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';

//importing normal postreducer 
//import { postReducer } from './State/posts.reducers';

//importing entity based postreducer 
import { postReducer } from './State/post.reducer.entity';

import { POSTS_STATE_NAME } from './State/posts.selector';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './State/posts.effects';
import { ViewPostComponent } from './view-post/view-post.component';


const routes: Routes = [


  {path:'',component:PostListsComponent,children:[
    {path:'add-post',component:AddPostComponent},
    {path:'edit-post/:id',component:EditPostComponent},


  ]},



];

@NgModule({
  declarations: [  PostListsComponent,
    AddPostComponent,
    EditPostComponent,
    ViewPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
       //you can initialize the reducer in app, if theres is in need of the NGRX process whne the app loads, buy tou can initialize the corresponding NGRX Reducers in teh Corresponding modules 
     StoreModule.forFeature(POSTS_STATE_NAME,postReducer),
    FormsModule, ReactiveFormsModule ,
    EffectsModule.forFeature([PostsEffects])
  ],
   exports: [RouterModule]
})
export class PostsmoduleModule { }
