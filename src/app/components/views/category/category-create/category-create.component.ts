import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from 'src/app/components/services/category/category.service';
import { Category } from '../../../model/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent {

  category: Category = {
    name: '',
    description: ''
  }

  constructor(private categoryService: CategoryService,
              private router: Router
    ) { }

    create(): void {
      this.categoryService.create(this.category).subscribe(
        (response) => {
          this.router.navigate(['category']);
          this.categoryService.message('Categoria criada com sucesso!');
        },
        (err) => {
          if (err.error && err.error.erros) {
            for (let i = 0; i < err.error.erros.length; i++) {
              this.categoryService.message(err.error.erros[i].message);
            }
          } else {
            console.error('Erro inesperado:', err);
          }
        }
      );
    }

    cancel(): void {
      this.router.navigate(['category']);
    }

}
