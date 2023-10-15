import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home/home.component';
import { CategoryModule } from './components/views/category/category.module';
import { LoginComponent } from './components/views/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';
import { RegisterComponent } from './components/views/register/register.component';


const routes: Routes = [
  { path: 'category',
      loadChildren: () => import('./components/views/category/category.module').then(m => m.CategoryModule),
      canActivate: [AuthGuard] },
  { path: 'category/:id_cat/books',
      loadChildren: () => import('./components/views/book/book.module').then(m => m.BookModule),
      canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
