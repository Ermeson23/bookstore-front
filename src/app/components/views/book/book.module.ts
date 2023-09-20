import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppMaterialModule } from "src/app/shared/app-material/app-material.module";
import { BookReadAllComponent } from "./book-read-all/book-read-all.component";
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookReadComponent } from './book-read/book-read.component';


@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
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
