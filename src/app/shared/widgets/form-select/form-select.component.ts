import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-form-select',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule,
    ],
    templateUrl: './form-select.component.html',
    styleUrl: './form-select.component.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormSelectComponent),
            multi: true
        }
    ]
})
export class FormSelectComponent implements ControlValueAccessor, OnInit {
    @Input() options: any[] = [];
    @Input() placeholder!: string;
    @Input() required: boolean = false;
    @Input() label!: string;
    @Input() requiredMessage!: string;
    @Input() submitted!: boolean;
    @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
    value: any;
    control!: FormControl;

    ngOnInit() {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        this.control = new FormControl('', validators);
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.control.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        // this.control.registerOnTouched(fn);
    }

    setDisabledState(isDisabled: boolean): void {
        isDisabled ? this.control.disable() : this.control.enable();
    }

    onSelectChange(event: any): void {
        this.selectionChange.emit(event);
    }
}
