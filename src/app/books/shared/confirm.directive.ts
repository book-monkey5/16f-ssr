import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[bmConfirm]',
  standalone: false
})
export class ConfirmDirective {
  @Input('bmConfirm') confirmText?: string;
  @Output() confirm = new EventEmitter<void>();

  @HostListener('click') onClick() {
    if (window.confirm(this.confirmText)) {
      this.confirm.emit();
    }
  }
}
