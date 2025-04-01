import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogContentComponent } from './alert-dialog-content.component';

describe('AlertDialogContentComponent', () => {
  let component: AlertDialogContentComponent;
  let fixture: ComponentFixture<AlertDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
