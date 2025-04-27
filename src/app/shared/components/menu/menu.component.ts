import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AlertInputComponent } from '../alert-input/alert-input.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, AlertInputComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(
    private readonly router: Router
  ) { }

  @ViewChild(AlertInputComponent) 
  public modal!: AlertInputComponent;

  public isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  public openDialog(): void {
    this.modal.open();
  }
}
