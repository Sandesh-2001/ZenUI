import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zen-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input("text") text: string= "Submit";
  @Input('label') label: string= "";
  @Input("style") style: string= "";
  @Input("classes") classes: string= "";
  @Input("type") type: string= "button";    
  @Input("disabled") disabled: boolean= false;
  @Input("color") color: "primary" | "secondary" | "danger" |""= "primary"; 
  @Input("size") size: "sm" | "md" | "lg" |  "full"= "md";
  @Input("icon") icon: string= "";
  @Input("iconPosition") iconPosition: string= "left";
  @Input("loading") loading: boolean= false;

  @Output("clickEvent") onClick: EventEmitter<any> = new EventEmitter<any>();

  btnClasses: string= "";

  constructor() { 

  } 
  
  ngOnInit(){
    this.generateClasses();

  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
  generateClasses() {
    this.btnClasses = this.color + " " + this.size + " " + this.classes;
    console.log(this.btnClasses);
  }

}