import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent,
    HeaderComponent
  ],
  template: `
    <app-header *ngIf="showHeader"></app-header>

    <div class="mb-8">
      <router-outlet></router-outlet>
    </div>
    
    <app-menu *ngIf="showMenu"></app-menu>
  `,
})
export class AppComponent {
  constructor(private router: Router) {
    this.updateVisibility();
    this.routerSubscription = router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateVisibility();
    });
  }

  public title = 'app.angular.renov';

  public showMenu: boolean = true;

  public showHeader: boolean = false;

  private readonly routerSubscription?: Subscription;

  private updateVisibility(): void {
    const headerRoutes = ['equipment/list', 'notifications/list'];
    const excludedRoutes = ['login', 'equipment/create', 'register'];
    
    this.showMenu = !excludedRoutes.some(route => this.router.url.includes(route));
    this.showHeader = headerRoutes.some(route => this.router.url.includes(route));
  }
}
