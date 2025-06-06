import { Equipment } from "../interfaces/equipment.interface";

export const equipmentMockList: Equipment[] = [
  {
    equipamentoID: 1,
    usuarioID: 1,
    status: true,
    modelo: 'EQP-1001',
    fabricante: 'RenovTech',
    numeroSerie: 'A1B2C3',
    dataCriacao: new Date('2024-01-15'),
    temNotificacao: false,
  },
  {
    equipamentoID: 2,
    usuarioID: 1,
    status: false,
    modelo: 'EQP-1002',
    fabricante: 'GreenPower',
    numeroSerie: 'D4E5F6',
    dataCriacao: new Date('2023-11-22'),
    temNotificacao: true
  },
  {
    equipamentoID: 3,
    usuarioID: 1,
    status: true,
    modelo: 'EQP-1003',
    fabricante: 'RenovTech',
    numeroSerie: 'G7H8I9',
    dataCriacao: new Date('2024-03-08'),
    temNotificacao: false,
  },
  {
    equipamentoID: 4,
    usuarioID: 1,
    status: false,
    modelo: 'EQP-1004',
    fabricante: 'EcoEnergy',
    numeroSerie: 'J1K2L3',
    dataCriacao: new Date('2023-12-01'),
    temNotificacao: true
  },
  {
    equipamentoID: 5,
    usuarioID: 1,
    status: true,
    modelo: 'EQP-1005',
    fabricante: 'GreenPower',
    numeroSerie: 'M4N5O6',
    dataCriacao: new Date('2024-02-20'),
    temNotificacao: false,
  },
  {
    equipamentoID: 6,
    usuarioID: 1,
    status: true,
    modelo: 'EQP-1006',
    fabricante: 'EcoEnergy',
    numeroSerie: 'P7Q8R9',
    dataCriacao: new Date('2024-04-05'),
    temNotificacao: false,
  },
  {
    equipamentoID: 7,
    usuarioID: 1,
    status: false,
    modelo: 'EQP-1007',
    fabricante: 'RenovTech',
    numeroSerie: 'S1T2U3',
    dataCriacao: new Date('2023-10-12'),
    temNotificacao: true
  },
  {
    equipamentoID: 8,
    usuarioID: 1,
    status: true,
    modelo: 'EQP-1008',
    fabricante: 'GreenPower',
    numeroSerie: 'V4W5X6',
    dataCriacao: new Date('2024-01-10'),
    temNotificacao: false,
  },
];
