import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../../services/login/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  user: User = new User ();

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.userService.register(this.user.name, this.user.password, this.user.userRole)) {
      this.router.navigate(['login']);
    } else {
      alert('Falha ao cadastrar usuário. E-mail já cadastrado!');
    }
  }

  cancel() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}

}
