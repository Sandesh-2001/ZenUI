import { Component } from '@angular/core';
import { ZenUiModule, ToastrService } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-hot-toastr',
  imports: [ZenUiModule],
  templateUrl: './hot-toastr.component.html',
  styleUrl: './hot-toastr.component.scss'
})
export class HotToastrComponent {
  constructor(private toastrService: ToastrService){
  }
  cnt=0
  openToastr(){ 
    this.cnt++;
    this.toastrService.showToastr('Hello this is my first toastr'+this.cnt, "error",5000);
    setTimeout(() => {
      this.cnt=1
    }, 4000);
  }
}
