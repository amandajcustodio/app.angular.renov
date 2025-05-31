import { Injectable } from '@angular/core';
import { CreateNotificationPayload, UpdateNotificationPayload } from '../../types/payloads/notification.payload';
import { BaseHttpService } from '../http/http.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private readonly http: BaseHttpService) {}
  
  private readonly baseUrl =  environment.routes.notifications;

  async create(payload: CreateNotificationPayload): Promise<void> {
    await this.http.post<void>(this.baseUrl.base, payload);
  }

  async update(id: number, payload: UpdateNotificationPayload): Promise<void> {
    await this.http.put<void>(this.baseUrl.byId(id), payload);
  }

  async delete(id: number): Promise<void> {
    await this.http.delete<void>(this.baseUrl.byId(id));
  }

  async getByUserId(userId: number): Promise<CreateNotificationPayload[]> {
    const users = await this.http.get<CreateNotificationPayload[]>(this.baseUrl.byId(userId));

    if (!users)
      throw new Error();

    return users;
  }
}
