import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/components/model/book';
import { BookService } from 'src/app/components/services/book/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {

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
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
  }

  create(): void {
    this.bookService.create(this.books, this.id_cat).subscribe(
      (response) => {
        this.router.navigate([`category/${this.id_cat}/books`]);
        this.bookService.message('Livro criado com sucesso!');
      },
      (err) => {
        console.log(err);
        this.router.navigate([`category/${this.id_cat}/books`]);
        this.bookService.message('Erro ao criar novo livro!');
      }
    );
  }

  cancel(): void {
    this.router.navigate([`category/${this.id_cat}/books`]);
  }

}
