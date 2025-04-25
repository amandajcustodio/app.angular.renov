import { Notification } from "../interfaces/notification.interface";
import { equipmentMockList } from "./equipment.mock.component";

export const notificationMockList: Notification[] = [
  {
    id: 'n1',
    title: 'Troca de filtro de ar',
    equipmentId: '1',
    alertDate: new Date('2025-04-30'),
    description: 'Substituir o filtro de ar do motor para melhor desempenho.',
    equipment: equipmentMockList[0],
  },
  {
    id: 'n2',
    title: 'Verificação do sistema hidráulico',
    equipmentId: '2',
    alertDate: new Date('2025-05-05'),
    description: 'Inspecionar o sistema hidráulico para vazamentos.',
    equipment: equipmentMockList[1],
  },
  {
    id: 'n3',
    title: 'Atualização de firmware',
    equipmentId: '3',
    alertDate: new Date('2025-04-28'),
    description: 'Atualizar o firmware do equipamento para a versão mais recente.',
    equipment: equipmentMockList[2],
  },
  {
    id: 'n4',
    title: 'Lubrificação dos eixos',
    equipmentId: '4',
    alertDate: new Date('2025-05-10'),
    description: 'Aplicar lubrificante nos eixos principais para evitar desgaste.',
    equipment: equipmentMockList[3],
  },
  {
    id: 'n5',
    title: 'Verificação de bateria',
    equipmentId: '5',
    alertDate: new Date('2025-04-25'),
    description: 'Checar o estado da bateria antes da próxima operação.',
    equipment: equipmentMockList[4],
  },
  {
    id: 'n6',
    title: 'Revisão preventiva',
    equipmentId: '6',
    alertDate: new Date('2025-05-01'),
    description: 'Executar revisão geral preventiva do equipamento.',
    equipment: equipmentMockList[0],
  },
];
