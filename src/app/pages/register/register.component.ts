//#region Imports

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterForm } from '../../shared/types/interfaces/register-form.interface';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { PasswordModule } from 'primeng/password';
import { DatePickerModule } from 'primeng/datepicker';
import { RegisterPayload } from '../../shared/types/payloads/auth.payload';
import { UsersService } from '../../shared/services/users/users.service';

//#endregion

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputIcon, 
    IconField,
    PasswordModule,
    DatePickerModule
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  //#region Constructor

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly userService: UsersService
  ) {
    this.formGroup = this.formBuilder.group<RegisterForm>({
      nome: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
      email: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required, Validators.email ]}),
      senha: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
      confirmPassword: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
      dataNascimento: new FormControl<Date | undefined>(undefined, { nonNullable: true, validators: [ Validators.required ]}),
      cpf: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
    });

    const maxDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(maxDate.getFullYear() - 150);

    this.maxDate = maxDate;
    this.minDate = minDate;
  }

  //#endregion

  //#region Public Properties
  
  public formGroup!: FormGroup<RegisterForm>;

  public maxDate!: Date;

  public minDate!: Date;

  public isLoading: boolean = false;

  //#endregion

  //#region Getters and Setters

  public get isCpfValid(): boolean {
    const cpf = this.formGroup.controls['cpf'].value.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }

    const calcCheckDigit = (cpf: string, factor: number): number => {
      let total = 0;
      for (let i = 0; i < factor - 1; i++) {
        total += parseInt(cpf[i]) * (factor - i);
      }
      const remainder = (total * 10) % 11;
      return remainder === 10 ? 0 : remainder;
    };

    const firstDigit = calcCheckDigit(cpf, 10);
    const secondDigit = calcCheckDigit(cpf, 11);

    return (
      firstDigit === parseInt(cpf[9]) &&
      secondDigit === parseInt(cpf[10])
    );
  }

  //#endregion

  //#region Public Methods

  public async register(): Promise<void> {
    if (this.formGroup.valid) {
      try {
        this.isLoading = true;
        
        if (!this.isCpfValid) {
          alert('CPF inválido!');
          return;
        }

        const formValue = this.formGroup.getRawValue();
        const payload: RegisterPayload = {
          ...formValue,
          dataNascimento: formValue.dataNascimento || new Date()
        };

        await this.userService.register(payload);

        this.navigateToLogin();
      } catch (error) { 
        console.log('Erro ao criar usuários')
      } finally {
        this.isLoading = false;
      }
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  public navigateToLogin(): void {
    console.log('entrei')
    this.router.navigate(['/login']);
  }

  //#endregion

}
