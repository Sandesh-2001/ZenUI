import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { DialogHeaderComponent } from '../dialog-header/dialog-header.component';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { DialogFooterComponent } from '../dialog-footer/dialog-footer.component';

@Component({
  selector: 'zen-dialog',
  imports: [CommonModule, ButtonComponent,DialogHeaderComponent,DialogBodyComponent,DialogFooterComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  isOpen :boolean = true;
  title : string= "Dialog title";

   close(){

  }
  open(){

  }
  confirm(){

  }

}
