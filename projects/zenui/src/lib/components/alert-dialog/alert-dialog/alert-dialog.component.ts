import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'zen-alert-dialog',
  imports: [],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {
  @Input() isOpen = false;
  @Output() isConfirm:EventEmitter<boolean> = new EventEmitter();
  @Output() onOpenChange:EventEmitter<boolean> = new EventEmitter();

  openDialog() {
    this.isOpen = true;
    this.onOpenChange.emit(true);
  }

  closeDialog() {
    this.isOpen = false;
    this.onOpenChange.emit(false);
  }

  cancelAction(){
    console.log("Cancelled");
    this.isConfirm.emit(false);
    this.closeDialog();
  }

  confirmAction(){
    console.log("Confirmed");
    this.isConfirm.emit(true);
    this.closeDialog();
  }

}
