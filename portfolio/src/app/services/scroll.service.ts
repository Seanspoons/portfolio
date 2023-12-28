import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollSubject = new Subject<string>();

  scroll$ = this.scrollSubject.asObservable();

  triggerScroll(sectionId: string) {
    this.scrollSubject.next(sectionId);
  }

}
