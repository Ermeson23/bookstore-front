import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, first } from 'rxjs';

import { Book } from '../../model/book';
import { environment } from 'src/environments/environment';
import { BookPage } from '../../model/book-page';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  loadAllByCategory(id_cat: string, page: number = 0, size: number = 10): Observable<BookPage> {
    const params = new HttpParams()
      .set('category', id_cat)
      .set('page', page.toString())
      .set('size', size.toString());
    
    const url = `${this.baseUrl}/books`;
    return this.httpClient.get<BookPage>(url, { params }).pipe(first());
  }

  loadById(id: string): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.httpClient.get<Book>(url).pipe(first());
  }

  create(book: Book, id_cat: string): Observable<Book> {
    const url = `${this.baseUrl}/books?category=${id_cat}`;
    return this.httpClient.post<Book>(url, book).pipe(first());
  }

  update(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/books/${book.id}`;
    return this.httpClient.put<Book>(url, book).pipe(first());
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.httpClient.delete<void>(url);
  }

  message(message: string) {
    this.snackBar.open(`${message}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
