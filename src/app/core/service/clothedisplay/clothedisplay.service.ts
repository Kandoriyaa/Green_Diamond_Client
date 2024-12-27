import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ClotheDisplayListResponse, ClotheDisplayResponse } from '../../models/ClotheDisplay';
import { APIConstant } from '../../constant/APIConstants';

@Injectable({
  providedIn: 'root'
})
export class ClothedisplayService {

  constructor(private httpService: HttpClient) { }


  getAllClotheDisplay(page?: number, pageSize?: number, search?: string): Observable<ClotheDisplayListResponse> {
    let params = new HttpParams();

    if (page !== undefined) {
      params = params.set('page', page.toString());
    }
    if (pageSize !== undefined) {
      params = params.set('pageSize', pageSize.toString());
    }
    if (search) {
      params = params.set('search', search);
    }
    return this.httpService.get<ClotheDisplayListResponse>(`${APIConstant.clotheDisplay.getAllClotheDisplay}`, { params });
  }
}
