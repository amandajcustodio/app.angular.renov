export interface CreateNotificationPayload {
  titulo: string; 
  equipamentoId: number; 
  usuarioId: number; 
  dataDiaAlerta: Date; 
  dataHoraAlerta: Date;
  status: boolean;
  descricao?: string;
  constance?: number;
}

export interface UpdateNotificationPayload {
  titulo?: string; 
  equipamentoId?: number; 
  usuarioId?: number; 
  dataDiaAlerta?: Date; 
  dataHoraAlerta?: Date;
  status?: boolean;
  descricao?: string;
  constance?: number;
}