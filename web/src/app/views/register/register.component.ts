import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
 

@Component({
    providers: [],
    selector: 'register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

    errorMessage: string = ""; 

    constructor(private router: Router, firebase: AngularFire) { }

    ngOnInit() { }

    register(email: string, username: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            user.updateProfile({
                displayName: username
            });
            this.navigateHome(); 
        })
        .catch((error) => {
            console.log("Something went wrong when trying to register the user.")
            this.errorMessage = error.message;
        });
    }

    navigateHome(){
        this.router.navigate(['/home']);
    }
}