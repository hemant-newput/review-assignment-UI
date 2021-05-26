import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  // tslint:disable-next-line: typedef
  intercept(req, next) {
    const sharedService = this.injector.get(SharedService);
    const tokenizeRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sharedService.getToken()}`
      }
    });
    return next.handle(tokenizeRequest);
  }


}
