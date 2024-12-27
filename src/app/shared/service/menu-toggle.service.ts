import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {

  private toggleSource = new BehaviorSubject<boolean>(false);
  currentToggleState = this.toggleSource.asObservable();

  constructor() {
  }

  toggleMenu() {
    this.toggleSource.next(!this.toggleSource.value);
  }
}
