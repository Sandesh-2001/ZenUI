import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from './services/toastr.service';
import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'zen-hot-toastr',
  imports: [NgClass, NgIf, JsonPipe, ButtonComponent],
  templateUrl: './hot-toastr.component.html',
  styleUrl: './hot-toastr.component.scss'
})
export class HotToastrComponent {
  toastrMessage: string = '';
  toastrType: string = '';
  isVisible = true;
  toastrStack :any [] =[];
  @ViewChild('toastrContainer') toastrContainer!: ElementRef
  constructor(private toastrService: ToastrService) {}

  ngOnInit() {
    this.toastrService.toastrState$.subscribe(toast => {
      if (toast) {
        // this.toastrMessage = toast.message;
        this.toastrStack = toast
        this.isVisible = true;
        setTimeout(() => {
          let ele: HTMLDivElement[] = Array.from(document.getElementsByClassName('toastr-container')) as HTMLDivElement[]
            console.log('eles',ele)
          
          Array.from(ele).forEach((data:HTMLDivElement,index)=>{
            data.style.bottom = `${(+index+1)*60}px`;
          })
          
        }, 0);
        // ele[ele.length-1].style.bottom = "300px"
        // Hide the toast after a delay
        // setTimeout(() => {
        //   this.isVisible = false;
        // }, 3000);
      }
    });
  }
  onRemoveToastr(currId:number){
    this.toastrService.onRemoveToastr(currId)
  }
}
