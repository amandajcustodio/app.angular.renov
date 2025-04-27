import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { NotificationForm } from "./notification-form.interface";

export interface EquipmentForm {
  model: FormControl<string>;
  manufacturer: FormControl<string>;
  serialNumber: FormControl<string>;
  createdAt: FormControl<Date | null>;
  notificationAlert: FormControl<boolean>;
  notification: FormArray<FormGroup<NotificationForm>>;
}