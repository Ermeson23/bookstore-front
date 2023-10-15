import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as CryptoJS from 'crypto-js';

import { User } from '../../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  showMenuEmitter = new EventEmitter<boolean>();

  private userRole: string = '';

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole() {
    return this.userRole;
  }

  private authenticatedUser: boolean = false;

  get _userRole() {
    return this.userRole;
  }

  constructor(private router: Router, private matSnackBar: MatSnackBar, private userService: UserService) {}

  login(user: User) {
    // Verifique se o usuário existe no serviço de usuário
    const registeredUser = this.userService._users.find(
      u => u.email === user.name
    );

    if (registeredUser) {
      // Criptografe a senha fornecida pelo usuário
      const inputPassword = CryptoJS.SHA256(user.password!).toString();

      if (inputPassword === registeredUser.password) {

        this.setUserRole(registeredUser.userRole);

        console.log(this.getUserRole());

        this.authenticatedUser = true;
        this.showMenuEmitter.emit(true);
        this.router.navigate(['/']);
        return;
      }
    }

    this.message('Usuário e Senha não correspondem');
    this.authenticatedUser = false;
    this.showMenuEmitter.emit(false);
  }

  logout() {
    this.authenticatedUser = false;
    this.showMenuEmitter.emit(false);
    this.router.navigate(['/']);
  }

  isUserAuthenticated() {
    return this.authenticatedUser;
  }

  message(message: string) {
    this.matSnackBar.open(`${message}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
