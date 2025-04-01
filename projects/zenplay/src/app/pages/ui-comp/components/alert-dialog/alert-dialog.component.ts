import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-alert-dialog',
  imports: [ZenUiModule],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {
  isConfirm:any = "Not confirmed yet";

  actionChange(evt:any){
    if(evt){
      this.isConfirm = "Confirmed";
    }
    else{
      this.isConfirm = "Cancelled";
    }
  }

}
