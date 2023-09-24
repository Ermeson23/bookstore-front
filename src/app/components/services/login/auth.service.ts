import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  showMenuEmitter = new EventEmitter<boolean>();

  private authenticatedUser: boolean = false;
  private userRole!: string;

  get _userRole() {
    return this.userRole;
  }

  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  login(user: User) {
    if (user.name === 'usuario@email.com' && user.password === '12345') {
      this.authenticatedUser = true;
      this.userRole = 'user';
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else if (
      user.name === 'root@email.com' &&
      user.password === 'root12345'
    ) {
      this.authenticatedUser = true;
      this.userRole = 'root';
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.message('Usuário e Senha não correspondem');
      this.authenticatedUser = false;
      this.showMenuEmitter.emit(false);
    }
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
