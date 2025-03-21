import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'zen-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
 @Input("type") type: 'email'| "text" | "number"= "text"
 @Input ('name') name:string = "";
 @Input('size')size : "sm" | "md" | "lg" | "full" = 'sm';
 @Input('placeholder') placeholder: string = `Enter ${this.name}`
 
 constructor(){

 }

 generateClasses(){
  return this.size;
 }
}
