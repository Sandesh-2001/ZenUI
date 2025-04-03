import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotToastrComponent } from './hot-toastr.component';

describe('HotToastrComponent', () => {
  let component: HotToastrComponent;
  let fixture: ComponentFixture<HotToastrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotToastrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
