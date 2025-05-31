import { Component, Input } from '@angular/core';
import { Notification } from '../../types/interfaces/notification.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './notification-card.component.html'
})
export class NotificationCardComponent {
  @Input({ required: true }) 
  public notification!: Notification;
}
