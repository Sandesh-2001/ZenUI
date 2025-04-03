import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from './services/toastr.service';
import { JsonPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'zen-hot-toastr',
  imports: [NgClass, NgIf, JsonPipe],
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
      console.log('stack', toast)
      if (toast) {
        // this.toastrMessage = toast.message;
        let ele: HTMLDivElement[] = Array.from(document.getElementsByClassName('toastr-container')) as HTMLDivElement[]
        
        Array.from(ele).forEach((data:HTMLDivElement,index)=>{
          data.style.bottom = `${+index*40}px`;
        })
        this.isVisible = true;
        this.toastrStack = toast
        // Hide the toast after a delay
        setTimeout(() => {
          this.isVisible = false;
        }, 3000);
      }
    });
  }
}
