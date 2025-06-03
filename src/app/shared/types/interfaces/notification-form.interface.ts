import { FormControl } from "@angular/forms";

export interface NotificationForm {
  titulo: FormControl<string>;
  equipamentoId: FormControl<number | null>;
  dataDiaAlerta: FormControl<Date | null>;
  dataHoraAlerta: FormControl<Date | null>;
  status: FormControl<boolean>;
  constance: FormControl<number | null>;
  descricao: FormControl<string | undefined>;
}