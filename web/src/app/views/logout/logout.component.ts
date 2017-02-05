import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from "@angular/router";


@Component({
    providers: [],
    selector: 'logout',
    templateUrl: 'logout.component.html'
})
export class LogoutComponent {
    constructor(public af: AngularFire, public router: Router) {
        this.af.auth.logout().then((success) => {
            console.log("logout success");
        }).catch((error) =>{
            console.log(error);
        })
     }

}