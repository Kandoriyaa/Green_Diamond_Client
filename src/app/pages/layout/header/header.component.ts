import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginRegistrationAddComponent } from '../../authentication/login-registration-add/login-registration-add.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private modalService = inject(NgbModal);
  @Input() Id?: number;  // Add this line to accept routeId as input
  @Input() page?: number;
  @Input() pageSize?: number;
  name?:string|null;

  ngOnInit(): void {
    this.name=localStorage.getItem("name");
  }

  loginregistration(Id?: number) {
    const modalRef = this.modalService.open(LoginRegistrationAddComponent, {
      backdrop: 'static',
      size: 'md',
      keyboard: false,
      centered: true,
    });
    modalRef.componentInstance.page = this.page;
    modalRef.componentInstance.pageSize = this.pageSize;
   
    if (Id) {
      modalRef.componentInstance.Id = Id;
    }
  }

}
