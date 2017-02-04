import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from "@angular/router";


@Component({
    providers: [],
    selector: 'main-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
  
    loggedInEmail: string = ""; 

    constructor(public af: AngularFire, public router: Router) {
      this.af.auth.subscribe(auth => 
        this.loggedInEmail = auth ? auth.auth.email : "" 
      );
    }    
    
}