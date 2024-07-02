import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../model/category';
import { CategoryService } from 'src/app/components/services/category/category.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.scss']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = [];

  displayedColumns: string[] = ['name', 'description', 'book', 'actions'];

  page: number = 0;
  size: number = 10;
  totalElements: number = 0;

  constructor(
    private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit() {
    this.findAll(this.page, this.size);
  }

  navigateToCategoryCreate() {
    this.router.navigate(['category/create']);
  }

  findAll(page: number, size: number): void {
    this.categoryService.loadAll(page, size).subscribe(response => {
      console.log(response);
      this.categories = response.content;
      this.totalElements = response.totalElements;
      this.page = response.number;
      this.size = response.size;
    })
  }

  onChange(pageEvent: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }): void {
    this.page = pageEvent.pageIndex;
    this.size = pageEvent.pageSize;
    this.findAll(this.page, this.size);
  }

}
