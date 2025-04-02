import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';

@Component({
  selector: 'zen-color-picker',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgxColorsModule],
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
})
export class ColorPickerComponent implements ControlValueAccessor {
  @Input() color: string = '';
  @Output() colorChange = new EventEmitter<string>();

  private onChange: (color: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(){
    setTimeout(()=>{
      this.onChange(this.color || "#f06292");
      this.color ? '' : this.color =   "#f06292"
    },0)
  }

  writeValue(color: string): void {
    if (color) {
      this.color = color;
    }
  }

  registerOnChange(fn: (color: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  handleColorChange(color: string): void {
    this.color = color;
    this.colorChange.emit(this.color); // Emit event for external use
    this.onChange(this.color); // Update form control
    this.onTouched();
  }
}
