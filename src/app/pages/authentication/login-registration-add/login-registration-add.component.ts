import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormEmailInputComponent } from '../../../shared/widgets/form-email-input/form-email-input.component';
import { FormInputComponent } from '../../../shared/widgets/form-input/form-input.component';
import { FormSelectComponent } from '../../../shared/widgets/form-select/form-select.component';
import { FormTextareaInputComponent } from '../../../shared/widgets/form-textarea-input/form-textarea-input.component';
import { FromNumberInputComponent } from '../../../shared/widgets/from-number-input/from-number-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../core/service/login/login.service';
import { Customer } from '../../../core/models/customer';

@Component({
    selector: 'app-login-registration-add',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormInputComponent,
        FromNumberInputComponent,
        FormTextareaInputComponent,
        FormSelectComponent,
        FormEmailInputComponent,
    ],
    templateUrl: './login-registration-add.component.html',
    styleUrl: './login-registration-add.component.css'
})
export class LoginRegistrationAddComponent {

    activeModal = inject(NgbActiveModal);
    @Output() saveCompleted = new EventEmitter<void>();

    customerloginForm!: FormGroup;
    submitted = false;
    isUser = signal(false)
    isBrowser!: boolean;
    search!: string;
    customerinfo!: Customer;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private loginService: LoginService,
    ) {
    }

    usernameemail: string = '';

    get f() {
        return this.customerloginForm.controls;
    }

    ngOnInit(): void {
        this.customerloginForm = this.formBuilder.group({
            custUserName: [null],
            custEmailAddrerss: [null],
            custPassword: ['', [Validators.required]],
        });
    }

    onSearch(event: Event) {
        this.search = (event.target as HTMLInputElement).value;
    }

    customerLogin() {
        debugger
        this.submitted = true;
        if (this.customerloginForm.controls['custEmailAddrerss'].value == null || this.customerloginForm.controls['custUserName'] == null) {

        }

        if (this.search.endsWith('@gmail.com')) {
            this.customerloginForm.controls['custEmailAddrerss'].setValue(this.search);
            this.customerloginForm.controls['custUserName'].clearValidators(); // Use clearValidators() to remove all validators
        } else {
            this.customerloginForm.controls['custUserName'].setValue(this.search);
            this.customerloginForm.controls['custEmailAddrerss'].clearValidators(); // Use clearValidators() to remove all validators
        }
        if (this.customerloginForm.valid) {
            const loginadmin: Customer = this.customerloginForm.value;
            this.customerinfo == loginadmin;
            if (loginadmin.custEmailAddrerss == null) {
                loginadmin.isAdd = true;
            }
            else {
                loginadmin.isAdd = false
            }
            this.loginService.customerLogin(loginadmin).subscribe({
                next: (response: any) => {
                    localStorage.setItem("name", response.data.custUserName);
                    this.toastr.success(response.message);
                    this.saveCompleted.emit();

                    this.activeModal.dismiss(); // Or use .close() if needed

                    window.location.reload();
                    
                },
                error: (error: any) => {
                    this.toastr.error(error.error.message);
                }
            });
        }
    }
}
