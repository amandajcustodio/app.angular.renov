import { FormControl } from "@angular/forms";

export interface RegisterForm {
  nome: FormControl<string>;
  email: FormControl<string>;
  senha: FormControl<string>;
  cpf: FormControl<string>;
  dataNascimento: FormControl<Date | undefined>;
  confirmPassword: FormControl<string>;
}