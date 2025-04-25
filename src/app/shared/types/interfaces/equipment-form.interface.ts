import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface EquipmentForm {
  model: FormControl<string>;
  manufacturer: FormControl<string>;
  serialNumber: FormControl<string>;
  createdAt: FormControl<Date | null>;
  maintenanceAlert: FormControl<boolean>;
  maintenance: FormArray<FormGroup<MaintenanceForm>>;
}

export interface MaintenanceForm {
  title: FormControl<string>
  date: FormControl<Date>;
  description: FormControl<string | null>;
}