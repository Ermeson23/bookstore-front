import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/components/model/book';
import { BookService } from 'src/app/components/services/book/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent implements OnInit {
  id_cat: string = '';

  books: Book = {
    title: '',
    authorName: '',
    text: '',
  };

  title = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(100),
    Validators.required,
  ]);
  authorName = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(100),
    Validators.required,
  ]);
  text = new FormControl('', [
    Validators.minLength(10),
    Validators.maxLength(2000000),
    Validators.required,
  ]);

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.books.id = this.route.snapshot.paramMap.get('id')!;
    this.loadById();
  }

  loadById(): void {
    this.bookService.loadById(this.books.id!).subscribe((response) => {
      this.books = response;
    });
  }

  update(): void {
    this.bookService.update(this.books).subscribe((response) => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.bookService.message('Livro atualizado com sucesso!');
    }, err => {
      this.router.navigate([`category/${this.id_cat}/books`]);
      this.bookService.message('Falha ao atualizar livro!');
    });
  }

  cancel(): void {
    this.router.navigate([`category/${this.id_cat}/books`]);
  }

  getErrorMessage() {
    if (this.title.invalid) {
      return 'O campo TÍTULO precisa conter entre 3 e 100 caracteres!';
    }

    if (this.authorName.invalid) {
      return 'O campo NOME DO AUTOR precisa conter entre 3 e 100 caracteres!';
    }

    if (this.text.invalid) {
      return 'O campo TEXTO precisa conter entre 10 e 2.000.000 caracteres!';
    }

    return false;
  }
}
