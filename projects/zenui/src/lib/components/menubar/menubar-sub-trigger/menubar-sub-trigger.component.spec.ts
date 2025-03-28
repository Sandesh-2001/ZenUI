import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarSubTriggerComponent } from './menubar-sub-trigger.component';

describe('MenubarSubTriggerComponent', () => {
  let component: MenubarSubTriggerComponent;
  let fixture: ComponentFixture<MenubarSubTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarSubTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarSubTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
