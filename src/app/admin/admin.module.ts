import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalIsoDateValueAccessor } from 'angular-date-value-accessor';

import { AdminRoutingModule } from './admin-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';

@NgModule({
  declarations: [
    BookFormComponent,
    BookCreateComponent,
    BookEditComponent,
    FormErrorsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    LocalIsoDateValueAccessor
  ],
})
export class AdminModule { }
