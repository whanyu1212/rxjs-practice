// tab.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private tabSubject = new BehaviorSubject<string>('Home');
  currentTab = this.tabSubject.asObservable();

  changeTab(tab: string) {
    this.tabSubject.next(tab);
  }
}