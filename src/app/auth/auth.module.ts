import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './State/auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  
  {path:'',children:[
  {path:'', redirectTo:'login'},
  {path:'',component: LoginComponent},
  {path:'signup',component: SignupComponent},

 ]},



];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    //Need to integrate in the app.module.ts
   // EffectsModule.forFeature([AuthEffects])


  ]
})
export class AuthModule { }
