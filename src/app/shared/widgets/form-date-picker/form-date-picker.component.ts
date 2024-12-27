import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgbDateStruct, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-form-date-picker',
  standalone: true,
  imports: [CommonModule, NgbModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-date-picker.component.html',
  styleUrl: './form-date-picker.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDatePickerComponent),
      multi: true
    }
  ]
})
export class FormDatePickerComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder!: string;
  @Input() required: boolean = false;
  @Input() requiredMessage!: string;
  @Input() submitted!: boolean;
  @Input() label!: string;
  @Input() minDate!: NgbDateStruct;
  @Input() maxDate!: NgbDateStruct;
  control!: FormControl;
  model!: NgbDateStruct;

  ngOnInit() {
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    this.control = new FormControl('', validators);
  }

  onDateChange(date: NgbDateStruct) {
    let dateString = '';
    if (date) {
      dateString = `${date.year}-${this.padNumber(date.month)}-${this.padNumber(date.day)}`;
    }
    this.control.setValue(dateString);
    this.propagateChange(dateString);
  }

  writeValue(obj: any): void {
    if (obj) {
      const dateParts = obj.split('-');
      if (dateParts.length === 3) {
        this.model = {
          year: parseInt(dateParts[0], 10),
          month: parseInt(dateParts[1], 10),
          day: parseInt(dateParts[2], 10)
        };
        this.control.setValue(obj);
      }
    } else {
      this.model = {year: 0, month: 0, day: 0};
      this.control.setValue('');
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.control.markAsTouched();
  }

  propagateChange = (_: any) => {
  };

  private padNumber(value: number) {
    if (isNaN(value)) {
      return '';
    }
    let str = String(value);
    return (str.length == 1) ? '0' + str : str;
  }
}
