import { Component, Input, HostBinding } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'zen-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent {
  @Input() title: string = '';
  @Input() index!: number;

  constructor(private accordion: AccordionComponent) {}

  toggle(): void {
    this.accordion.toggleItem(this.index);
  }

  get isOpen(): boolean {
    return this.accordion.isOpen(this.index);
  }
}
