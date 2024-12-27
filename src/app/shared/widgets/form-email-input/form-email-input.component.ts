import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-form-email-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './form-email-input.component.html',
    styleUrl: './form-email-input.component.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormEmailInputComponent),
            multi: true
        }
    ]
})
export class FormEmailInputComponent implements ControlValueAccessor, OnInit {
    @Input() label!: string;
    @Input() placeholder!: string;
    @Input() required: boolean = false;
    @Input() requiredMessage!: string;
    @Input() invalidMessage!: string;
    @Input() submitted!: boolean;
    @Input() inputType: string = "text";
    control!: FormControl;

    ngOnInit() {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
            validators.push(Validators.email);
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
