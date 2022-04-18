import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Services/auth.guard';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'counter',loadChildren:()=>import('./counter/countermodule.module').then((m)=>m.CountermoduleModule)},
  {path:'posts',loadChildren:()=>import('./posts/postsmodule.module').then((m)=>m.PostsmoduleModule), canActivate:[AuthGuard]},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
