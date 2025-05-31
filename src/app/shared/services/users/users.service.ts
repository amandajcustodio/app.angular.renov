import { Injectable } from '@angular/core';
import { User } from '../../types/interfaces/user.interface';
import { LoginPayload, RegisterPayload } from '../../types/payloads/auth.payload';
import { BaseHttpService } from '../http/http.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private readonly http: BaseHttpService) {}
  
  private readonly baseUrl = environment.routes.users;
  private readonly localStorageKey = 'me';

  async login(payload: LoginPayload): Promise<User> {
    const user = await this.http.post<User>(this.baseUrl.login, payload);

    if (!user) {
      throw new Error();
    }

    this.saveMe(user);
    return user;
  }

  async register(payload: RegisterPayload): Promise<void> {
    const data = await this.http.post<string>(this.baseUrl.register, payload);

    if (!data)
      throw new Error();
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  saveMe(user: User): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  getMe(): User | null {
    const stored = localStorage.getItem(this.localStorageKey);
    return stored ? JSON.parse(stored) as User : null;
  }
}
