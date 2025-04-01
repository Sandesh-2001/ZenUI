import { Component, Input, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'zen-tabs-content',
  imports: [NgIf],
  templateUrl: './tabs-content.component.html',
  styleUrl: './tabs-content.component.scss',
  standalone: true
})
export class TabsContentComponent implements OnInit {
  @Input() value!: string;
  private tabsService = inject(TabsService);

  ngOnInit() {
    this.tabsService.registerTab(this.value);
  }

  /** Checks if the current tab content is active */
  get isActive() {
    return this.tabsService.activeTab() === this.value;
  }
}
