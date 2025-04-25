import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';

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
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]],
    });
  }
  
  public formGroup: FormGroup;

  public async login(): Promise<void> {
    if (this.formGroup.valid) {
      const { name, email } = this.formGroup.value;
      console.log('Login com:', name, email);
      this.router.navigate(['/main/equipment/list']);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  loginWithGoogle() {
    console.log('Entrar com Google');
  }

  loginWithApple() {
    console.log('Entrar com Apple');
  }
}
