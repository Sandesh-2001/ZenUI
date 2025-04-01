import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'zen-alert-dialog-cancel',
  imports: [ButtonComponent],
  templateUrl: './alert-dialog-cancel.component.html',
  styleUrl: './alert-dialog-cancel.component.scss'
})
export class AlertDialogCancelComponent {

    constructor(private dialog:AlertDialogComponent){}

    onCancel(){
      this.dialog.cancelAction();
    }
}
