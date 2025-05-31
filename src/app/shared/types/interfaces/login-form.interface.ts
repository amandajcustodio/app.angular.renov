import { FormControl } from "@angular/forms";

export interface LoginForm {
  email: FormControl<string>;
  senha: FormControl<string>
}