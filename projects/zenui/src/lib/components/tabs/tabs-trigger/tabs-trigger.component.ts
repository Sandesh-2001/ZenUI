import { Component, Input, OnInit, inject, computed } from '@angular/core';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'zen-tabs-trigger',
  templateUrl: './tabs-trigger.component.html',
  styleUrl: './tabs-trigger.component.scss',
  standalone: true
})
export class TabsTriggerComponent implements OnInit {
  @Input() value!: string;
  private tabsService = inject(TabsService);

  ngOnInit() {
    this.tabsService.registerTab(this.value);
  }

  /** Checks if this tab is currently active */
  isActive = computed(() => this.tabsService.activeTab() === this.value);

  /** Sets this tab as the active tab */
  selectTab() {
    this.tabsService.setActiveTab(this.value);
  }
}
