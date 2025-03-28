import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarTriggerComponent } from './menubar-trigger.component';

describe('MenubarTriggerComponent', () => {
  let component: MenubarTriggerComponent;
  let fixture: ComponentFixture<MenubarTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
