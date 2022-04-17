import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { setloadingspinner } from 'src/app/Store/Shared/shared.action';
import { loginStart, signupStart } from '../State/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup


  constructor(
    private store: Store<AppState>
  ) {
    this.signupForm = new FormGroup({
      signupemail: new FormControl(null, [Validators.required, Validators.email]),
      signuppassword: new FormControl(null, [Validators.required,])

    })
  }


  ngOnInit(): void {
  }

  onSignup() {
    const email = this.signupForm.value.loginemail
    const password = this.signupForm.value.loginpassword
    this.store.dispatch(signupStart({ email, password }))

    this.store.dispatch(setloadingspinner({status:true}))



  }

}
