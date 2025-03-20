import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-chips',
  imports: [ZenUiModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
    chips = ["Angular", "React", "Vue", "Javascript"];

    removeChip(evt:any) {
      this.chips = this.chips.filter((ele) => ele !== evt)
    }

}
