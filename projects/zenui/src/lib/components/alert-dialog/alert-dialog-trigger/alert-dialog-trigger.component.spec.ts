import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogTriggerComponent } from './alert-dialog-trigger.component';

describe('AlertDialogTriggerComponent', () => {
  let component: AlertDialogTriggerComponent;
  let fixture: ComponentFixture<AlertDialogTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
