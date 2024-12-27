import { pageSize } from './../../utils/status-icon.constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { APIConstant } from '../../constant/APIConstants';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpService: HttpClient) { }

  saveCustomer(data: Customer): Observable<any> {
    return this.httpService.post(APIConstant.customer.saveCustomer, data)
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpService.delete(`${APIConstant.customer.deleteCustomer}/${id}`)
  }
}
