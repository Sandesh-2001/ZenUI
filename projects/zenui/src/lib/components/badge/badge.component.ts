import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zen-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'default' = 'default';
  @Input() shape: 'default' | 'pill' = 'default';
}
