import { Component, Input } from '@angular/core';

@Component({
  selector: 'zen-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input() for: string = '';
  @Input() text: string = '';
  @Input() required: boolean = false;
}
