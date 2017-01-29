import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { MainInfoComponent } from './components/main-info/main-info.component'
import { MenuBottomComponent } from './components/menu-bottom/menu-bottom.component';

  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainInfoComponent,
    MenuBottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
