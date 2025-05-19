import { Equipment } from "./equipment.interface";

export interface Notification {
  id: string; 
  title: string; 
  equipmentId: string; 
  alertDate: Date; 
  alertTime: Date;
  isActive: boolean;
  constance?: number;
  description?: string;
  equipment?: Equipment;
}