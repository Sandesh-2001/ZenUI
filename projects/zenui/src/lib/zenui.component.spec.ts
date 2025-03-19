import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenuiComponent } from './zenui.component';

describe('ZenuiComponent', () => {
  let component: ZenuiComponent;
  let fixture: ComponentFixture<ZenuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenuiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZenuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
