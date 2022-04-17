import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './Store/app.state';
import { getErrorMessage, getLoading } from './Store/Shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'statengrx';
  showLoading:Observable<boolean>
  erroMessage:Observable<string>


  constructor(private store:Store<AppState>){
    
  }

  ngOnInit(): void {
      this.showLoading = this.store.select(getLoading)
      this.erroMessage = this.store.select(getErrorMessage)

  }
}
