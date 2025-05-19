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
      model: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      manufacturer: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      serialNumber: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      createdAt: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      notificationAlert: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
      notification: new FormArray<FormGroup<NotificationForm>>([])
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.equipmentId = params.get('id') ?? '';
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

  public alertId: string = '';

  public equipmentId: string = '';

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

  public loadEquipment(id: string): void {
    const equipment = equipmentMockList.find(eq => eq.id === id);
    if (equipment) {
      this.formGroup.patchValue(equipment);
      this.formGroup.updateValueAndValidity();

      if (equipment.notificationIds?.length) this.loadNotificationByEquipment(equipment.notificationIds);
    }
  }

  public loadNotificationByEquipment(ids: string[]): void {
    console.log( notificationMockList.filter(notif => notif.id), ids)
    this.notifications = notificationMockList.filter(notif => ids.includes(notif.id));
    console.log(this.notifications)
  }

  //#endregion
}
