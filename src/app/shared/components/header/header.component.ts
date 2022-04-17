import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticated } from 'src/app/auth/State/auth.selector';
import { AppState } from 'src/app/Store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated :Observable<boolean>
  constructor(private store:Store<AppState>) {
    this.isAuthenticated = this.store.select(isAuthenticated)
   }


  ngOnInit(): void {
  }

}
