import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-edit',
  templateUrl: './book-edit.component.html',
  standalone: false,
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  book$: Observable<Book>;

  constructor(
    private service: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.service.getSingle(isbn))
    );
  }

  update(book: Book) {
    this.service.update(book).subscribe(updatedBook => {
      this.router.navigate(['/books', updatedBook.isbn]);
    });
  }
}
