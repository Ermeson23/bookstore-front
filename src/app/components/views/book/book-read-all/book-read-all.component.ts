import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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

  page: number = 0;
  size: number = 10;
  totalElements: number = 0;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.loadAll(this.page, this.size);
  }

  navigateToBookCreate() {
    this.router.navigate([`category/${this.id_cat}/books/create`]);
  }

  loadAll(page: number, size: number): void {
    this.bookService.loadAllByCategory(this.id_cat, page, size).subscribe((response) => {
      this.books = response.content;
      this.totalElements = response.totalElements;
      this.page = response.number;
      this.size = response.size;
      console.log(this.books)
    });
  }

  onPageChange(pageEvent: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }): void {
    this.page = pageEvent.pageIndex;
    this.size = pageEvent.pageSize;
    this.loadAll(this.page, this.size);
  }

  cancel() {
    this.router.navigate(['category']);
  }
}
