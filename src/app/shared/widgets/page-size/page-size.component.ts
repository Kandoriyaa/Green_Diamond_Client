import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {pageSize} from "../../../core/utils/status-icon.constants";

@Component({
    selector: 'app-page-size',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './page-size.component.html',
})

export class PageSizeComponent {
    @Input() pageSizes: number[] = [10, 20, 50, 100];
    @Input() defaultPageSize: number = pageSize;
    @Output() pageSizeChange = new EventEmitter<number>();
    @Input() isDisabled: boolean = false;


    onPageSizeChange(event: Event) {
        const newSize = (event.target as HTMLSelectElement).value;
        this.pageSizeChange.emit(Number(newSize));
    }
}
