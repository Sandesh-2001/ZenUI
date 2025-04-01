import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogHeaderComponent } from './alert-dialog-header.component';

describe('AlertDialogHeaderComponent', () => {
  let component: AlertDialogHeaderComponent;
  let fixture: ComponentFixture<AlertDialogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
