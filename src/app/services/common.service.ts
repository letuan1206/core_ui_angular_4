import { Injectable } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";

// Services
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

// Interfaces
import { Params } from '../interfaces/common-interface';
import * as _ from 'lodash';

@Injectable()
export class CommonService {

  queryByIdSub: ISubscription;
  queryAllDataSub: ISubscription;

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) {

  }

}
