import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from '../../types/interfaces/equipment.interface';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationForm } from '../../types/interfaces/notification-form.interface';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { Notification } from '../../types/interfaces/notification.interface';
import { equipmentMockList } from '../../types/mocks/equipment.mock.component';
import { InputNumberModule } from 'primeng/inputnumber';

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
    DatePickerModule,
    InputNumberModule
  ],
  templateUrl: './alert-input.component.html',
})
export class AlertInputComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group<NotificationForm>({
      title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      equipmentId: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      alertDate: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      maxAlertDate: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      constance: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });
  }

  @Input() 
  public notification?: Notification;

  @Input()
  public isUpdate: boolean = false;

  @Input()
  public showEquipment: boolean = true;

  @Input()
  public alertId: string = '';

  public equipmentList: Equipment[] = [];

  public formGroup!: FormGroup<NotificationForm>;

  public display: boolean = false;

  public ngOnInit(): void {
    if (this.showEquipment)
      this.loadEquipments();
  }

  public open(): void {
    this.display = true;
  }

  public close(): void {
    this.display = false;
  }

  public create(): void {
    try {
      
    } catch (error) {
      
    }
  }

  public update(): void {
    try {
      
    } catch (error) {
      
    }
  }

  private loadEquipments(): void {
    this.equipmentList = equipmentMockList.filter(eq => eq.isActive);
  }
}
