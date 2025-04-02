import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [ZenUiModule,ReactiveFormsModule, FormsModule,JsonPipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  templateSlider = {value: 20}
  reactiveSlider !: FormGroup
  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
    this.reactiveSlider = this.fb.group({
      value: ["40"],
      volume: ['40']
    })
  }

  templateSubmit(){
    console.log('value', this.templateSlider.value)
  }
  onReactiveSubmit(){
    console.log('reactive value', this.reactiveSlider.value.value)
  }
}
