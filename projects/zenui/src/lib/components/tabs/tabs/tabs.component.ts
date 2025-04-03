import { Component, Input, inject } from '@angular/core';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'zen-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  standalone: true
})
export class TabsComponent {
  @Input() defaultValue!: string;

  private tabsService = inject(TabsService);

  constructor() {
    // Initialize the active tab in the service
    this.tabsService.setActiveTab(this.defaultValue);
  }

  /** Registers a new tab in the list */
  registerTab(value: string) {
    this.tabsService.registerTab(value);
  }

  /** Updates the currently active tab */
  setActiveTab(value: string) {
    this.tabsService.setActiveTab(value);
  }
}
