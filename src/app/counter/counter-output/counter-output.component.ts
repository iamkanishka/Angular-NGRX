import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/Store/app.state';
import { getCounter } from '../State/counter.selectors';
import { counterState } from '../State/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  //With Implementation of the Input and Output Way -->
  //@Input() counter!:number


  //With Implementation of the NGRX Way -->
  counter!: number
  counterSubscription!: Subscription

  //We Can initiate the counter variable as Observable   
  counter$!: Observable<counterState>
  constructor(
    //without counterState Interface
    //  private store: Store<{counter:{counter:number}}>,

    //withcounterState Interface
   // private store: Store<{ counter: counterState }>

  //Importing  with counter State Interface with App state
  private store: Store<AppState>


  ) {
    //    this.counterSubscription =  this.store.select('counter').subscribe(data => {
    // //When the Counter Store is called for updating the counter value the subscription works, but the ngrxtype subscrtiption also gets triggered, it leads to the performnce issue
    // //    console.log('Counter Called');

    //       this.counter = data.counter
    //     })


    //Slecting particuar Value of State Managment using Slectors
    this.counterSubscription = this.store.select(getCounter).subscribe(counter => {
      //When the Counter Store is called for updating the counter value the subscription works, but the ngrxtype subscrtiption also gets triggered, it leads to the performnce issue
      //    console.log('Counter Called');

      this.counter = counter
    })

    //if you are using the Direct Observable Variable, we can reduce the code of counterSubscription Method,an the ngobn DeStroy 
    this.counter$ = this.store.select('counter')


  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe()
    }
  }

}

