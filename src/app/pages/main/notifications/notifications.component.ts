import { Component, Input } from '@angular/core';
import { NotificationItemComponent } from '../../../shared/components/notification-item/notification-item.component';
import { NgFor } from '@angular/common';
import { Notification } from '../../../shared/types/interfaces/notification.interface';
import { notificationMockList } from '../../../shared/types/mocks/notification.mock.component';

@Component({
  selector: 'app-notifications',
  imports: [NotificationItemComponent, NgFor],
  standalone: true,
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent {
  @Input()
  public showEquipment: boolean = true;

  public notifications: Notification[] = notificationMockList;
}
