import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [ZenUiModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  isChecked:boolean = false;

  skills = ["Angular", "React", "Java"]

  form = new FormGroup({
    acceptTerms: new FormControl(false),
  });

  submitTemplateDrivenForm(values:any){
    console.log(values);
  }

  submit(){
    console.log(this.form.value);
  }

}
