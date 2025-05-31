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
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
  selector: 'app-modal-notification-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule, 
    DropdownModule, 
    SelectModule, 
    DialogModule, 
    ButtonModule,
    InputNumberModule,
    ToggleSwitch,
    DatePickerModule
  ],
  templateUrl: './modal-notification-form.component.html',
})
export class ModalNotificationFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group<NotificationForm>({
      titulo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      equipamentoId: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
      dataDiaAlerta: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      dataHoraAlerta: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      status: new FormControl (false, { nonNullable: true, validators: [Validators.required] }),
      constance: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      descricao: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  @Input() 
  public notification?: Notification;

  @Input()
  public isUpdate: boolean = false;

  @Input()
  public showEquipment: boolean = true;

  @Input()
  public alertId: number = 0;

  public equipmentList: Equipment[] = [];

  public formGroup!: FormGroup<NotificationForm>;

  public display: boolean = false;

  public ngOnInit(): void {
    if (this.showEquipment)
      this.loadEquipments();

    if (this.isUpdate && this.notification)
      this.initializeFormGroup(this.notification);
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
    this.equipmentList = equipmentMockList.filter(eq => eq.status);
  }

  private initializeFormGroup(entity: Notification): void {
    this.formGroup.patchValue({
      titulo: entity.titulo,
      descricao: entity.descricao,
      status: entity.status,
      equipamentoId: entity.equipamentoId,
      dataHoraAlerta: entity.dataHoraAlerta,
      dataDiaAlerta: entity.dataDiaAlerta,
      constance: entity.constance
    });

    this.formGroup.updateValueAndValidity();
  }
}
