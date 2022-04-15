import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostListsComponent } from './posts/post-lists/post-lists.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'counter',component:CounterComponent},
  {path:'posts',component:PostListsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
