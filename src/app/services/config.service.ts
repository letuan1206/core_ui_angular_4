import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {

  settings: any;
  errorStatus: string;
  successStatus: string;

  constructor(
    public httpClient: HttpClient
  ) {

  }

  load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('assets/data/config.json')
        .subscribe((data: any) => {
          this.settings = data;
          this.errorStatus = data.status.error;
          this.successStatus = data.status.success;
          resolve(true);
        }, error => {
          reject(error);
        });
    });
  }

  get(setting) {
    return this.settings[setting];
  }

}
