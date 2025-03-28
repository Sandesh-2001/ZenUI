import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarMenuComponent } from './menubar-menu.component';

describe('MenubarMenuComponent', () => {
  let component: MenubarMenuComponent;
  let fixture: ComponentFixture<MenubarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
