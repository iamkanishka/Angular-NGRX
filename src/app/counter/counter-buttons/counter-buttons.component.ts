import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../State/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
//  Incrementing, Decrementing, Reseting Counter using Input and Output Method
  // @Output() increment = new EventEmitter<void>()
  // @Output() decrement = new EventEmitter<void>()
  // @Output() reset = new EventEmitter<void>()



  constructor(private store: Store<{counter:{counter:number}}>) { 

  }

  ngOnInit(): void {
  }
//  Incrementing, Decrementing, Reseting Counter using Input and Output Method
//   onIncrement(){
//     this.increment.emit()

//   }
 
//   onDecrement(){
//     this.decrement.emit()
   
//  }
//  onReset(){
//   this.reset.emit()

//  }



//Incrementing, Decrementing, Reseting Counter using NGRX Method
  onIncrement(){
this.store.dispatch(increment())
  }
 
  onDecrement(){
 
this.store.dispatch(decrement())
   
 }
 onReset(){
this.store.dispatch(reset())
 

 }

}
