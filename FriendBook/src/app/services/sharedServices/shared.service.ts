import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private subject = new Subject<any>();
  constructor(private titleService: Title) {}

  setTitle(title) {
    this.titleService.setTitle(title);
  }
  getTitle(): string {
    return this.titleService.getTitle();
  }
  sendMessage(message) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
