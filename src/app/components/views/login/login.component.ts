import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../../model/user';
import { AuthService } from './../../services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user: User = new User();

  password: string = '';
  showPassword: boolean = false;

  userName = new FormControl('', [
    Validators.minLength(5),
    Validators.maxLength(40),
    Validators.required,
  ]);

  passUser = new FormControl('', [
    Validators.minLength(6),
    Validators.maxLength(12),
    Validators.required,
  ]);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get _user(): User {
    return this.user;
  }

  login() {
    this.authService.login(this.user);
  }

  getErrorMessage() {
    if (this.userName.invalid) {
      return 'O campo USUÁRIO precisa conter entre 5 e 40 caracteres!';
    }

    if (this.passUser.invalid) {
      return 'O campo SENHA precisa conter entre 6 e 12 caracteres!';
    }

    return false;
  }

}
