import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private profileMenuSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  // Profile Menu
  setProfileMenu(data: boolean): void {
    this.profileMenuSubject.next(data);
  }

  getProfileMenuData(): Observable<boolean> {
    return this.profileMenuSubject.asObservable();
  }

}
