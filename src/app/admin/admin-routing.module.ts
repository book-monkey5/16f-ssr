import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: BookCreateComponent,
  },
  {
    path: 'edit/:isbn',
    component: BookEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
