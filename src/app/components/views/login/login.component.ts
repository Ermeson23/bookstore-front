import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user';
import { AuthService } from './../../services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user: User = new User();

  showPassword: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get _user(): User {
    return this.user;
  }

  login() {
    this._user.userRole = this.authService.getUserRole();
    this.authService.login(this.user);
  }

}
