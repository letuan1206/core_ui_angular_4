import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { ConfigService } from './config.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  apiBase: string;

  constructor(
    private httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.apiBase = this.configService.get('apiBase');
  }

  post(url, params, type?): Observable<any> {
    let apiURL = this.apiBase + url;
    params.environment = this.configService.get('environment');

    if (type && type === 'blob') {
      return this.httpClient.post(apiURL, params, { responseType: 'blob' }).map(res => res);
    }
    return this.httpClient.post(apiURL, params).map(res => res);
  }
}
