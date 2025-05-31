import { Equipment } from "./equipment.interface";

export interface Notification {
  notificacaoId: number; 
  titulo: string; 
  equipamentoId: number; 
  usuarioId: number; 
  dataDiaAlerta: Date; 
  dataHoraAlerta: Date;
  status: boolean;
  descricao?: string;
  constance?: number;
  equipamento?: Equipment;
}