import { FormControl } from "@angular/forms";

export interface NotificationForm {
  title: FormControl<string>;
  equipmentId: FormControl<string | null>;
  alertDate: FormControl<Date | null>;
  maxAlertDate: FormControl<Date | null>;
  constance: FormControl<number | null>;
  description: FormControl<string | null>;
}