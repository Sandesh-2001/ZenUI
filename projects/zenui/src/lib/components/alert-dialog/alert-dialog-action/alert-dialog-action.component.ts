import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'zen-alert-dialog-action',
  imports: [ButtonComponent],
  templateUrl: './alert-dialog-action.component.html',
  styleUrl: './alert-dialog-action.component.scss'
})
export class AlertDialogActionComponent {
    constructor(private dialog:AlertDialogComponent){}

    onConfirm(){
      this.dialog.confirmAction();
    }
}
