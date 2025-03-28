import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarShortcutComponent } from './menubar-shortcut.component';

describe('MenubarShortcutComponent', () => {
  let component: MenubarShortcutComponent;
  let fixture: ComponentFixture<MenubarShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarShortcutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
