import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  get getEmailField() {
    return this.loginForm.get('email');
  }

  get getPassField() {
    return this.loginForm.get('password');
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [ '', [Validators.required, MyValidators.isEmailValid]],
      password: [ '', [ Validators.required,Validators.maxLength(10), MyValidators.isPassValid]]
    })
  }
}
