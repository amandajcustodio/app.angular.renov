//#region Imports

import { Component, Input } from '@angular/core';
import { Notification } from '../../types/interfaces/notification.interface';
import { DatePipe, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';

//#endregion

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [DatePipe, ButtonModule, NgClass],
  templateUrl: './notification-item.component.html'
})
export class NotificationItemComponent {

  //#region Public Properties

  @Input({ required: true })
  public notification!: Notification;

  public today: Date = new Date();

  //#endregion
  
}
