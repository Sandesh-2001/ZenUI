import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'zen-tooltip',
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
})
export class TooltipComponent {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip = 'Hello';
  left = 0;
  top = 0;
  visible = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}

export enum TooltipPosition {
  ABOVE = 'above',
  BELOW = 'below',
  LEFT = 'left',
  RIGHT = 'right',
  DYNAMIC = 'dynamic',
  DEFAULT = 'above'
}

export enum TooltipTheme {
  DARK = 'dark',
  LIGHT = 'light',
  DEFAULT = 'dark'
}
