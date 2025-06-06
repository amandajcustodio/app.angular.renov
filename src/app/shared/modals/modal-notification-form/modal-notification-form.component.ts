//#region Imports

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { CreateNotificationPayload, UpdateNotificationPayload } from '../../types/payloads/notification.payload';
import { UsersService } from '../../services/users/users.service';
import { EquipmentsService } from '../../services/equipments/equipments.service';

//#endregion

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

  //#region Constructor

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly notificationsService: NotificationsService,
    private readonly usersService: UsersService,
    private readonly equipmentsService: EquipmentsService
  ) {
    this.formGroup = this.formBuilder.group<NotificationForm>({
      titulo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      equipamentoId: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
      dataDiaAlerta: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      dataHoraAlerta: new FormControl (null, { nonNullable: true, validators: [Validators.required] }),
      status: new FormControl (false, { nonNullable: true, validators: [Validators.required] }),
      constance: new FormControl (null, { validators: [Validators.required] }),
      descricao: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  //#endregion

  //#region Public Properties

  @Input() 
  public notification?: Notification;

  @Input()
  public isUpdate: boolean = false;

  @Input()
  public showEquipment: boolean = true;

  @Input()
  public equipmentId?: number;

  @Output()
  public reload: EventEmitter<void> = new EventEmitter<void>();

  public equipmentList: Equipment[] = [];

  public formGroup!: FormGroup<NotificationForm>;

  public display: boolean = false;

  public userId!: number;

  public isLoading: boolean = false;

  //#endregion

  //#region Public Methods

  public ngOnInit(): void {
    this.userId = this.usersService.getMe()?.id || 0;

    if (this.equipmentId && !this.showEquipment)
      this.formGroup.controls['equipamentoId'].setValue(this.equipmentId);

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

  public async create(): Promise<void> {
    try {
      this.isLoading = true;
      const formValue = this.formGroup.getRawValue();

      const dataHora = formValue.dataHoraAlerta ? formValue.dataHoraAlerta : new Date();
      const dataDia = formValue.dataDiaAlerta ? formValue.dataDiaAlerta : new Date();

      const payload: CreateNotificationPayload = {
        ...formValue,
        equipamentoId: formValue.equipamentoId ? formValue.equipamentoId : 0,
        dataHoraAlerta: this.toUTCDate(dataHora),
        dataDiaAlerta: dataDia
      }

      await this.notificationsService.create(payload);
      window.location.reload();
      this.close();
    } catch (error) {
      console.log('Erro ao criar notificação');
    } finally {
      this.isLoading = false;
    }
  }

  public async update(): Promise<void> {
    try {
      this.isLoading = true;
      const formValue = this.formGroup.getRawValue();

      const dataHora = formValue.dataHoraAlerta ? formValue.dataHoraAlerta : new Date();
      const dataDia = formValue.dataDiaAlerta ? formValue.dataDiaAlerta : new Date();

      const payload: UpdateNotificationPayload = {
        ...formValue,
        equipamentoId: formValue.equipamentoId ? formValue.equipamentoId : 0,
        dataHoraAlerta: this.toUTCDate(dataHora),
        dataDiaAlerta: new Date(dataDia)
      }

      await this.notificationsService.update(this.notification?.id || 0, payload);
      window.location.reload();
    } catch (error) {
      console.log('Erro ao editar notificação');
    } finally {
      this.isLoading = false;
    }
  }

  //#endregion

  //#region Private Methods

  private async loadEquipments(): Promise<void> {
    try {
      this.equipmentList = await this.equipmentsService.loadByUserId(this.userId);
    } catch (error) {
      console.log('Erro ao carregar equipamentos');
    }
  }

  private initializeFormGroup(entity: Notification): void {
    if (!this.formGroup) return;

    this.formGroup.setValue({
      titulo: entity.titulo ?? '',
      descricao: entity.descricao ?? '',
      status: entity.status ?? false,
      equipamentoId: entity.equipamentoId ?? 0,
      dataHoraAlerta: entity.dataHoraAlerta ? new Date(entity.dataHoraAlerta) : null,
      dataDiaAlerta: entity.dataDiaAlerta ? new Date(entity.dataDiaAlerta) : null,
      constance: null
    });

    this.formGroup.updateValueAndValidity();
  }

  private toUTCDate(date: Date): Date {
  return new Date(Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ));
}

  //#endregion

}
