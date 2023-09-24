import { AuthService } from './../../services/login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  showMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      (show) => (this.showMenu = show)
    );

    this.logout();
  }

  logout() {
    this.authService.logout();
  }
}
