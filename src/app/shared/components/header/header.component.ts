import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private readonly router: Router
  ) { }

  public isActive(path: string): boolean {
    return this.router.url.includes(path);
  }
}
