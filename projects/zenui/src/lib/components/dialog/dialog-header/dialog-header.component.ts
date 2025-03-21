import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zen-dialog-header',
  imports: [],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.scss'
})
export class DialogHeaderComponent {
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
    this.setIsOpen()
  }
  setIsOpen(){
    let dialog = document.getElementById('dialog');
    console.log('dialog',dialog)
    if(dialog){
      dialog.style.animation = "fadeOut 2s ease-out"
    }
    return new Promise((res,rej)=>{
      setTimeout(() => {
        res(true);
      }, 2000);
      
    })
  }
}
