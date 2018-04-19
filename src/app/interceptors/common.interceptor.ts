import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ResponseContentType } from '@angular/http';
import { LOCALSTORE_KEY } from '../components/common/constants';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginToken = JSON.parse(sessionStorage.getItem(LOCALSTORE_KEY.USER)) ? JSON.parse(sessionStorage.getItem(LOCALSTORE_KEY.USER)).login_token : '';
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('LOGIN-TOKEN', loginToken);
    headers.set('Accept', 'application/pdf');

    return next.handle(req.clone({
      headers: headers,
      withCredentials: true
    }));
  }

}
