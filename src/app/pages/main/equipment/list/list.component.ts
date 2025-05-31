import { Component } from '@angular/core';
import { Equipment } from '../../../../shared/types/interfaces/equipment.interface';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { equipmentMockList } from '../../../../shared/types/mocks/equipment.mock.component';

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
export class ListEquipmentComponent {
  constructor(
    private readonly router: Router
  ) { }

  public searchTerm = '';

  public equipments: Equipment[] = equipmentMockList;

  public get filteredList(): Equipment[] {
    return this.equipments.filter(equip =>
      equip.modelo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  public async create(): Promise<void> {
    await this.router.navigate(['main/equipment/create']);
  }

  public async update(id: number): Promise<void> {
    await this.router.navigate([`main/equipment/update/${id}`], { queryParams: { isUpdate: true } });
  }
}
