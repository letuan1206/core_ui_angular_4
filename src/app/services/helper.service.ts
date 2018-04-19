import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LOCALSTORE_KEY } from '../components/common/constants';
import { NgRedux } from 'ng2-redux';
import get = require('lodash/get');
import find = require('lodash/find');
import * as moment from 'moment';
// Interfaces
import { DataOfTableClient, ClientsTransformParam } from '../interfaces/clients-interface';
import { DataOfTableSite, SitesTransformParam } from '../interfaces/sites-interface';
import { EmployeesTransformParam, DataOfTableEmployees } from '../interfaces/employees-interface';

// Services
import { CommonService } from './common.service';
import { ConfigService } from './config.service';
import { ToastrService } from 'ngx-toastr';


declare var jquery: any;
declare var $: any;

@Injectable()
export class HelperService {

  public loading = new BehaviorSubject<boolean>(false);

  constructor(
    private commonService: CommonService,
    private configService: ConfigService,
    private ngRedux: NgRedux<any>,
    private toastr: ToastrService
  ) {

  }

  /**
   * Function dispatch to redux
   */
  dispatchToRedux(actionName, data) {
    this.ngRedux.dispatch({
      type: actionName,
      payload: data
    })
  }

  markFormGroupTouched(formGroup: FormGroup) {
    return (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  removeAllSpace(formGroup: FormGroup) {
    return (<any>Object).values(formGroup.controls).forEach(control => {
      if (control.value && typeof control.value === 'string') {
        control.setValue(control.value.trim());
      }
    });
  }

  setThemeDefault() {
    var themeSetting = JSON.parse(localStorage.getItem(LOCALSTORE_KEY.THEME_SETTING));

    if (!themeSetting) {
      themeSetting = {
        menuBar: null,
        menuText: null,
        headingBar: null,
        headingText: null
      };
    }

    $('.app-header.navbar').css('background-color', themeSetting.menuBar || '');
    $('.app-header.navbar .nav-item .nav-link').css('color', themeSetting.menuText || '');

    $('.card-header').css('background-color', themeSetting.headingBar || '');
    $('.card-header').css('color', themeSetting.headingText || '');
    $('.sheet-right-edit .fake-link').css('color', themeSetting.headingText || '');
  }

  showLoading() {
    this.loading.next(true);
  }

  hideLoading() {
    this.loading.next(false);
  }

  showSuccess(message = null, title = null) {
    this.toastr.success(message, title, {
      timeOut: 3000,
      enableHtml: true
    });
  }

  showError(message = null, title = null) {
    this.toastr.error(message, title, {
      timeOut: 3000,
      enableHtml: true
    });
  }

  showWarning(message = null, title = null) {
    this.toastr.warning(message, title, {
      timeOut: 3000,
      enableHtml: true
    });
  }

  showInfo(message = null, title = null) {
    this.toastr.info(message, title, {
      timeOut: 3000,
      enableHtml: true
    });
  }

  handleError(e) {
    console.warn(e);
  }

  generatorRandomString() {
    let number = Math.floor(1000 + Math.random() * 9000);
    //return status.indexOf("Create") != -1 ? `NEW:${number}` : `UPDATE:${number}`;
    return `NEW:${number}`;
  }

  getKeysOfValue(data) {
    let arrKeys = [];
    for (let key in data) {
      arrKeys.push(key);
    }
    return arrKeys;
  }

  convertDate(date, formatDate?) {
    return moment.utc(date).format(formatDate);
  }

  /**
   * Validate email field in formControl
   */

  customEmailValidator(control: AbstractControl): ValidationErrors {
    if (!control.value) {
      return null;
    }
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(control.value)) {
      return null
    } else {
      return { error: 'Not valid email' }
    }
  }

}
