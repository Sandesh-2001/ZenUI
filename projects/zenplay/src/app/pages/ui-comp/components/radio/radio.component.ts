import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-radio',
imports: [ZenUiModule,ReactiveFormsModule, FormsModule, JsonPipe],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  radioForm!: FormGroup;
  valueArr:string[] = ["Male", "Female", "Other"]  
  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
    this.createInitialForm();
  }
  createInitialForm(){
    this.radioForm = this.fb.group({
      gender: new FormControl('')
    });
  }
  onFormSubmit(){
    console.log("form submit",this.radioForm.value );
    
  }
  onChange(event:any){
    console.log('change',event.target?.value)
  }
  templateSubmit(formValue:any){
    console.log('formvalue', formValue)
  }
}
