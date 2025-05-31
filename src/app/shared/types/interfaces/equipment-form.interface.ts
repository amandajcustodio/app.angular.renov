import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { NotificationForm } from "./notification-form.interface";

export interface EquipmentForm {
  modelo: FormControl<string>;
  fabricante: FormControl<string>;
  numeroSerie: FormControl<string>;
  dataCriacao: FormControl<Date | null>;
  temNotificacao: FormControl<boolean>;
  notificacoes: FormArray<FormGroup<NotificationForm>>;
}