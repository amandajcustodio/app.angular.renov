import { Injectable } from '@angular/core';
import { Equipment } from '../../types/interfaces/equipment.interface';
import { CreateEquipmentPayload, UpdateEquipmentPayload } from '../../types/payloads/equipment.payload';
import { BaseHttpService } from '../http/http.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  constructor(private http: BaseHttpService) {}

  private readonly baseUrl = environment.routes.equipments;

  async create(payload: CreateEquipmentPayload): Promise<void> {
    await this.http.post<void>(this.baseUrl.register, payload);
  }

  async update(id: number, payload: UpdateEquipmentPayload): Promise<void> {
    await this.http.put<void>(this.baseUrl.byId(id), payload);
  }

  async delete(id: number): Promise<void> {
    await this.http.delete<void>(this.baseUrl.byId(id));
  }

  async loadByUserId(userId: number): Promise<Equipment[]> {
    const equipamentos = await this.http.get<Equipment[]>(this.baseUrl.byId(userId));

    if (!equipamentos || equipamentos.length === 0) {
      throw new Error();
    }

    return equipamentos;
  }
}
