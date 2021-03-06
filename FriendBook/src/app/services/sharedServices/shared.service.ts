import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private titleService:Title) { }

  setTitle(title)
  {
    this.titleService.setTitle(title);
  }
  getTitle() :string
  {
    return this.titleService.getTitle();
  }

}
