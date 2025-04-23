import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    InputIcon, 
    IconField,
    PasswordModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { name, email } = this.loginForm.value;
      console.log('Login com:', name, email);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  loginWithGoogle() {
    console.log('Entrar com Google');
  }

  loginWithApple() {
    console.log('Entrar com Apple');
  }
}
