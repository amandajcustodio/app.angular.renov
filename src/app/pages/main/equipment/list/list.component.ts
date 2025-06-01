//#region Imports

import { Component, OnInit } from '@angular/core';
import { Equipment } from '../../../../shared/types/interfaces/equipment.interface';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { equipmentMockList } from '../../../../shared/types/mocks/equipment.mock.component';
import { EquipmentsService } from '../../../../shared/services/equipments/equipments.service';
import { UsersService } from '../../../../shared/services/users/users.service';

//#endregion

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgClass,
    InputText,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './list.component.html'
})
export class ListEquipmentComponent implements OnInit {

  //#region Constructor

  constructor(
    private readonly router: Router,
    private readonly equipmentsService: EquipmentsService,
    private readonly usersService: UsersService
  ) { }

  //#endregion

  //#region Public Properties

  public searchTerm = '';

  public equipments: Equipment[] = equipmentMockList;

  //#endregion

  //#region Getters and Setters

  public get filteredList(): Equipment[] {
    return this.equipments.filter(equip =>
      equip.modelo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  //#endregion

  //#region Public Methods

  public async ngOnInit(): Promise<void> {
    await this.loadEquipments();
  }

  public async create(): Promise<void> {
    await this.router.navigate(['main/equipment/create']);
  }

  public async update(id: number): Promise<void> {
    await this.router.navigate([`main/equipment/update/${id}`], { queryParams: { isUpdate: true } });
  }

  public async loadEquipments(): Promise<void> {
    try {
      const userId = await this.usersService.getMe()?.usuarioID || 0;
      this.equipments = await this.equipmentsService.loadByUserId(userId);
    } catch (error) {
      console.log('Falha ao carregar equipamentos')
    }
  }

  //#endregion

}
