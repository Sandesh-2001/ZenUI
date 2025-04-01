import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogDescriptionComponent } from './alert-dialog-description.component';

describe('AlertDialogDescriptionComponent', () => {
  let component: AlertDialogDescriptionComponent;
  let fixture: ComponentFixture<AlertDialogDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
