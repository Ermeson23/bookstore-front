import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryReadComponent } from './category-read/category-read.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

const categoryRoutes: Routes = [
  { path: 'category', component: CategoryReadComponent },
  { path: 'category/create', component: CategoryCreateComponent },
  { path: 'category/delete/:id', component: CategoryDeleteComponent },
  { path: 'category/update/:id', component: CategoryUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(categoryRoutes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
