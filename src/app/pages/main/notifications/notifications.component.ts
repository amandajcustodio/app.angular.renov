import { Component, Input, OnInit } from '@angular/core';
import { NotificationItemComponent } from '../../../shared/components/notification-item/notification-item.component';
import { NgFor } from '@angular/common';
import { Notification } from '../../../shared/types/interfaces/notification.interface';
import { notificationMockList } from '../../../shared/types/mocks/notification.mock.component';
import { NotificationsService } from '../../../shared/services/notifications/notifications.service';
import { UsersService } from '../../../shared/services/users/users.service';

@Component({
  selector: 'app-notifications',
  imports: [NotificationItemComponent, NgFor],
  standalone: true,
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {

  //#region Constructor

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly usersService: UsersService
  ) { }

  //#endregion

  //#region Public Properties

  @Input()
  public showEquipment: boolean = true;

  public notifications?: Notification[];
  
  public userId!: number;

  //#endregion

  //#region Public Methods

  public async ngOnInit(): Promise<void> {
    this.userId = this.usersService.getMe()?.usuarioID || 0;

    await this.loadNotifications();
  }

  public async loadNotifications(): Promise<void> {
    try {
      this.notifications = await this.notificationsService.getByUserId(this.userId);
    } catch (error) {
      console.log('Erro ao buscar notificações');
    }
  }

  //#endregion

}
