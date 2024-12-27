import { DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [DecimalPipe],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    loginForm!: FormGroup;
    submitted = false;
    isUser = signal(false)
    isBrowser!: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
    ) {

    }
}
