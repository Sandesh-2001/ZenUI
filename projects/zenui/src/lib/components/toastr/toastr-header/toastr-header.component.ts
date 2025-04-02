import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'zen-toastr-header',
  imports: [ButtonComponent],
  templateUrl: './toastr-header.component.html',
  styleUrl: './toastr-header.component.scss'
})
export class ToastrHeaderComponent {
  @Output('close') close : any = new EventEmitter<boolean>();

  onCancel(){
    this.close.emit(false)
  }
}
