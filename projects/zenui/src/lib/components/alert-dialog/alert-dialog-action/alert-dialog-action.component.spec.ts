import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogActionComponent } from './alert-dialog-action.component';

describe('AlertDialogActionComponent', () => {
  let component: AlertDialogActionComponent;
  let fixture: ComponentFixture<AlertDialogActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
