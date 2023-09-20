import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { FootComponent } from './components/template/foot/foot.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/views/home/home/home.component';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { BookModule } from './components/views/book/book.module';
import { CategoryModule } from './components/views/category/category.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CategoryModule,
    BookModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
