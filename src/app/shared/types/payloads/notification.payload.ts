export interface CreateNotificationPayload {
  notificacaoId: number; 
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
  notificacaoId?: number; 
  titulo?: string; 
  equipamentoId?: number; 
  usuarioId?: number; 
  dataDiaAlerta?: Date; 
  dataHoraAlerta?: Date;
  status?: boolean;
  descricao?: string;
  constance?: number;
}