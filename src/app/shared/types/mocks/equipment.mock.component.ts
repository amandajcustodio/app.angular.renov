import { Equipment } from "../interfaces/equipment.interface";

export const equipmentMockList: Equipment[] = [
  {
    id: '1',
    isActive: true,
    model: 'EQP-1001',
    manufacturer: 'RenovTech',
    serialNumber: 'A1B2C3',
    createdAt: new Date('2024-01-15'),
    notificationAlert: false,
  },
  {
    id: '2',
    isActive: false,
    model: 'EQP-1002',
    manufacturer: 'GreenPower',
    serialNumber: 'D4E5F6',
    createdAt: new Date('2023-11-22'),
    notificationAlert: true,
    notificationIds: ['2', '1']
  },
  {
    id: '3',
    isActive: true,
    model: 'EQP-1003',
    manufacturer: 'RenovTech',
    serialNumber: 'G7H8I9',
    createdAt: new Date('2024-03-08'),
    notificationAlert: false,
  },
  {
    id: '4',
    isActive: false,
    model: 'EQP-1004',
    manufacturer: 'EcoEnergy',
    serialNumber: 'J1K2L3',
    createdAt: new Date('2023-12-01'),
    notificationAlert: true,
    notificationIds: ['3', '1']
  },
  {
    id: '5',
    isActive: true,
    model: 'EQP-1005',
    manufacturer: 'GreenPower',
    serialNumber: 'M4N5O6',
    createdAt: new Date('2024-02-20'),
    notificationAlert: false,
  },
  {
    id: '6',
    isActive: true,
    model: 'EQP-1006',
    manufacturer: 'EcoEnergy',
    serialNumber: 'P7Q8R9',
    createdAt: new Date('2024-04-05'),
    notificationAlert: false,
  },
  {
    id: '7',
    isActive: false,
    model: 'EQP-1007',
    manufacturer: 'RenovTech',
    serialNumber: 'S1T2U3',
    createdAt: new Date('2023-10-12'),
    notificationAlert: true,
    notificationIds: ['2', '3']
  },
  {
    id: '8',
    isActive: true,
    model: 'EQP-1008',
    manufacturer: 'GreenPower',
    serialNumber: 'V4W5X6',
    createdAt: new Date('2024-01-10'),
    notificationAlert: false,
  },
];
