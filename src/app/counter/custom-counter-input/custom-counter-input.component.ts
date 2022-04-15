import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeNGRXname, customIncrement } from '../State/counter.action';
import { getNGRXType } from '../State/counter.selectors';
import { counterState } from '../State/counter.state';


@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number
  ngrxType!: string
  ngrxType$!:Observable<string>
  constructor(private store: Store<{ counter: counterState }>) {
    // this.store.select('counter').subscribe(state => {
    //   //When the Counter Store is called for updating the counter value the subscription works, but the ngrxtype subscrtiption also gets triggered, it leads to the performnce issue
    //   // console.log(state,'Channel Name Observable Called');

    //   this.ngrxType = state.ngrxtype
    // })

    //Slecting particuar Value of State Managment using Slectors
    this.store.select(getNGRXType).subscribe(ngrxtype => {
      //When the Counter Store is called for updating the counter value the subscription works, but the ngrxtype subscrtiption also gets triggered, it leads to the performnce issue
      // console.log(state,'Channel Name Observable Called');

      //If you Use the particular Selector in the Store, then particular data modification Observable will get Triggered  

      this.ngrxType = ngrxtype
    })

//Initializing  ngrxtype Observable 
   this.ngrxType$=   this.store.select(getNGRXType)



  }




  ngOnInit(): void {
  }
  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }))
    console.log(this.value);

  }
  changeNGRXname() {
    this.store.dispatch(changeNGRXname())
  }
}
