import { Component, OnInit,Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
 //With Implementation of the Input and Output Way -->
  //@Input() counter!:number


 //With Implementation of the NGRX Way -->
  counter!:number
 
constructor(private store: Store<{counter:{counter:number}}>) { 
  this.store.select('counter').subscribe(data=>{
    this.counter=data.counter
  })
}

  ngOnInit(): void {
  }

}

