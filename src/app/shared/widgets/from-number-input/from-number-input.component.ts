import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-from-number-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './from-number-input.component.html',
    styleUrl: './from-number-input.component.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FromNumberInputComponent),
            multi: true
        }
    ]
})
export class FromNumberInputComponent implements ControlValueAccessor, OnInit {
    @Input() label!: string;
    @Input() placeholder!: string;
    @Input() required: boolean = false;
    @Input() requiredMessage!: string;
    @Input() submitted!: boolean;
    @Input() readonly: boolean = false; 
    @Input() maxLength: any;
    @Input() maxLengthMessage!: string;
    @Input() pattern!: string;  
    @Input() patternMessage!: string;  
    control!: FormControl;

    ngOnInit() {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.maxLength) {
            validators.push(Validators.maxLength(this.maxLength));
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
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

    numberOnly(event: any): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
