import { Component, ElementRef, ViewChild } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';


interface dialogForm {
  name: string;
  age: number
}

@Component({
  selector: 'app-dialog',
  imports: [ZenUiModule,FormsModule, JsonPipe],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  openModal:boolean = false;
  dialogForm:dialogForm = {name: "", age: 0}
  @ViewChild('name')name!: ElementRef
  onOpenModal(){
    this.openModal = true;
  }

  confirm(event:any){
    console.log('confirm',this.dialogForm)
    this.dialogForm = structuredClone({name:"", age: 0})
    this.openModal = false;
  }

  close(event:any){
    this.openModal = false
    
  }
  testSubmit(form:NgForm){
    console.log('form value', form.value)
   form.resetForm();
  }
}
