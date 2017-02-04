import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes , RouterOutlet} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { MainInfoComponent } from './components/main-info/main-info.component'
import { MenuBottomComponent } from './components/menu-bottom/menu-bottom.component';

import { HomeComponent } from './views/home/home.component'
import { LoginComponent } from './views/login/login.component'; 
import { RegisterComponent } from './views/register/register.component'; 
import { LogoutComponent } from './views/logout/logout.component'

import { MaterialModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'HomeComponent' } },
  { path: 'login', component: LoginComponent, data: { title: 'LoginComponent' } },
  { path: 'register', component: RegisterComponent, data: { title: 'RegisterComponent'} },
  { path: 'logout', component: LogoutComponent, data: { title: 'LogoutComponent'} },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

const myFirebaseConfig = {
    apiKey: "AIzaSyCZs6htTDDQnz2hPPdy3Pw9eYX3YKoxvj0",
    authDomain: "vinoppskrifter.firebaseapp.com",
    databaseURL: "https://vinoppskrifter.firebaseio.com",
    storageBucket: "vinoppskrifter.appspot.com",
    messagingSenderId: "855695465410"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};  

  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainInfoComponent,
    MenuBottomComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
