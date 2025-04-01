import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-switch',
  imports: [ZenUiModule, FormsModule, ReactiveFormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  isToggled:boolean = false;


  onChange(evt:any){
    console.log(evt);
  }

  reactiveForm = new FormGroup({
    mySwitch: new FormControl(false),
  });

}
