import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component';

import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './State/counter.reducer';
import { COUNTER_STATE_NAME } from './State/counter.selectors';


const routes: Routes = [
  
  {path:'',component:CounterComponent},



];

@NgModule({
  declarations: [
   
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //you can initialize the reducer in app, if theres is in need of the NGRX process whne the app loads, buy tou can initialize the corresponding NGRX Reducers in teh Corresponding modules 
   
    StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer),
    FormsModule, ReactiveFormsModule 
  ],
   exports: [RouterModule]

})
export class CountermoduleModule { }
