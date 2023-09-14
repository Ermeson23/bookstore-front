import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../../../model/category';
import { CategoryService } from 'src/app/components/services/category/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent implements OnInit {
  category: Category = {
    id: '',
    name: '',
    description: '',
  };

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!;
    this.loadCoursesById();
  }

  update(): void {
    this.categoryService.update(this.category).subscribe(
      (response) => {
        this.router.navigate(['category']);
        this.categoryService.message('Categoria atualizada com sucesso.');
      },
      (err) => {
        this.categoryService.message('Preencha os campos corretamente!');
      }
    );
  }

  loadCoursesById(): void {
    this.categoryService.loadById(this.category.id!).subscribe((response) => {
      this.category.name = response.name;
      this.category.description = response.description;
    });
  }

  cancel() {
    this.router.navigate(['category']);
  }
}
