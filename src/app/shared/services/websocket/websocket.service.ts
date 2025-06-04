import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Subject } from 'rxjs';
import { Notification } from '../../types/interfaces/notification.interface';

@Injectable({ providedIn: 'root' })
export class WebSocketService {

  private stompClient: Client;

  private notificationSubject = new Subject<Notification>();

  notification$ = this.notificationSubject.asObservable();

  constructor() {
    this.stompClient = new Client({
      brokerURL: undefined,
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      reconnectDelay: 5000,
    });

    this.stompClient.onConnect = () => {
      this.stompClient.subscribe('/topic/notificacoes', (message: Message) => {
        try {
          const parsed: Notification = JSON.parse(message.body);
          this.notificationSubject.next(parsed);
        } catch (error) {
          console.error('❌ Erro ao converter notificação:', error);
        }
      });
    };

    this.stompClient.activate();
  }
}
