import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './State/auth.selector';
import { AuthReducer } from './State/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './State/auth.effects';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),
    EffectsModule.forFeature([AuthEffects])


  ]
})
export class AuthModule { }
