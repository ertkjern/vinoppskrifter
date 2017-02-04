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
            this.router.navigate(['/home']);
        }).catch((error) =>{
            console.log(error);
            this.router.navigate(['/home']);
        })
     }

}