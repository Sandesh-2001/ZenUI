import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogTitleComponent } from './alert-dialog-title.component';

describe('AlertDialogTitleComponent', () => {
  let component: AlertDialogTitleComponent;
  let fixture: ComponentFixture<AlertDialogTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
