import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/Store/app.state';
import { editPost, updatePosts } from '../State/posts.actions';
import { getPostsById } from '../State/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm: FormGroup
  postId: string

  postSubscribe:Subscription

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private router: Router) {
    this.createPostForm()
    this.store.select(getPostsById).subscribe(async(post)=>{
      console.log(post);
      
      if(post && post!=null){

      this.postForm = await new FormGroup({
              title: new FormControl(post.title, [Validators.required, Validators.minLength(5)]),
              description: new FormControl(post.description, [Validators.required, Validators.minLength(5)])
    
            })
                    
      }

    })


    //Using normal way of getting Post By id in Ngrx using Selector
    // this.activatedRoute.paramMap.subscribe((params) => {

    //   this.postId = params.get('id')
    //   const id = params.get('id')
    //   this.store.select(getPostsById, { id }).subscribe((data: Post) => {
    //     this.postForm = new FormGroup({
    //       title: new FormControl(data.title, [Validators.required, Validators.minLength(5)]),
    //       description: new FormControl(data.description, [Validators.required, Validators.minLength(5)])

    //     })
    //   })

    // })

  }
  ngOnInit(): void {
  }

createPostForm(){
  this.postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)])

  })
}

  get postFormControls() {
    return this.postForm.controls;
  }

  handleDescriptionErrors() {
    const descriptionFormControl = this.postForm.controls.description;
    if (descriptionFormControl.touched && descriptionFormControl.valid) {
      if (descriptionFormControl.errors.required) {
        return "Description is required"
      }
      if (descriptionFormControl.errors.minLength.actualLength != descriptionFormControl.errors.minLength.requiredLength) {
        return "Description Should be of Minimum 30 Characters length"
      }
    }
  }

  handleTitleErrors() {
    const tiltleFormControl = this.postForm.controls.description;
    if (tiltleFormControl.touched && tiltleFormControl.valid) {
      if (tiltleFormControl.errors.required) {
        return "Title is required"
      }
      if (tiltleFormControl.errors.minLength.actualLength != tiltleFormControl.errors.minLength.requiredLength) {
        return "Description Should be of Minimum 30 Characters length"
      }
    }
  }

  onUpdatePost() {
    console.log(this.postForm.value);
    const post: Post = {
      id: this.postId,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(updatePosts({ post }))
    this.router.navigate(['/posts'])
  }

}
