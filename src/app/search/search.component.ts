import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter, switchMap, tap, Observable } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();
  isLoading = false;

  results$: Observable<Book[]>;

  constructor(private service: BookStoreService) {
    this.results$ = this.input$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.service.getAllSearch(term)),
      tap(() => this.isLoading = false)
    );
  }
}
