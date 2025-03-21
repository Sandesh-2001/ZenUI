import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-dialog',
  imports: [ZenUiModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  openModal:boolean = false;
  onOpenModal(){
    this.openModal = true;
  }

  confirm(event:any){
    console.log('confirm',event)
    this.openModal = false;
  }
  close(event:any){
    this.openModal = false
  }
}
