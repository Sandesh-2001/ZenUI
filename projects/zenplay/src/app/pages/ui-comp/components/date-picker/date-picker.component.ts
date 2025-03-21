import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  imports: [ZenUiModule, FormsModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  
  date = new Date('2022-04-01')

  form = new FormGroup({
    date : new FormControl()
  })
  
  onDateSelected(evt: any) {
    console.log(evt);
  }

  submit(value:any){
    console.log(value);
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
