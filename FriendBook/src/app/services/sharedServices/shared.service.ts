import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private subject = new Subject<any>();
  constructor(private titleService: Title) { }

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
  getDecodedToken() {
    try {
      return jwt_decode(localStorage.getItem('token'));
    }
    catch (Error) {
      return null;
    }
  }
  getToken() {
    return localStorage.getItem('token');
  }
  timerModal(title, timer) {
    let timerInterval;
    Swal.fire({
      title: title,
      html: 'Woohoooo! I will close in <b></b> milliseconds.',
      timer: timer,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft().toString();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  speak(message) {
    if (localStorage.getItem('talkback')) {
      const Speech = new SpeechSynthesisUtterance(message);
      Speech.volume = 1;
      Speech.pitch = 1;
      Speech.rate = 1;
      window.speechSynthesis.speak(Speech);
    }
  }
  getInternalAccess(): boolean {
    const token = this.getDecodedToken();
    const userID = localStorage.getItem('userID')
    return token['id'] == userID;
  }
}
