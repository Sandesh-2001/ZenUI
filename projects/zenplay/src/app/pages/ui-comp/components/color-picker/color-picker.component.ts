import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  imports: [ZenUiModule, FormsModule, ReactiveFormsModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {

  form = new FormGroup({
    color: new FormControl('#ffb300'),
  });

  handleChange(evt:any){
    console.log(evt);
  }

  submit(value:any){
    console.log(value);
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
