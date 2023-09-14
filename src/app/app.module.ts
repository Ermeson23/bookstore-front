import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryReadComponent } from './components/views/category/category-read/category-read.component';
import { FootComponent } from './components/template/foot/foot.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/views/home/home/home.component';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { CategoryCreateComponent } from './components/views/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/views/category/category-delete/category-delete.component';
import { CategoryUpdateComponent } from './components/views/category/category-update/category-update.component';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { BookCreateComponent } from './components/views/book/book-create/book-create.component';
import { BookUpdateComponent } from './components/views/book/book-update/book-update.component';
import { BookDeleteComponent } from './components/views/book/book-delete/book-delete.component';
import { BookReadComponent } from './components/views/book/book-read/book-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    NavBarComponent,
    HomeComponent,
    CategoryReadComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryUpdateComponent,
    BookReadAllComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    BookReadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
