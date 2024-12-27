import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  public concurrentReq = 0;
    private _isLoading = new BehaviorSubject<number>(0);

    isLoading = this._isLoading.asObservable();

    show() {
        this._isLoading.next(++this.concurrentReq);
    }

    hide() {
        this._isLoading.next(--this.concurrentReq);
    }
}
