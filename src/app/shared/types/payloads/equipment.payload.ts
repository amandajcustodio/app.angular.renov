export interface CreateEquipmentPayload {
  equipamentoID: number;
  usuarioID: number;
  modelo: string;
  fabricante: string;
  numeroSerie: string;
  dataCriacao: Date;
  temNotificacao: boolean;
  status: boolean;
  notificacoesIds?: number[];
}

export interface UpdateEquipmentPayload {
  equipamentoID?: number;
  usuarioID?: number;
  modelo?: string;
  fabricante?: string;
  numeroSerie?: string;
  dataCriacao?: Date;
  temNotificacao?: boolean;
  notificacoesIds?: number[];
  status?: boolean;
}