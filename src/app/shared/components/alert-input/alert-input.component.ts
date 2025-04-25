import { Component, Input } from '@angular/core';
import { Equipment } from '../../types/interfaces/equipment.interface';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationForm } from '../../types/interfaces/notification-form.interface';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-alert-input',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule, 
    DropdownModule, 
    SelectModule, 
    DialogModule, 
    ButtonModule,
    DatePickerModule
  ],
  templateUrl: './alert-input.component.html',
})
export class AlertInputComponent {
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group<NotificationForm>({
      title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      equipmentId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      alertDate: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });
  }

  @Input() 
  public equipmentList: Equipment[] = [];

  @Input() 
  public notification?: Notification;

  @Input()
  public isUpdate: boolean = false;

  @Input()
  alertId: string = '';

  public formGroup!: FormGroup<NotificationForm>;

  public display: boolean = false;

  public open(): void {
    this.display = true;
  }

  public close(): void {
    this.display = false;
  }

  create(): void {
    try {
      
    } catch (error) {
      
    }
  }

  update(): void {
    try {
      
    } catch (error) {
      
    }
  }
}
