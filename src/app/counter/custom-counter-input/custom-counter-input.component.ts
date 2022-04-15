import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeNGRXname, customIncrement } from '../State/counter.action';
import { counterState } from '../State/counter.state';


@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number
  ngrxType!: string
  constructor(private store: Store<{ counter: counterState }>) {
    this.store.select('counter').subscribe(state => {
      //When the Counter Store is called for updating the counter value the subscription works, but the ngrxtype subscrtiption also gets triggered, it leads to the performnce issue
      // console.log(state,'Channel Name Observable Called');

      this.ngrxType = state.ngrxtype
    })
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
