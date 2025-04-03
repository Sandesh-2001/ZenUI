import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'zen-toastr',
  imports: [NgClass],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss'
})
export class ToastrComponent implements OnChanges {
  @Input('open') open: boolean  = false
  @Input('position') position: "top_left" | "top_right" | "bottom_left" |"bottom_right" = "top_left"
  ngOnInit(){
    console.log('inside toastr init')

  }
  ngOnChanges(changes: SimpleChanges){
    console.log('changes', changes)
    // setTimeout(() => {
    //   this.open = false
    // }, 3000);
    this.closeToastr();
  }
  closeToastr(){
    setTimeout(() => {
      let ele = document.getElementById('toastr_close_button');
      console.log('ele',ele)
      if(ele){
        ele.click();
      }
    }, 3000);
  }
}
