import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarSubContentComponent } from './menubar-sub-content.component';

describe('MenubarSubContentComponent', () => {
  let component: MenubarSubContentComponent;
  let fixture: ComponentFixture<MenubarSubContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarSubContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarSubContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
