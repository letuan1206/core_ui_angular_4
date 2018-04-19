import { Router } from '@angular/router';
import { LOCALSTORE_KEY } from './../components/common/constants';
import { ConfigService } from './../services/config.service';
import { HelperService } from './../services/helper.service';
import { ApiService } from './../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  formLogin: FormGroup;
  errorMessages = null;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private helperService: HelperService,
    private configService: ConfigService,
    private router: Router,
  ) {
    this.formLogin = this.renderFormLogin();
  }

  login() {
    let that = this;
    that.errorMessages = null;

    console.log(this.formLogin);
    that.helperService.showLoading();
    $.getJSON('//freegeoip.net/json/?callback=?', function (result) {
      let params = {
        account: that.formLogin.value.account,
        pass: that.formLogin.value.password,
        ip: result.ip
      };

      that.apiService.post('login', params).subscribe(res => {
        if (res.status === that.configService.errorStatus) {
          that.errorMessages = res.message;
          that.helperService.hideLoading();
          that.helperService.showError(that.errorMessages);
          return;
        } else {
          sessionStorage.setItem(LOCALSTORE_KEY.USER, JSON.stringify(res.data));
          that.helperService.hideLoading();
          that.helperService.showSuccess(res.message);
          that.router.navigate(['/dashboard']);
        }
      }, err => {
        that.helperService.hideLoading();
      });
    });
  }

  renderFormLogin() {
    let form = this.fb.group({
      account: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      password: ['', [Validators.required]],
    });

    return form;
  }
}
