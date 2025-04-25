import { Maintenance } from "../interfaces/equipment.interface";

export const maintenanceMockList: Maintenance[] = [
  {
    title: 'Troca de filtro',
    date: new Date('2024-04-01'),
    description: 'Filtro de ar trocado devido à saturação após 6 meses de uso.',
  },
  {
    title: 'Atualização de firmware',
    date: new Date('2024-03-15'),
    description: 'Firmware atualizado para a versão 2.1.3 para correção de bugs.',
  },
  {
    title: 'Verificação elétrica',
    date: new Date('2024-02-28'),
    description: 'Inspeção dos componentes elétricos e substituição de cabo danificado.',
  },
];
