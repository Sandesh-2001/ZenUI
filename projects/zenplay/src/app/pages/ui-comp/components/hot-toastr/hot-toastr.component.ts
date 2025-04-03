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
  
  openToastr(){ 
    this.toastrService.showToastr('Hello this is my first toastr', "error");
  }
}
