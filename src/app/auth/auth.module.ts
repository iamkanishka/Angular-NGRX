import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './State/auth.selector';
import { AuthReducer } from './State/auth.reducer';



const routes: Routes = [
  
  {path:'',children:[
  {path:'', redirectTo:'login'},
  {path:'',component: LoginComponent},
 ]},



];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer)


  ]
})
export class AuthModule { }
