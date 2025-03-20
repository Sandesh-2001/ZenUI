import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-dialog',
  imports: [ZenUiModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  confirm(){

  }
  close(){
    
  }
}
