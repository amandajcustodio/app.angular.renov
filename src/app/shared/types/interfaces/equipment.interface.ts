import { Notification } from "./notification.interface";

export interface Equipment {
  equipamentoID: number;
  usuarioID: number;
  modelo: string;
  fabricante: string;
  numeroSerie: string;
  dataCriacao: Date;
  status: boolean;
  temNotificacao: boolean;
  notificacoes?: Notification[];
}