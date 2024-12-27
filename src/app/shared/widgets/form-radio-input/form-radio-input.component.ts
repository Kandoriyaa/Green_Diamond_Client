import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-form-radio-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './form-radio-input.component.html',
    styleUrls: ['./form-radio-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormRadioInputComponent),
            multi: true
        }
    ]
})
export class FormRadioInputComponent implements ControlValueAccessor, OnInit {
    @Input() label!: string;
    @Input() options!: { label: string, value: any }[];
    @Input() required: boolean = false;
    @Input() requiredMessage!: string;
    @Input() submitted!: boolean;
    control!: FormControl;

    ngOnInit() {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        this.control = new FormControl(null, validators);
    }

    writeValue(value: any): void {
        this.control.setValue(value);
    }

    registerOnChange(fn: any): void {
        this.control.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        this.control.markAsTouched();
    }
}
