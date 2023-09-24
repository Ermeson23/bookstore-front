import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryReadComponent } from './category-read/category-read.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { RootGuard } from '../../guards/root.guard';

const categoryRoutes: Routes = [
  { path: '', component: CategoryReadComponent },
  { path: 'create', component: CategoryCreateComponent, canActivate: [RootGuard] },
  { path: 'delete/:id', component: CategoryDeleteComponent, canActivate: [RootGuard] },
  { path: 'update/:id', component: CategoryUpdateComponent, canActivate: [RootGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(categoryRoutes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
