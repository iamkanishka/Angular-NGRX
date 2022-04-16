import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

 
  constructor( 
    //private store: Store<AppState>
    ){ 
    this.loginForm = new FormGroup({
      loginemail: new FormControl(null,[Validators.required, Validators.email]),
      loginpassword: new FormControl(null,[Validators.required,])

    })
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }
onLogin(){
  console.log( this.loginForm.value);

  console.log(this.loginForm.controls);
  
  
  
}

}
