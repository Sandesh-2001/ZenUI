import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'zen-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements ControlValueAccessor {
  @Input({ required : true }) options: { label: string; value: string }[] = [];
  @Input() placeholder: string = 'Select option';
  @Input() width: string = '100%';
  @Input() classList: string = '';
  @Input() styles: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() defaultValue: string = '';
  @Input() disable: boolean = true;

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (this.defaultValue) {
      this.writeValue(this.defaultValue);
    }
  }

  writeValue(value: string): void {
    this.value = value || this.defaultValue;
    this.onChange(this.value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  handleChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.value = selectedValue;
    this.onChange(selectedValue);
    this.onTouched();
  }
}
