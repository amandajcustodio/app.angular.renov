import { Notification } from "../interfaces/notification.interface";
import { equipmentMockList } from "./equipment.mock.component";

export const notificationMockList: Notification[] = [
  {
    id: '1',
    title: 'Troca de filtro de ar',
    equipmentId: '1',
    alertDate: new Date('2025-04-30'),
    maxAlertDate: new Date('2026-04-30'),
    constance: 30,
    description: 'Substituir o filtro de ar do motor para melhor desempenho.',
    equipment: equipmentMockList[0],
  },
  {
    id: '2',
    title: 'Verificação do sistema hidráulico',
    equipmentId: '2',
    alertDate: new Date('2025-05-05'),
    maxAlertDate: new Date('2026-05-05'),
    constance: 90,
    description: 'Inspecionar o sistema hidráulico para vazamentos.',
    equipment: equipmentMockList[1],
  },
  {
    id: '3',
    title: 'Atualização de firmware',
    equipmentId: '3',
    alertDate: new Date('2025-04-28'),
    description: 'Atualizar o firmware do equipamento para a versão mais recente.',
    equipment: equipmentMockList[2],
  },
  {
    id: '4',
    title: 'Lubrificação dos eixos',
    equipmentId: '4',
    alertDate: new Date('2025-05-10'),
    maxAlertDate: new Date('2026-05-10'),
    constance: 60,
    description: 'Aplicar lubrificante nos eixos principais para evitar desgaste.',
    equipment: equipmentMockList[3],
  },
  {
    id: '5',
    title: 'Verificação de bateria',
    equipmentId: '5',
    alertDate: new Date('2025-04-25'),
    description: 'Checar o estado da bateria antes da próxima operação.',
    equipment: equipmentMockList[4],
  },
  {
    id: '6',
    title: 'Revisão preventiva',
    equipmentId: '6',
    alertDate: new Date('2025-05-01'),
    description: 'Executar revisão geral preventiva do equipamento.',
    equipment: equipmentMockList[0],
  },
];
