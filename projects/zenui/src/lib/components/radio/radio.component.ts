import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zen-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
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
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  
  @Output() change = new EventEmitter<string>();

  checked: boolean = false; // Track checked state

  // ControlValueAccessor functions
  public onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.checked = value === this.value; // Set checked state
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onRadioChange(event: Event): void {
    if (!this.disabled) {
      this.checked = true;
      this.onChange(this.value); // Notify Angular Forms
      this.change.emit(this.value); // Emit custom event
    }
  }
}
