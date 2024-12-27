import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-form-textarea-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './form-textarea-input.component.html',
    styleUrl: './form-textarea-input.component.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormTextareaInputComponent),
            multi: true
        }
    ]
})
export class FormTextareaInputComponent implements ControlValueAccessor, OnInit {
    @Input() label!: string;
    @Input() placeholder!: string;
    @Input() required: boolean = false;
    @Input() requiredMessage!: string;
    @Input() submitted!: boolean;
    @Input() maxLength: any;
    @Input() maxLengthMessage!: string;

    control!: FormControl;

    ngOnInit() {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.maxLength) {
            validators.push(Validators.maxLength(this.maxLength));
        }
        this.control = new FormControl('', validators);
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
