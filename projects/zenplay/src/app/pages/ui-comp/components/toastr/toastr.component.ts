import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-toastr',
  imports: [ZenUiModule],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss'
})
export class ToastrComponent {
  openToastr:boolean  = false

  close(event:any){
    console.log('close ')
    this.openToastr = false
  }
}
