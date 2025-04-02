import { Component, forwardRef, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { NgClass } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zen-password',
  imports: [ButtonComponent,NgClass],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent {
  @Input("type") type:"text"  | "password"= "password"
  @Input ('name') name:string = "password";
  @Input('size')size : "sm" | "md" | "lg" | "full" = 'sm';
  @Input('placeholder') placeholder: string = `Enter ${this.name}`
  value : string = ""
  isPasswordShow :boolean = false
  constructor(){
 
  }
 
  generateClasses(){
   return this.size;
  }
  toggleShow(){
    this.isPasswordShow = !this.isPasswordShow
    this.type = this.isPasswordShow? "text": "password"
  }

  public onChange: (value: string) => void = () => {};
 public onTouched: () => void = () => {};
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
  console.log('value ', value)
  this.onChange(value);
  this.onTouched()
}
}
