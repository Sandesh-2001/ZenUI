import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zen-chips',
  imports: [],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
    @Input({ required: true }) label: string | null = null;
    @Input() removable: boolean = false;
    @Input() variant: "primary" | "secondary" | "danger" = "primary";

    @Output() onRemove: EventEmitter<any> = new EventEmitter();

    removeChip(){
      this.onRemove.emit(this.label);
    }

}
