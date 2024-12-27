import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {ProgressBarService} from '../../service/progress-bar.service';

@Component({
    selector: 'app-progress-bar',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
    constructor(
        public progressBarService: ProgressBarService
    ) {
    }
}
