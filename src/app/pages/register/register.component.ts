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

@Component({
  selector: 'app-register',
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
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.formGroup = this.formBuilder.group<RegisterForm>({
      name: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
      email: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required, Validators.email ]}),
      password: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
      confirmPassword: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
      birthDate: new FormControl<Date | undefined>(undefined, { nonNullable: true, validators: [ Validators.required ]}),
      cpf: new FormControl<string>('', { nonNullable: true, validators: [ Validators.required ]}),
    });

    const maxDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(maxDate.getFullYear() - 150);

    this.maxDate = maxDate;
    this.minDate = minDate;
  }
  
  public formGroup!: FormGroup<RegisterForm>;

  public maxDate!: Date;

  public minDate!: Date;

  public get isCpfValid(): boolean {
    return false;
  }

  public async register(): Promise<void> {
    if (this.formGroup.valid) {
      const { name, email } = this.formGroup.value;

      this.navigateToLogin();
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  public navigateToLogin(): void {
    this.router.navigate(['login']);
  }

}
