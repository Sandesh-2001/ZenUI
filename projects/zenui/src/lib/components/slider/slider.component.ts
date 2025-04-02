import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zen-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true,
    },
  ]
})
export class SliderComponent {
  @Input('min') min: string = "1"
  @Input('max') max:string = "100"
  @Input('value') value:string = "50"
  @Input('name') name: string = ""
  @Input('id') id:string ="slider"
  @Input('step') step: string = "5"
  @Input('disabled') disabled: boolean = false

  public onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};


  ngAfterViewInit(){
    setTimeout(() => {
      console.log('oninit', this.value)
      this.onChange(this.value)
    }, 3000);
  }
  
  writeValue(value: string): void {
    this.value = value;
    console.log("value", this.value)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  handleRange(value: string){
    // console.log('value ', value)
    this.onChange(value);
    this.onTouched()
  }
}
