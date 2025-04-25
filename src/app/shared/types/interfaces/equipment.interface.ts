export interface Equipment {
  id: string;
  isActive: boolean;
  model: string;
  manufacturer: string;
  serialNumber: string;
  createdAt: Date;
  maintenanceAlert: boolean;
  maintenanceIds?: string[]
  maintenance?: Maintenance[];
}

export interface Maintenance {
  title: string;
  date: Date;
  description?: string;
}