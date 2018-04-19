import { HelperService } from './../../services/helper.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.helperService.setThemeDefault();
  }

}
