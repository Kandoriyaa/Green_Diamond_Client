import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormEmailInputComponent } from '../../../shared/widgets/form-email-input/form-email-input.component';
import { FormInputComponent } from '../../../shared/widgets/form-input/form-input.component';
import { Router } from '@angular/router'; 
import { Login } from '../../../core/models/Login';
import { LoadingBarComponent } from '../../../shared/widgets/loading-bar/loading-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormInputComponent, FormEmailInputComponent,LoadingBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  isUser = signal(false)
  isBrowser!: boolean;
  Logininfo!: Login;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
) {

}

get f() {
  return this.loginForm.controls;
}

ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username: ['sales', [Validators.required]],
      password: ['1230', [Validators.required]],
  });
}

onLogin() {
  this.submitted = true;
  if (this.loginForm.valid) {
      const loginUser: Login = this.loginForm.value;
      this.router.navigate(['./dashboard']);
  }
}

  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}