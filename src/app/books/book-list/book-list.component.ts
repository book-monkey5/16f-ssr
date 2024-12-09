import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  standalone: false,
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private service: BookStoreService) {
    this.books$ = this.service.getAll();
  }
}
