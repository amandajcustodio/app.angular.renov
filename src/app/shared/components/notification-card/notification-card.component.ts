//#region Imports

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from '../../types/interfaces/notification.interface';
import { DatePipe } from '@angular/common';
import { NotificationsService } from '../../services/notifications/notifications.service';

//#endregion

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './notification-card.component.html'
})
export class NotificationCardComponent {

  //#region Constructor

  constructor(
    private readonly notificationsService: NotificationsService
  ) { }

  //#endregion

  //#region Public Properties

  @Output()
  public reload: EventEmitter<void> = new EventEmitter<void>();

  @Input({ required: true }) 
  public notification!: Notification;

  //#endregion

  //#region Public Methods

  public async delete(id: number): Promise<void> {
    try {
      await this.notificationsService.delete(id);
      this.reload.emit();
    } catch (error) {
      console.log('Erro ao excluir.')
    }
  }

  //#endregion

}
