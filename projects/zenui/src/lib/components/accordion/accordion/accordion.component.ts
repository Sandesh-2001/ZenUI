import { Component, Input } from '@angular/core';

@Component({
  selector: 'zen-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() multiple: boolean = false; // Allow multiple items to be open at once
  activeItems: number[] = []; // Track opened items

  toggleItem(index: number): void {
    if (this.multiple) {
      if (this.activeItems.includes(index)) {
        this.activeItems = this.activeItems.filter((i) => i !== index);
      } else {
        this.activeItems.push(index);
      }
    } else {
      this.activeItems = this.activeItems.includes(index) ? [] : [index];
    }
  }

  isOpen(index: number): boolean {
    return this.activeItems.includes(index);
  }
}
