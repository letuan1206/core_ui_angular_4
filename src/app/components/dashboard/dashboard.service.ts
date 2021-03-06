import { User } from './../../models/user';
import { Report } from './../../models/report';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../../services/config.service';
import { ApiService } from '../../services/api.service';
import { HelperService } from '../../services/helper.service';
import * as _ from 'lodash';
import { LOCALSTORE_KEY } from '../common/constants';

@Injectable()
export class DashboardService {

  constructor(
    private http: Http,
    public configService: ConfigService,
    private api: ApiService,
    private helperService: HelperService,
  ) {
  }

  getCharacters(account: User): Promise<any> {
    return new Promise((resolve, reject) => {
      let params = {
        account: account.memb___id
      }

      this.api.post(`getInfoCharacter`, params)
        .subscribe(res => {
          resolve(res);
        }, reject);
    });
  }
}
