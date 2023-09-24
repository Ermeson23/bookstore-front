import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookReadAllComponent } from './book-read-all/book-read-all.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookReadComponent } from './book-read/book-read.component';
import { RootGuard } from '../../guards/root.guard';

const bookRoutes: Routes = [
  { path: '', component: BookReadAllComponent },
  { path: 'create', component: BookCreateComponent, canActivate: [RootGuard] },
  { path: ':id/update', component: BookUpdateComponent, canActivate: [RootGuard] },
  { path: ':id/delete', component: BookDeleteComponent, canActivate: [RootGuard] },
  { path: ':id/read', component: BookReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
