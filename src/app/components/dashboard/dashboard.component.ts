import { Character, User } from './../../models/user';
import { ConfigService } from './../../services/config.service';
import { DashboardService } from './dashboard.service';
import { HelperService } from './../../services/helper.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALSTORE_KEY } from '../common/constants';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  account: User;
  characters: Character[] = [];
  characterChoose: Character;
  constructor(private router: Router,
    private helperService: HelperService,
    private dashboardService: DashboardService,
    private configService: ConfigService
  ) {
    this.account = JSON.parse(sessionStorage.getItem(LOCALSTORE_KEY.USER));
  }
  ngOnInit() {
    // const routerURL = this.router.url;

    // $('body').addClass('sidebar-minimized brand-minimized');
    this.helperService.showLoading();
    this.dashboardService.getCharacters(this.account).then(res => {
      if (res.status === this.configService.successStatus) {
        this.characters = res.data;

        this.characterChoose = this.characters[0];
        console.log(this.characters);
      }
      this.helperService.hideLoading();
    }).catch(err => {
      console.log(err);
      this.helperService.hideLoading();
    });
  }

  ngAfterViewInit() {
    this.helperService.setThemeDefault();
  }

  getProcess(value, type = null) {
    if (type === 'money') {
      return value / 2000000000 * 100 + '%';
    } else if (type === 'cLevel') {
      return value / 400 * 100 + '%';
    }
    return value / 65000 * 100 + '%';
  }
}
