//#region Imports

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { WebSocketService } from '../../services/websocket/websocket.service';
import { Notification } from '../../types/interfaces/notification.interface';

//#endregion

@Component({
  selector: 'app-websocket-notification',
  standalone: true,
  imports: [NgIf],
  template: `
    <div
      *ngIf="notification"
      class="absolute top-0 left-0 ml-3 mt-2 z-5 bg-green-300 border-2 border-green-500 text-white shadow-3 border-round p-3 w-11 md:w-30rem flex flex-column gap-2 cursor-pointer animation-slidein"
    >
      <p class="text-lg font-bold m-0">{{ notification.titulo }}</p>
      <p class="m-0">{{ notification.descricao }}</p>
    </div>
  `,
  styles: [`
    .animation-slidein {
      animation: slidein 0.4s ease-out;
    }

    @keyframes slidein {
      from {
        opacity: 0;
        transform: translateY(-1rem) translateX(-50%);
      }
      to {
        opacity: 1;
        transform: translateY(0) translateX(-50%);
      }
    }
  `]
})
export class WebSocketNotificationComponent implements OnInit, OnDestroy {

  //#region Constructor

  constructor(
    private readonly wsService: WebSocketService
  ) { }

  //#endregion

  //#region Public Properties
  
  public notification: Notification | null = null;

  //#endregion

  //#region Private Properties

  private subscription: Subscription = new Subscription();

  //#endregion

  //#region Public Methods

  public ngOnInit(): void {
    this.subscription = this.wsService.notification$.subscribe(msg => {
      this.notification = msg;
      timer(5000).subscribe(() => this.notification = null);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  //#endregion

}
