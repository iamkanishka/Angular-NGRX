import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule} from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
//import { appReducer } from './Store/app.state';

import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component'
import { appReducer } from './Store/app.state';
import { AuthEffects } from './auth/State/auth.effects';
import { AuthInterceptorService } from './Services/auth-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    
    //you can initialize the reducer in app, if theres is in need of the NGRX process whne the app loads, buy tou can initialize the corresponding NGRX Reducers in teh Corresponding modules 
    // StoreModule.forRoot(appReducer),
    //we can keep the forRoot like with no redicers, and then we can initiate the redicwers in the corresponing module
    StoreModule.forRoot(appReducer),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([AuthEffects]),
  
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent],
  exports:[LoadingSpinnerComponent]
})
export class AppModule { }
