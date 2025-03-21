import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  imports: [ZenUiModule, ReactiveFormsModule, FormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  form = new FormGroup({
    description: new FormControl(''),
  });

  message: string = '';

  submit(value: any) {
    console.log('Submitted:', value);
  }

  submitForm() {
    console.log('Form Submitted:', this.form.value);
  }
}
