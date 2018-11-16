import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  userStatus: BehaviorSubject<string> = new BehaviorSubject<string>(status);
  emitNewDonor: BehaviorSubject<any> = new BehaviorSubject('');
  constructor() { }

  changeStatus(status: string) {
    this.userStatus.next(status);
  }
  
  addDonor(Donor: any) {
    this.emitNewDonor.next(Donor);
  }
  
}
