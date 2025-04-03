import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private _activeTab: WritableSignal<string> = signal('');
  private _tabList: WritableSignal<string[]> = signal([]);

  setActiveTab(tabValue: string) {
    this._activeTab.set(tabValue);
  }

  registerTab(tabValue: string) {
    this._tabList.set([...this._tabList(), tabValue]);
  }

  get totalTabs(): number {
    return this._tabList().length;
  }

  get activeTab(): Signal<string> {
    return this._activeTab;
  }

  get tabList(): Signal<string[]> {
    return this._tabList;
  }
}
