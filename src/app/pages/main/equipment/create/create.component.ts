//#region Imports

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EquipmentForm } from '../../../../shared/types/interfaces/equipment-form.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalNotificationFormComponent } from '../../../../shared/modals/modal-notification-form/modal-notification-form.component';
import { Notification } from '../../../../shared/types/interfaces/notification.interface';
import { notificationMockList } from '../../../../shared/types/mocks/notification.mock.component';
import { NotificationCardComponent } from '../../../../shared/components/notification-card/notification-card.component';
import { equipmentMockList } from '../../../../shared/types/mocks/equipment.mock.component';
import { NotificationForm } from '../../../../shared/types/interfaces/notification-form.interface';
import { CreateEquipmentPayload, UpdateEquipmentPayload } from '../../../../shared/types/payloads/equipment.payload';
import { UsersService } from '../../../../shared/services/users/users.service';
import { EquipmentsService } from '../../../../shared/services/equipments/equipments.service';
import { DatePickerModule } from 'primeng/datepicker';

//#endregion

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
    ModalNotificationFormComponent,
    NotificationCardComponent,
    DatePickerModule
  ],
  templateUrl: './create.component.html',
})
export class CreateEquipmentComponent implements OnInit {
  //#region Constructor

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UsersService,
    private readonly equipmentService: EquipmentsService
  ) {
    this.formGroup = this.formBuilder.group<EquipmentForm>({
      modelo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      fabricante: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      numeroSerie: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      dataCriacao: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      temNotificacao: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
      notificacoes: new FormArray<FormGroup<NotificationForm>>([])
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.equipmentId = +(params.get('id') || 0) ;
    });

    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.isUpdate = queryParams.get('isUpdate') === 'true';
    });
  }

  //#endregion

  //#region Public Properties

  @ViewChild(ModalNotificationFormComponent) 
  public modal!: ModalNotificationFormComponent;

  public isUpdate: boolean = false;

  public userId!: number

  public equipmentId!: number;

  public formGroup!: FormGroup<EquipmentForm>;

  public notifications: Notification[] = [];

  public isLoading: boolean = false;

  //#endregion

  //#region Public Methods

  public ngOnInit(): void {
    const user = this.userService.getMe();
    this.userId = user ? user.id : 0;

    if (this.isUpdate && this.equipmentId) {
      this.loadEquipment(this.equipmentId);
    }
  }

  public openDialog(): void {
    this.modal.open();
  }

  public async create(): Promise<void> {
    try {
      this.isLoading = true;

      const formValue = this.formGroup.getRawValue();
      const dataCriacao = formValue.dataCriacao ? formValue.dataCriacao : new Date();

      const payload: CreateEquipmentPayload = {
        ...formValue,
        status: true,
        dataCriacao: new Date(dataCriacao),
        usuarioID: this.userId
      }
      await this.equipmentService.create(payload);
      this.navigateToList();
    } catch (error) {
      console.log('erro criação equipamento')
    } finally {
      this.isLoading = false;
    }
  }

  public async update(): Promise<void> {
    try {
      this.isLoading = true;

      const formValue = this.formGroup.getRawValue();

      const payload: UpdateEquipmentPayload = {
        ...formValue,
        status: true,
        dataCriacao: formValue.dataCriacao ? new Date(formValue.dataCriacao) : new Date(),
        usuarioID: this.userId
      }

      await this.equipmentService.update(this.equipmentId, payload);
      this.navigateToList();
    } catch (error) {
      console.log('erro atualização equipamento')
    } finally {
      this.isLoading = false;
    }
  }

  public async navigateToList(): Promise<void> {
    await this.router.navigate(['main/equipment/list']);
  }

  public async loadEquipment(id: number): Promise<void> {
    try {
      const equipments = await this.equipmentService.loadByUserId(this.userId);
      const equipment = equipments.find(eq => eq.equipamentoID === this.equipmentId);

      if (equipment) {
        
        const formatDateOnly = (date: Date | string | null): string | null => {
          if (!date) return null;
          const d = new Date(date);
          return d.toISOString().split('T')[0]; // yyyy-MM-dd
        };

        const formValue = {
          ...equipment,
          dataCriacao: equipment.dataCriacao ? new Date(equipment.dataCriacao) : null
        };

        this.formGroup.patchValue(formValue);
        this.formGroup.updateValueAndValidity();

        if (equipment.notificacoes?.length) {
          this.notifications = equipment.notificacoes;
        }
      }
    } catch (error) {
      console.log('O equipamento não foi encontrado.')
    }
  }

  public loadNotificationByEquipment(ids: number[]): void {
    this.notifications = notificationMockList.filter(notif => ids.includes(notif.id));
  }

  //#endregion

}
