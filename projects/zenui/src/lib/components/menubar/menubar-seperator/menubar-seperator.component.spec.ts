import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarSeperatorComponent } from './menubar-seperator.component';

describe('MenubarSeperatorComponent', () => {
  let component: MenubarSeperatorComponent;
  let fixture: ComponentFixture<MenubarSeperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarSeperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
