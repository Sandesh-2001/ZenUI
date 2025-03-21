import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'zen-dialog',
  imports: [CommonModule],
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
