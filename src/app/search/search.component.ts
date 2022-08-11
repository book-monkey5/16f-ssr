import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();
  isLoading = false;

  results$ = this.input$.pipe(
    filter(term => term.length >= 3),
    debounceTime(500),
    distinctUntilChanged(),
    tap(() => this.isLoading = true),
    switchMap(term => this.service.getAllSearch(term)),
    tap(() => this.isLoading = false)
  );

  constructor(private service: BookStoreService) {}
}
