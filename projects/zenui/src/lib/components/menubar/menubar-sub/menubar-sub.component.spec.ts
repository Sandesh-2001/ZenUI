import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarSubComponent } from './menubar-sub.component';

describe('MenubarSubComponent', () => {
  let component: MenubarSubComponent;
  let fixture: ComponentFixture<MenubarSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
