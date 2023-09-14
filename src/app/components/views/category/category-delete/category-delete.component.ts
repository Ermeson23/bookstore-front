import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';

import { Category } from '../../../model/category';
import { CategoryService } from 'src/app/components/services/category/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.loadCategoryById();
  }

  loadCategoryById() {
    this.categoryService.loadById(this.category.id!).subscribe((response) => {
      this.category = response;
    })
  }

  delete() {
    this.categoryService.delete(this.category.id!).subscribe((response) => {
      this.router.navigate(['category']);
      this.categoryService.message('Categoria deletada com sucesso')
    }, err => {
      this.categoryService.message(err.error.error)
    })
  }

  cancel() {
    this.router.navigate(['category']);
  }

}
