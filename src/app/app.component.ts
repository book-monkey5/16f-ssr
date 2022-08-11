import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
