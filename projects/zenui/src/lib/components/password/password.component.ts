import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'zen-password',
  imports: [ButtonComponent,],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
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
