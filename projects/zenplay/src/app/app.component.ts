import { Component } from '@angular/core';
import { ZenUiModule } from "../../../zenui/src/lib/zenui.module"
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ZenUiModule, ReactiveFormsModule],
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
}
