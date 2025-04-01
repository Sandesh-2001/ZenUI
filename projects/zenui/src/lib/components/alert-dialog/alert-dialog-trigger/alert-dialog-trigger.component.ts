import { Component, HostListener } from '@angular/core';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'zen-alert-dialog-trigger',
  imports: [],
  templateUrl: './alert-dialog-trigger.component.html',
  styleUrl: './alert-dialog-trigger.component.scss'
})
export class AlertDialogTriggerComponent {
  constructor(private dialog: AlertDialogComponent) {}

  @HostListener('click')
  openDialog() {
    this.dialog.openDialog();
  }
}
