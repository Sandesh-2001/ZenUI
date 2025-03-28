import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarItemComponent } from './menubar-item.component';

describe('MenubarItemComponent', () => {
  let component: MenubarItemComponent;
  let fixture: ComponentFixture<MenubarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
