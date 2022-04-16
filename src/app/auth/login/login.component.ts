import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { loginStart } from '../State/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup


  constructor(
    private store: Store<AppState>
  ) {
    this.loginForm = new FormGroup({
      loginemail: new FormControl(null, [Validators.required, Validators.email]),
      loginpassword: new FormControl(null, [Validators.required,])

    })
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }
  onLogin() {
    const email = this.loginForm.value.loginemail
    const password = this.loginForm.value.loginpassword
    this.store.dispatch(loginStart({ email, password }))



  }

}
