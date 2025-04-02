import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'zen-dialog-footer',
  imports: [ButtonComponent],
  templateUrl: './dialog-footer.component.html',
  styleUrl: './dialog-footer.component.scss',
})
export class DialogFooterComponent {
  @Output('close') cancel = new EventEmitter<any>();
  @Output('confirm') confirm = new EventEmitter<any>();

  onConfirm(event: any) {
    this.confirm.emit(event);
  }
  onCancel(event: any) {
    this.cancel.emit(event);
  }
}
