import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookReadAllComponent } from './book-read-all/book-read-all.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookReadComponent } from './book-read/book-read.component';

const bookRoutes: Routes = [
  { path: 'category/:id_cat/books', component: BookReadAllComponent },
  { path: 'category/:id_cat/books/create', component: BookCreateComponent },
  { path: 'category/:id_cat/books/:id/update', component: BookUpdateComponent },
  { path: 'category/:id_cat/books/:id/delete', component: BookDeleteComponent },
  { path: 'category/:id_cat/books/:id/read', component: BookReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
