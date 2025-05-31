import { Component, Input } from '@angular/core';
import { Notification } from '../../types/interfaces/notification.interface';
import { DatePipe, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [DatePipe, ButtonModule, NgClass],
  templateUrl: './notification-item.component.html'
})
export class NotificationItemComponent {
  @Input({ required: true })
  public notification!: Notification;

  public today: Date = new Date();
}
