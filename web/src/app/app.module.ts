import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes , RouterOutlet} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { TranslateModule } from "ng2-translate/ng2-translate";

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainInfoComponent } from './components/main-info/main-info.component'
import { MenuBottomComponent } from './components/menu-bottom/menu-bottom.component';
import { RecipeMenuComponent } from './components/recipe-menu/recipe-menu.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { RecipesComponent } from './components/recipes/recipes.component';

//views
import { HomeComponent } from './views/home/home.component'
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LogoutComponent } from './views/logout/logout.component';
import { AboutComponent } from './views/about/about.component';
import { RecipeEditorComponent } from './views/recipe-editor/recipe-editor.component';

//services
import { UserService } from './services/user.service';
import { ValidatorService } from './services/validation.service';


import { MaterialModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'HomeComponent' } },
  { path: 'login', component: LoginComponent, data: { title: 'LoginComponent' } },
  { path: 'register', component: RegisterComponent, data: { title: 'RegisterComponent'} },
  { path: 'logout', component: LogoutComponent, data: { title: 'LogoutComponent'} },
  { path: 'about', component: AboutComponent, data: { title: 'AboutComponent'}},
  { path: 'recipe-editor', component: RecipeEditorComponent, data: { title: 'RecipeEditorComponent'}},
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
    LogoutComponent,
    AboutComponent,
    RecipeEditorComponent,
    RecipeMenuComponent,
    MyRecipesComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    TranslateModule.forRoot()
  ],
  providers: [
    UserService,
    ValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
