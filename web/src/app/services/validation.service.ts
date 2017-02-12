import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Ertkjern 08/02/2017
// Custom validation

@Injectable()
export class ValidatorService {

    constructor(){}

    emailValidator(control: FormControl){
        if(control.value){
            var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
                return { "incorrectMailFormat": true };
            }
        }
        return null;
    }

    equalPasswordValidation = (password:string) => {
         return (control: FormControl) => {
            if(control.value !== password){
                return { "incorrectRepeatPassord" : true }; 
            }
            return null; 
        }
    }
    
}