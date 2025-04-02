import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrHeaderComponent } from './toastr-header.component';

describe('ToastrHeaderComponent', () => {
  let component: ToastrHeaderComponent;
  let fixture: ComponentFixture<ToastrHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
