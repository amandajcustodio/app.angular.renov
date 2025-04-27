import { Equipment } from "./equipment.interface";

export interface Notification {
  id: string;
  title: string;
  equipmentId: string;
  alertDate: Date;
  maxAlertDate?: Date;
  constance?: number;
  description?: string;
  equipment?: Equipment;
}