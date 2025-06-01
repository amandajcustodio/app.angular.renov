//#region Imports

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//#endregion

@Component({
  selector: 'app-header',
  imports: [NgClass],
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  //#region Constructor

  constructor(
    private readonly router: Router
  ) { }

  //#endregion

  //#region Public Methods

  public isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

  //#endregion
  
}
