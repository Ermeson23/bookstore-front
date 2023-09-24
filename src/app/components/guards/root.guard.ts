import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { AuthService } from './../services/login/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RootGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService._userRole === 'root') {
      return true;
    } else {
      this.snackBar.open('Você não tem permissão para acessar esta funcionalidade.', 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
      });
      return false;
    }
  }
}
