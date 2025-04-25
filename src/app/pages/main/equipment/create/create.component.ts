import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EquipmentForm, MaintenanceForm } from '../../../../shared/types/interfaces/equipment-form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleSwitchModule, InputText, ButtonModule],
  templateUrl: './create.component.html',
})
export class CreateEquipmentComponent {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.formGroup = this.formBuilder.group<EquipmentForm>({
      model: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      manufacturer: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      serialNumber: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      createdAt: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      maintenanceAlert: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
      maintenance: new FormArray<FormGroup<MaintenanceForm>>([])
    });
  }

  public formGroup!: FormGroup<EquipmentForm>;

  create() {
    try {
      const formValue = this.formGroup.getRawValue();
    } catch (error) {
      
    }
  }

  navigateToList() {
    this.router.navigate(['main/equipment/list']);
  }
}
