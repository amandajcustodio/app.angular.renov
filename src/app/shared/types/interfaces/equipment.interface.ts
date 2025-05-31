export interface Equipment {
  equipamentoID: number;
  usuarioID: number;
  modelo: string;
  fabricante: string;
  numeroSerie: string;
  dataCriacao: Date;
  temNotificacao: boolean;
  notificacoesIds?: number[];
  status: boolean;
}