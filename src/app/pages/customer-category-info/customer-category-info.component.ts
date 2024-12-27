import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClothedisplayService } from '../../core/service/clothedisplay/clothedisplay.service';
import { ClotheDisplayData } from '../../core/models/ClotheDisplay';
import { page, pageSize } from '../../core/utils/status-icon.constants';
import { NgbHighlight, NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from '../../shared/widgets/image/image.component';
import { PageSizeComponent } from '../../shared/widgets/page-size/page-size.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-category-info',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    FormsModule,
    NgbHighlight,
    NgbPaginationModule,
    PageSizeComponent,
    ImageComponent],
  templateUrl: './customer-category-info.component.html',
  styleUrl: './customer-category-info.component.css'
})
export class CustomerCategoryInfoComponent {
  private modalService = inject(NgbModal);
  clotheDisplayList: ClotheDisplayData = { totalRecords: 0, clothedisplayDtoinfo: [] }
  page: number = page; // Default page
  pageSize: number = pageSize; // Default page size
  search: string = "";

  constructor(
    private clothedisplayservice: ClothedisplayService,
    private router: Router,
    private toastr : ToastrService,
  ) {
  }
  ngOnInit(): void {
    this.getAllClotheDisplay(this.page, this.pageSize, this.search);
  }

  getAllClotheDisplay(page: number = this.page, pageSize: number = this.pageSize, search: string = this.search) {
    this.clothedisplayservice.getAllClotheDisplay(page, pageSize, search).subscribe(
      response => {
        if (response.success) {
          this.clotheDisplayList = response.data;
        }
      },
      error => {
        if (error.error) {
          // this.toastr.error(error.error.message);
        }
      }
    );
  }
}
