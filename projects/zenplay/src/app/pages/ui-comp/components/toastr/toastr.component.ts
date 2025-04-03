import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

interface toastr {
  position: string;
  open: boolean;
}

@Component({
  selector: 'app-toastr',
  imports: [ZenUiModule],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss',
})
export class ToastrComponent {
  toastrObj: toastr[] = [
    {
      position: 'top_left',
      open: false,
    },
    {
      position: "top_right",
      open: false
    },
    {
      position: "bottom_left",
      open: false
    },
    {
      position: "bottom_right",
      open: false
    }
  ];

  openToastrTopLeft: boolean = false;
  openToastrTopRight: boolean = false;
  openToastrBottomLeft: boolean = false;
  openToastrBottomRigth: boolean = false;

  openToastr(position: string) {
    switch (position) {
      case 'top_left': {
        this.openToastrTopLeft = true;
        // setTimeout(() => {
        //   this.openToastrTopLeft = false
        // }, 3000);
      }
    }
  }

  closeTopLeft(event: any) {
    console.log('close ');
    this.openToastrTopLeft = false;
  }
  closeTopRight(event: any) {
    this.openToastrTopRight = false;
  }
  closeBottomLeft(event: any) {
    this.openToastrBottomLeft = false;
  }
  closeBottomRight(event: any) {
    this.openToastrBottomRigth = false;
  }
}
