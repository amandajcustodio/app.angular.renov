import { Equipment } from "./equipment.interface";

export interface Notification {
  title: string;
  id: string;
  equipmentId: string;
  alertDate: Date;
  description?: string;
  equipment?: Equipment;
}