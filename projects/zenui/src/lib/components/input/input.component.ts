import { Component, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zen-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ]
})
export class InputComponent {
 @Input("type") type: 'email'| "text" | "number"= "text"
 @Input ('name') name:string = "";
 @Input('size')size : "sm" | "md" | "lg" | "full" = 'sm';
 @Input('placeholder') placeholder: string = `Enter ${this.name}`
 @Input('value') value:any = ""
 
 public onChange: (value: string) => void = () => {};
 public onTouched: () => void = () => {};

 constructor(){

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
handleInputChange(value: string){
  // console.log('value ', value)
  this.onChange(value);
  this.onTouched()
}
 generateClasses(){
  return this.size;
 }
}
