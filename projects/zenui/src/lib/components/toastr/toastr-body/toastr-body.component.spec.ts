import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrBodyComponent } from './toastr-body.component';

describe('ToastrBodyComponent', () => {
  let component: ToastrBodyComponent;
  let fixture: ComponentFixture<ToastrBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastrBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
