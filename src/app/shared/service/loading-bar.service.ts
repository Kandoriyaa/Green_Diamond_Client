// import {Injectable} from '@angular/core';
// import {BehaviorSubject} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class LoadingBarService {
//   public concurrentReq = 0;
//   private _isLoading = new BehaviorSubject<number>(0);
//
//   isLoading = this._isLoading.asObservable();
//
//   show() {
//     this._isLoading.next(++this.concurrentReq);
//   }
//
//   hide() {
//     this._isLoading.next(--this.concurrentReq);
//   }
// }
//

// loading.service.ts
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}
