import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../model/category';
import { CategoryService } from 'src/app/components/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.scss']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = [];

  displayedColumns: string[] = ['name', 'description', 'book', 'actions'];

  constructor(
    private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit() {
    this.findAll();
  }

  navigateToCategoryCreate() {
    this.router.navigate(['category/create']);
  }

  findAll() {
    this.categoryService.loadAll().subscribe(response => {
      console.log(response);
      this.categories = response;
    })
  }

}
