//#region Imports

import { Component, Input, ViewChild } from '@angular/core';
import { Notification } from '../../types/interfaces/notification.interface';
import { DatePipe, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ModalNotificationFormComponent } from '../../modals/modal-notification-form/modal-notification-form.component';

//#endregion

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [DatePipe, ButtonModule, NgClass, ModalNotificationFormComponent],
  templateUrl: './notification-item.component.html'
})
export class NotificationItemComponent {

  //#region Public Properties

  @ViewChild(ModalNotificationFormComponent) 
  public modal!: ModalNotificationFormComponent;

  @Input({ required: true })
  public notification!: Notification;

  public today: Date = new Date();

  //#endregion

  //#region Public Methods
  
  public openDialog(): void {
    this.modal.open();
  }

  //#endregion
  
}
