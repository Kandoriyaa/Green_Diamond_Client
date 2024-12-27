
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private darkMode: boolean = false;

    constructor() {
        const savedTheme = localStorage.getItem('darkMode');
        this.darkMode = savedTheme === 'true';
        this.applyTheme();
    }

    toggleTheme() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', this.darkMode.toString());
        this.applyTheme();
    }

    private applyTheme() {
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }
}
