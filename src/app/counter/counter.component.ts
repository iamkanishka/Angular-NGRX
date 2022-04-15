import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 //Removing below counter varaible because of implememntation of NGRX counter variable in the NGRX Store 
 // counter:number=0
  constructor() { }

  ngOnInit(): void {
  }

 //Removing below functionalities because of implememntation of NGRX
//   onIncrement(){
//     this.counter++
//   }
 
//   onDecrement(){
//    this.counter--
//  }
//  onReset(){
//    this.counter=0
//  }
 

}
