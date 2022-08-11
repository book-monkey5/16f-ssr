import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  book$ = this.route.paramMap.pipe(
    map(params => params.get('isbn')!),
    switchMap(isbn => this.service.getSingle(isbn))
  );

  constructor(
    private service: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  update(book: Book) {
    this.service.update(book).subscribe(updatedBook => {
      this.router.navigate(['/books', updatedBook.isbn]);
    });
  }

}
