import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from "src/app/shared/app-material/app-material.module";
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { CategoryReadComponent } from "./category-read/category-read.component";
import { CategoryDeleteComponent } from "./category-delete/category-delete.component";
import { CategoryUpdateComponent } from "./category-update/category-update.component";
import { CategoryRoutingModule } from "./category.routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    CategoryRoutingModule
  ],
  exports: [],
  declarations: [
    CategoryReadComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryUpdateComponent,
  ],
  providers: [],
})

export class CategoryModule { }
