import { AbstractControl } from "@angular/forms";


export class MyValidators {

    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log( value );
        
        if( value > 10000 ){
            return { price_invalid: true};
        }
        return null;
    }

    static isEmailValid(control: AbstractControl) {
        const value = control.value;
        const reEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!reEmail.test(value)) {
            return { email_invalid: true }
        }
        return null;
    }

    static isPassValid(control: AbstractControl) {
        const value= control.value;
        const rePass= /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    
        if(!rePass.test(value)) {
            return { password_invalid: true }
        }
        return null;
    }

}