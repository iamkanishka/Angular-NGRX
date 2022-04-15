import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
  counterSubscription!:Subscription

  //We Can initiate the counter variable as Observable   
  counter$!: Observable<counterState>
  constructor(
    //without counterState Interface
    //  private store: Store<{counter:{counter:number}}>,

    //withcounterState Interface
    private store: Store<{ counter: counterState }>

  ) {
   this.counterSubscription =  this.store.select('counter').subscribe(data => {
      this.counter = data.counter
    })


    //if you are using the Direct Observable Variable, we can reduce the code of counterSubscription Method,an the ngobn DeStroy 
    this.counter$ = this.store.select('counter')


  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe()
    }
  }

}

