import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/components/model/book';
import { BookService } from 'src/app/components/services/book/book.service';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.scss'],
})
export class BookReadAllComponent implements OnInit {
  displayedColumns: string[] = ['title', 'books', 'actions'];

  id_cat: string = '';

  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.loadAll();
  }

  navigateToBookCreate() {
    this.router.navigate([`category/${this.id_cat}/books/create`]);
  }

  loadAll(): void {
    this.bookService.loadAllByCategory(this.id_cat).subscribe((response) => {
      this.books = response
      console.log(this.books)
    });
  }

  cancel() {
    this.router.navigate(['category']);
  }
}
