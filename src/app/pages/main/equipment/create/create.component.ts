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
    NotificationCardComponent
  ],
  templateUrl: './create.component.html',
})
export class CreateEquipmentComponent implements OnInit {
  //#region Constructor

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
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

  public alertId?: number;

  public equipmentId!: number;

  public formGroup!: FormGroup<EquipmentForm>;

  public notifications: Notification[] = [];

  //#endregion

  //#region Public Methods

  public ngOnInit(): void {
    if (this.isUpdate && this.equipmentId) {
      this.loadEquipment(this.equipmentId);
    }
  }

  public openDialog(): void {
    this.modal.open();
  }

  public async create(): Promise<void> {
    try {
      const formValue = this.formGroup.getRawValue();
    } catch (error) {
      
    }
  }

  public async update(): Promise<void> {
    try {
      const formValue = this.formGroup.getRawValue();
    } catch (error) {
      
    }
  }

  public async navigateToList(): Promise<void> {
    await this.router.navigate(['main/equipment/list']);
  }

  public loadEquipment(id: number): void {
    const equipment = equipmentMockList.find(eq => eq.equipamentoID === id);
    if (equipment) {
      this.formGroup.patchValue(equipment);
      this.formGroup.updateValueAndValidity();

      if (equipment.notificacoesIds?.length) this.loadNotificationByEquipment(equipment.notificacoesIds);
    }
  }

  public loadNotificationByEquipment(ids: number[]): void {
    this.notifications = notificationMockList.filter(notif => ids.includes(notif.notificacaoId));
  }

  //#endregion
}
