import { Injectable } from '@angular/core';
import CryptoES from 'crypto-es';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: { email: string, password: string, userRole: string }[] = [];

  get _users() {
    return this.users;
  }

  constructor() {}

  register(email: string, password: string, userRole: string) {
    // Verificar se o email já existe
    const userExists = this.users.some(user => user.email === email);

    if (!userExists) {
      // Criptografar a senha antes de armazená-la
      const hashedPassword = CryptoES.SHA256(password).toString();

      this.users.push({ email, password: hashedPassword, userRole });
      return true;
    }

    return false;
  }
}
