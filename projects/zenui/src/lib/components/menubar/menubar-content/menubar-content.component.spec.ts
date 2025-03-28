import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarContentComponent } from './menubar-content.component';

describe('MenubarContentComponent', () => {
  let component: MenubarContentComponent;
  let fixture: ComponentFixture<MenubarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
