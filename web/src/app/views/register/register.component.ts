import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../services/validation.service'; 
import { Router } from "@angular/router";
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
 

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent{
    registerForm: FormGroup;
    errorMessage: string = ""; 
    password: string = "";
    isRegistrering: boolean = false; 

    constructor(private router: Router, firebase: AngularFire, formBuilder: FormBuilder, validationService: ValidatorService) { 
       this.registerForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required, validationService.emailValidator])],
            username: ['', Validators.required],
            firstname: [''],
            lastname: [''],
            password: ['', Validators.required]
        });
    }

    register(email: string, username: string, firstname: string, lastname: string, password: string){
        this.isRegistrering = true; 
        var userData = {
            email: email,
            username: username,
            firstname: firstname,
            lastname: lastname
        }; 
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            user.updateProfile({
                displayName: username
            });
            this.createUser(userData, user.uid); 
            this.navigateHome(); 
        })
        .catch((error) => {
            console.log("Something went wrong when trying to register the user.")
            this.isRegistrering = false; 
            this.errorMessage = error.message;
        });
    }

    createUser(user: any, userId: string){
        if(userId){
            var currentUserId = firebase.auth().currentUser.uid; 
            firebase.database().ref('users').child(currentUserId).set(user); 
        }
        //need to handle failure
    }

    navigateHome(){
        this.router.navigate(['/home']);
    }
}