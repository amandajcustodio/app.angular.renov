import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(
    private readonly router: Router
  ) { }

  public isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
