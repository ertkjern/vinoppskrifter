import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';




@Component({
    providers: [],
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    errorMessage: string = ""; 
    username: string = ""; 
    email: string = ""; 

    constructor( private router: Router, firebase: AngularFire) { }

    ngOnInit() { }
    
    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            this.navigateHome(); 
        })
        .catch((error) => {
            //console.log("Firebase failure: " + JSON.stringify(error));
        });

    }

    navigateHome(){
        this.router.navigate(['/home']);
    }
}

