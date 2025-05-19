import { FormControl } from "@angular/forms";

export interface NotificationForm {
  title: FormControl<string>;
  equipmentId: FormControl<string | null>;
  alertDate: FormControl<Date | null>;
  alertTime: FormControl<Date | null>;
  isActive: FormControl<boolean>;
  constance: FormControl<number | null>;
  description: FormControl<string | null>;
}