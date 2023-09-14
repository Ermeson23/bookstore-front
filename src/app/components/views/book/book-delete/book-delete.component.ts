import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/components/model/book';
import { BookService } from 'src/app/components/services/book/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss'],
})
export class BookDeleteComponent implements OnInit {
  id_cat: string = '';

  books: Book = {
    title: '',
    authorName: '',
    text: '',
  };
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

  delete(): void {
    this.bookService.delete(this.books.id!).subscribe(
      () => {
        this.router.navigate([`category/${this.id_cat}/books`]);
        this.bookService.message('Livro deletado com sucesso!');
      },
      (err) => {
        this.router.navigate([`category/${this.id_cat}/books`]);
        this.bookService.message('Falha ao deletar deletar livro!');
      }
    );
  }

  cancel(): void {
    this.router.navigate([`category/${this.id_cat}/books`]);
  }
}
