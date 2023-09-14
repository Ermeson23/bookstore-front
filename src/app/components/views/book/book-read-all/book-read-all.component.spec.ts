import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadAllComponent } from './book-read-all.component';

describe('BookReadAllComponent', () => {
  let component: BookReadAllComponent;
  let fixture: ComponentFixture<BookReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReadAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
