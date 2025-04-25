import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent
  ],
  template: `
    <div class="mb-8">
      <router-outlet></router-outlet>
    </div>
    
    <app-menu *ngIf="showMenu"></app-menu>
  `,
})
export class AppComponent {
  constructor(private router: Router) {
    this.updateMenuVisibility();
    this.routerSubscription = router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateMenuVisibility();
    });
  }

  public title = 'app.angular.renov';

  public showMenu: boolean = true;

  private readonly routerSubscription?: Subscription;

  private updateMenuVisibility(): void {
    const excludedRoutes = ['login', 'equipment/create'];
    this.showMenu = !excludedRoutes.some(route => this.router.url.includes(route));
  }
}
