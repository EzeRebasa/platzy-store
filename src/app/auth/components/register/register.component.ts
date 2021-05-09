import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { 
    this.buildForm()
  }

  ngOnInit() {
  }

  get getEmailField() {
    return this.registerForm.get('email');
  }

  get getPassField() {
    return this.registerForm.get('password');
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      username: [ '', [Validators.required]],
      email: [ '', [Validators.required, MyValidators.isEmailValid]],
      password: [ '', [ Validators.required, MyValidators.isPassValid]]
    })
  }

  register(event: Event) {
    event.preventDefault();
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      
      const { email, password} = this.registerForm.value;
      this.authService.createUser(email, password)
      .then( () => {
        this.router.navigate(['auth/login']);
      })
    }
  }


}
