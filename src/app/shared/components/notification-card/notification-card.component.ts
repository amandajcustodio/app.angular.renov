//#region Imports

import { Component, Input } from '@angular/core';
import { Notification } from '../../types/interfaces/notification.interface';
import { DatePipe } from '@angular/common';

//#endregion

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './notification-card.component.html'
})
export class NotificationCardComponent {

  //#region Public Properties

  @Input({ required: true }) 
  public notification!: Notification;

  //#endregion

}
