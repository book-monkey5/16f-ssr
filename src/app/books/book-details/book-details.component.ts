import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book$: Observable<Book>;

  constructor(
    private service: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.book$ = this.service.getSingle(isbn);
  }

  removeBook(isbn: string) {
    this.service.remove(isbn).subscribe(() => {
      this.router.navigateByUrl('/books');
    });
  }
}
