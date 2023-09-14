import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/components/model/book';
import { BookService } from 'src/app/components/services/book/book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss'],
})
export class BookReadComponent implements OnInit {
  private id_cat: string = '';

    books: Book = {
    id: '',
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
    this.books.id = this.route.snapshot.paramMap.get('id')!
    this.loadById()
  }

  loadById(): void {
    this.bookService.loadById(this.books.id!).subscribe((response) => {
      this.books = response;
    });
  }

  cancel(): void {
    this.router.navigate([`category/${this.id_cat}/books`]);
  }

}
