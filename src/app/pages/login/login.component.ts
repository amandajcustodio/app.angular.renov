import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { LoginForm } from '../../shared/types/interfaces/login-form.interface';

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
    this.formGroup = this.formBuilder.group<LoginForm>({
      email: new FormControl('', { nonNullable: true, validators: [ Validators.required, Validators.email ]}),
      password: new FormControl('', { nonNullable: true, validators: [ Validators.required ]})
    });
  }
  
  public formGroup: FormGroup<LoginForm>;

  public async login(): Promise<void> {
    if (this.formGroup.valid) {
      const { password, email } = this.formGroup.value;
      console.log('Login com:', password, email);
      this.router.navigate(['/main/equipment/list']);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  public loginWithGoogle(): void {
    console.log('Entrar com Google');
  }

  public loginWithApple(): void {
    console.log('Entrar com Apple');
  }

  public navigateToResgister(): void {
    this.router.navigate(['register']);
  }
}
