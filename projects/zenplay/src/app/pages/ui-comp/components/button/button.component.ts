import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';


@Component({
  selector: 'app-button',
  imports: [ZenUiModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {


  onClick() {
    console.log('Button clicked');
  }
}
