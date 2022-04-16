import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/Store/app.state';
import { addPost } from '../State/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm:FormGroup

 
  constructor( private store: Store<AppState>){ 
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required, Validators.minLength(15)]),
      description: new FormControl(null,[Validators.required, Validators.minLength(15)])

    })
  }

  ngOnInit(): void {
  }

  get postFormControls() {
    return this.postForm.controls;
  }

  handleDescriptionErrors(){
    const descriptionFormControl = this.postForm.controls.description;
    if(descriptionFormControl.touched && descriptionFormControl.valid){
      if(descriptionFormControl.errors.required){
        return "Description is required"
      }
      if(descriptionFormControl.errors.minLength.actualLength!=descriptionFormControl.errors.minLength.requiredLength){
        return "Description Should be of Minimum 30 Characters length"
      }
    }
  }

  handleTitleErrors(){
    const tiltleFormControl = this.postForm.controls.description;
    if(tiltleFormControl.touched && tiltleFormControl.valid){
      if(tiltleFormControl.errors.required){
        return "Title is required"
      }
      if(tiltleFormControl.errors.minLength.actualLength!=tiltleFormControl.errors.minLength.requiredLength){
        return "Description Should be of Minimum 30 Characters length"
      }
    }
  }

onAddPost(){
  console.log(this.postForm.value);
  const post:Post ={
    title : this.postForm.value.title,
    description : this.postForm.value.description
  }
  this.store.dispatch(addPost({post}))
}
}
