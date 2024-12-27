import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class WarningDialogService {

  constructor() { }

  confirm(): Promise<any> {
    return Swal.fire({
      title: 'Are you sure?',
      text: 'You want to process this action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    });
  }
}
