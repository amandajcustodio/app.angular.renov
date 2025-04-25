import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EquipmentForm, MaintenanceForm } from '../../../../shared/types/interfaces/equipment-form.interface';
import { Router } from '@angular/router';
import { AlertInputComponent } from '../../../../shared/components/alert-input/alert-input.component';
import { Notification } from '../../../../shared/types/interfaces/notification.interface';
import { notificationMockList } from '../../../../shared/types/mocks/notification.mock.component';
import { NotificationCardComponent } from '../../../../shared/components/notification-card/notification-card.component';

@Component({
  selector: 'app-equipment-create',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ToggleSwitchModule, 
    InputText, 
    ButtonModule,
    AlertInputComponent,
    NotificationCardComponent
  ],
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

  @ViewChild(AlertInputComponent) 
  public modal!: AlertInputComponent;

  public isUpdate: boolean = false;

  public alertId: string = '';

  openDialog() {
    this.modal.open();
  }

  public formGroup!: FormGroup<EquipmentForm>;

  public notifications: Notification[] = notificationMockList;

  public async create(): Promise<void> {
    try {
      const formValue = this.formGroup.getRawValue();
    } catch (error) {
      
    }
  }

  public async navigateToList(): Promise<void> {
    await this.router.navigate(['main/equipment/list']);
  }
}
