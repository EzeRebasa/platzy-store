import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
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
      password: [ '', [ Validators.required, MyValidators.isPassValid]]
    })
  }

  login(event: Event) {
    event.preventDefault();
    if(this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password)
      .then( () => {
        this.router.navigate(['/admin'])
      })
      .catch( () => {
        alert( 'No es válido! ')
      })
    }
  }
}
