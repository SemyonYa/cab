import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  error$ = new BehaviorSubject<string>('ksdfbvksduyfb bkbsdfvsiduf bukluybkityvrt \n lkfbkasdy bkyboybkyu!!');

  constructor() { }

  showError(text: string) {
    this.error$.next(text);
  }

  hideError() {
    this.error$.next(null);
  }
}
