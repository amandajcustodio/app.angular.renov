//#region Imports

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
import { LoginPayload } from '../../shared/types/payloads/auth.payload';
import { UsersService } from '../../shared/services/users/users.service';

//#endregion

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

  //#region Constructor

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly usersService: UsersService
  ) {
    this.formGroup = this.formBuilder.group<LoginForm>({
      email: new FormControl('', { nonNullable: true, validators: [ Validators.required, Validators.email ]}),
      senha: new FormControl('', { nonNullable: true, validators: [ Validators.required ]})
    });
  }

  //#endregion

  //#region Public Properties
  
  public formGroup: FormGroup<LoginForm>;

  //#endregion

  //#region Public Methods

  public async login(): Promise<void> {
    if (this.formGroup.valid) {
      try {
        const payload: LoginPayload = this.formGroup.getRawValue();

        await this.usersService.login(payload);
        this.router.navigate(['/main/equipment/list']);
      } catch (error) {
        console.log('Erro ao logar')
      }
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

  //#endregion
  
}
