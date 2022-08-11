import { Injectable } from '@angular/core';
import { AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorsService {

  constructor(private service: BookStoreService) { }

  isbnExists(): AsyncValidatorFn {
    return (control) => {
      return this.service.check(control.value).pipe(
        map(exists => exists ? { isbnexists: true } : null)
      );
    }
  }
}
