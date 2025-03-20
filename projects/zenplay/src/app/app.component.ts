import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZenUiModule } from '../../../zenui/src/public-api';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ZenUiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  form:FormGroup = new FormGroup({
    skills : new FormControl('', [Validators.required])
  })

  submit(){
    console.log(this.form.value);
  }

  selectFile(evt:any){
    console.log(evt);
  }
}
