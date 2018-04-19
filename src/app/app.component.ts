import { Component, DoCheck, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var jquery: any;
declare var $: any;

// Services
import { HelperService } from './services/helper.service';

// Redux
import { NgRedux, select } from 'ng2-redux';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  public loading = false;

  constructor(
    private helperService: HelperService,
    private cdr: ChangeDetectorRef
  ) {
    this.helperService.loading.subscribe(res => {
      this.loading = res || false;
    });
  }

  ngOnInit() {
    // this.dueActivitiesModal.show();
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  setColor() {
    setTimeout(() => {
      // $('body').append('<style id>.card-header: {background-color: null} </style>');
    }, 0)
  }
}
