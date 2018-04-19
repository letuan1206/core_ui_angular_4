import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {

  disableSubmenu = false;
  disableMenuDashboard = false;
  showMenuContact = false;
  showMenuClient = false;
  showMenuRoster = false;
  showMenuDashboard = false;
  showMenuSites = false;
  showMenuSubSite = false;
  showSiteDetail = false;
  addClassOpenSite = false;
  showMenuEmployee = false;

  siteSubMenu = {
    patrolTracking: false,
    reports: false,
    reportSetup: false
  }

  siteID: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.resetShowSubMenuSite();
  }

  posRouterCurrent() {
    return false;
  }

  ngDoCheck(): void {
    var routerURL = this.router.url;
    this.resetShowMenu();
    if (routerURL === '/organisation' || routerURL === '/dashboard') {
      this.disableSubmenu = true;
      this.showMenuDashboard = true;
      return
    }

    if (routerURL === '/organisation/add' || routerURL.indexOf('/organisation/detail') === 0 ||
      routerURL.indexOf('/personal-setting/') === 0 || routerURL.indexOf('/configuration/') === 0) {
      this.showMenuDashboard = true;
      return;
    }

    if (routerURL === '/contact') {
      this.showMenuContact = true;
      this.disableSubmenu = true;
      return;
    }

    if (routerURL === '/contact/add' || routerURL.indexOf('/contact/') === 0) {
      this.showMenuContact = true;
      return;
    }

    if (routerURL === '/clients') {
      this.disableSubmenu = true;
      this.showMenuClient = true;
      return;
    }

    if (routerURL === '/clients/add' || routerURL.indexOf('/clients/') === 0) {
      this.showMenuClient = true;
      return;
    }

    if (routerURL === '/employees') {
      this.disableSubmenu = true;
      this.showMenuEmployee = true;
      return;
    }

    if (routerURL === '/employees/add' || routerURL.indexOf('/employees/') === 0) {
      this.showMenuEmployee = true;
      return;
    }

    if (routerURL === '/rostering' || routerURL === '/roster-template') {
      this.showMenuRoster = true;
      return;
    }

    if (routerURL === '/sites') {
      this.disableSubmenu = true;
      this.showMenuSites = true;
      this.addClassOpenSite = true;
      return;
    }

    if (routerURL === '/sites/add' || routerURL.indexOf('/sites/') === 0) {
      if (routerURL.indexOf('/ID:') !== -1) {
        this.siteID = 'ID:' + routerURL.split('/ID:')[1];
        this.showMenuSubSite = true;
      }

      if (routerURL.indexOf('/sites/detail/') === -1) {
        this.disableSubmenu = true;
        this.addClassOpenSite = false;
        this.showMenuSites = false;
        this.showSiteDetail = true;
      } else {
        this.showSiteDetail = false;
        this.showMenuSites = true;
        this.addClassOpenSite = true;
      }

      return;
    }
  }

  resetShowMenu() {
    this.disableMenuDashboard = false;
    this.showMenuContact = false;
    this.showMenuClient = false;
    this.showMenuRoster = false;
    this.showMenuDashboard = false;
    this.disableSubmenu = false;
    this.showMenuSites = false;
    this.showMenuSubSite = false;
    this.showMenuEmployee = false;
  }

  resetShowSubMenuSite() {
    this.siteSubMenu = {
      patrolTracking: false,
      reports: false,
      reportSetup: false
    }
  }

  disableSubMenuSite() {
    this.disableSubmenu = true;
  }

  showSubMenuSite(type) {
    this.resetShowSubMenuSite();

    if (type === 'patrolTracking') {
      this.siteSubMenu.patrolTracking = true;
    } else if (type === 'reports') {
      this.siteSubMenu.reports = true;
    } else if (type === 'reportSetup') {
      this.siteSubMenu.reportSetup = true;
    }
  }


}
