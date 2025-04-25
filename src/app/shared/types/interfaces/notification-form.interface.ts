import { FormControl } from "@angular/forms";

export interface NotificationForm {
  title: FormControl<string>;
  equipmentId: FormControl<string>;
  alertDate: FormControl<Date | null>;
  description: FormControl<string | null>;
}