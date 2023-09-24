import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from "src/app/shared/app-material/app-material.module";
import { BookReadAllComponent } from "./book-read-all/book-read-all.component";
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookReadComponent } from './book-read/book-read.component';
import { BookRoutingModule } from "./book.routing.module";


@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BookRoutingModule
  ],
  exports: [],
  declarations: [
    BookReadAllComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    BookReadComponent
  ],
  providers: []
})

export class BookModule { }
