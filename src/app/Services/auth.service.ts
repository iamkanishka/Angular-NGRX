import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {AuthResponseData} from '../models/authresponse.model'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { LogoutAction } from '../auth/State/auth.action';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  timeoutInterval :any
  constructor(private httpClient:HttpClient,private store:Store<AppState>) { }


  login(email:string, password:string):Observable<AuthResponseData>{
 
    return this.httpClient.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
    {email:email,password:password, returnSecureToken:true})

  }

  signup(email:string, password:string):Observable<AuthResponseData>{
 
    return this.httpClient.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
    {email:email,password:password, returnSecureToken:true})

  }

  formatUser(data:AuthResponseData){
    const expirationDate = new Date(new Date().getTime()+ +data.expiresIn*1000)
    const user = new User(data.email,data.idToken,data.localId,expirationDate)
    return user
  }

  getErrorMessage(message:string){
    switch(message){
      case 'EMAIL_NOT_FOUND': return 'Email Not Found'
      case 'INVALID_PASSWORD': return 'Invalid Password';
      case 'EMAIL_EXISTS': return 'Email Already Exists';

default: return 'Unknown Error Occured'
    }
  }

  setUserLocalStorage(user:User){
   localStorage.setItem('userData',JSON.stringify(user))

   this.runTimeOutInterval(user)


  }

  getUserFromLocalStorage(){
    const stringedUserData = localStorage.getItem('userData')
    if(stringedUserData!=null){
      const userData = JSON.parse(stringedUserData)
      const expirationDate = new Date(userData.expirateionDate)
      const user = new User(userData.email,userData.token,userData.localId,expirationDate)
   this.runTimeOutInterval(user)
   console.log(user);
   
      return user

    }else{
      return null
    }
  }

  runTimeOutInterval(user){
    const todaysDate = new Date().getTime();
    const expirationDate = user.getexpiryDate().getTime();
    const timeInterval =  expirationDate - todaysDate
    console.log(timeInterval);
    
    this.timeoutInterval = setTimeout(()=>{
      this.store.dispatch(LogoutAction())
    
    },timeInterval)
  }

  logout(){
    localStorage.removeItem('userData')
    if(this.timeoutInterval){
      clearTimeout(this.timeoutInterval)
      this.timeoutInterval=null
    }
  }

}
