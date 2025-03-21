import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zen-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() id: string = 'option'; // Unique ID for checkbox
  @Input() value: any = true; // Value emitted when checked
  @Input() checked: boolean = false; // Is the checkbox checked?

  @Output() onCheckedChange: EventEmitter<any> = new EventEmitter();

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.checked = value === this.value; // Check if value matches
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onCheckValueChanged(evt: any) {
    this.checked = evt.target.checked;
    const emittedValue = this.checked ? this.value : null;

    this.onCheckedChange.emit(emittedValue);
    this.onChange(emittedValue);
    this.onTouched();
  }
}
