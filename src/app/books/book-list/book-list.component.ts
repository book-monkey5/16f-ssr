import { Component } from '@angular/core';

import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books$ = this.service.getAll();

  constructor(private service: BookStoreService) {}
}
