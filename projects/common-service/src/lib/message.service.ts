import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private counter = 0;

  constructor() { }

  getHello(): Observable<string> {
    return new Observable(obs => {
      obs.next('Hello World ' + this.counter);
      obs.complete();
    });
  }

  addCounterValue() {
    this.counter++;
  }
}
