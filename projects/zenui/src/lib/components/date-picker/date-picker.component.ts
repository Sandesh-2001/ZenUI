import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zen-date-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() defaultDate?: Date;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() placeholder: string = 'Select Date';

  @Output() dateChange = new EventEmitter<string>();

  @ViewChild('datepickerContainer') datepickerContainer!: ElementRef;

  currentDate!: Date; // Internal state
  selectedDate: string | null = null;
  monthYear!: string;
  weeks: (number | null)[][] = [];
  showDatepicker = false;

  onChange: (value: string | null) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {
    this.initializeDate();
  }

  ngOnInit() {
    if (this.defaultDate) {
      this.selectedDate = this.formatDate(this.defaultDate); // Ensure defaultDate is set in the input
      this.currentDate = new Date(this.defaultDate); // Set calendar to defaultDate
    }
    this.renderCalendar();
  }

  initializeDate() {
    // Use the provided defaultDate or fallback to today
    this.currentDate = this.defaultDate
      ? new Date(this.defaultDate)
      : new Date();

    if (!this.selectedDate) {
      this.selectedDate = this.currentDate.toISOString().split('T')[0];
    }
  }

  toggleDatepicker() {
    this.showDatepicker = !this.showDatepicker;
    if (this.showDatepicker) {
      this.renderCalendar();
    }
  }

  selectDate(day: number | null, evt: any = null) {
    if (evt && evt.code === 'Enter' && day) {
      this.setDate(day);
      return;
    }
    if (day) {
      this.setDate(day);
    }
  }

  setDate(day: number) {
    this.currentDate.setDate(day);
    this.selectedDate = this.currentDate.toISOString().split('T')[0];

    this.dateChange.emit(this.selectedDate);
    this.onChange(this.selectedDate);
    this.onTouched();
    this.showDatepicker = false;
    this.defaultDate = new Date(this.selectedDate);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.datepickerContainer &&
      !this.datepickerContainer.nativeElement.contains(event.target)
    ) {
      this.showDatepicker = false;
    }
  }

  renderCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    this.monthYear = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(this.currentDate);

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    let daysArray: (number | null)[] = Array(firstDayOfMonth)
      .fill(null)
      .concat(Array.from({ length: lastDateOfMonth }, (_, i) => i + 1));

    this.weeks = [];
    while (daysArray.length) {
      this.weeks.push(daysArray.splice(0, 7));
    }
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar();
  }

  isToday(day: number | null): boolean {
    if (!day) return false;

    const today = new Date(); // System's current date
    const referenceDate = this.defaultDate ? new Date(this.defaultDate) : today;

    return (
      referenceDate.getFullYear() === this.currentDate.getFullYear() &&
      referenceDate.getMonth() === this.currentDate.getMonth() &&
      referenceDate.getDate() === day
    );
  }

  /* ControlValueAccessor Methods */
  writeValue(value: string | null): void {
    if (value) {
      this.selectedDate = value;
      this.currentDate = new Date(value); // Sync calendar view with selected date
    } else if (this.defaultDate) {
      this.selectedDate = this.formatDate(this.defaultDate);
      this.currentDate = new Date(this.defaultDate);
    }
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Convert date to YYYY-MM-DD format
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
