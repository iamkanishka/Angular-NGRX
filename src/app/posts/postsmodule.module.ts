import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostListsComponent } from './post-lists/post-lists.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


const routes: Routes = [


  {path:'',component:PostListsComponent,children:[
    {path:'add-post',component:AddPostComponent},
    {path:'edit-post/:id',component:EditPostComponent},


  ]},



];

@NgModule({
  declarations: [  PostListsComponent,
    AddPostComponent,
    EditPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule 
  ],
   exports: [RouterModule]
})
export class PostsmoduleModule { }
