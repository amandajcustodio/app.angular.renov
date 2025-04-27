export interface Equipment {
  id: string;
  isActive: boolean;
  model: string;
  manufacturer: string;
  serialNumber: string;
  createdAt: Date;
  notificationAlert: boolean;
  notificationIds?: string[]
}