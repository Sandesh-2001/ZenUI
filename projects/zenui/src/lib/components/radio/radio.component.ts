import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'zen-radio',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  @Input() name: string = '';
  @Input() value: string = '';
  @Input () id: string = "";
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;

  @Output() change = new EventEmitter<string>();

  onRadioChange(event:any) {
    // event?.stopPropagation();
    if (!this.disabled && event) {
      this.change.emit(this.value);
    }
  }


  public onChange = (value: boolean) => {};
  public onTouched = () => {};
  writeValue(value: boolean): void {
    console.log('radio value', value);
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
