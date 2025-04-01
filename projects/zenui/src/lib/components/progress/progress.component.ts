import { Component, Input } from '@angular/core';

@Component({
  selector: 'zen-progress',
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  @Input() value:number = 40;
}
