import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { getToken } from '../auth/State/auth.selector';
import { User } from '../models/user.model';
import { AppState } from '../Store/app.state';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private store: Store<AppState>) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(exhaustMap((token) => {
      if (!token) {
        return next.handle(req)
      } 
       
      let modifiedReq = req.clone({
          params: req.params.append('auth', token),
        })
        return next.handle(modifiedReq)

    
    }))
    return next.handle(req)
  }



}

