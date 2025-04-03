import { Component, inject, Input } from '@angular/core';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'zen-tabs-list',
  imports: [],
  templateUrl: './tabs-list.component.html',
  styleUrl: './tabs-list.component.scss'
})
export class TabsListComponent {
  @Input() active:boolean = true;

  tabsService = inject(TabsService);

  get activeTabWidth(){
    return (100/ this.tabsService.totalTabs )
  }

  get indicatorPosition() {
    const index = this.tabsService.tabList().indexOf(this.tabsService.activeTab());
    return `${ index !== -1 ? index * 132 + 2 : 0}px`; // Adjust spacing dynamically
  }
}
