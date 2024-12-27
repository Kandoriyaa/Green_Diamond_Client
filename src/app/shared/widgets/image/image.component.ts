import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-image',
    standalone: true,
    imports: [],
    templateUrl: './image.component.html',
    styleUrl: './image.component.css'
})
export class ImageComponent {
    @Input() src!: string;
    @Input() alt!: string;
    @Input() title!: string;
    @Input() height!: number;
    @Input() width!: number;

    onError(event: Event) {
        (event.target as HTMLImageElement).src = 'assets/images/no_image.png';
    }
}
