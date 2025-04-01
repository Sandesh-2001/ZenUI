import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogFooterComponent } from './alert-dialog-footer.component';

describe('AlertDialogFooterComponent', () => {
  let component: AlertDialogFooterComponent;
  let fixture: ComponentFixture<AlertDialogFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
