import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, first } from 'rxjs';

import { Category } from '../../model/category';
import { environment } from 'src/environments/environment';
import { CategoryPage } from '../../model/category-page';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private matSnackBar: MatSnackBar
    ) { }

  loadAll(page: number = 0, size: number = 10): Observable<CategoryPage> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    const url = `${this.baseUrl}/category/paginated`;
    return this.httpClient.get<CategoryPage>(url, {params}).pipe(first());
  }

  loadById(id: string): Observable<Category> {
    const url = `${this.baseUrl}/category/${id}`;
    return this.httpClient.get<Category>(url).pipe(first());
  }

  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/category`;
    return this.httpClient.post<Category>(url, category).pipe(first());
  }

  update(category: Category): Observable<void> {
    const url = `${this.baseUrl}/category/${category.id}`;
    return this.httpClient.put<void>(url, category).pipe(first());
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/category/${id}`;
    return this.httpClient.delete<void>(url).pipe(first());
  }

  message(message: string) {
    this.matSnackBar.open(`${message}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
