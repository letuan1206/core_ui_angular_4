import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { TextMaskModule } from 'angular2-text-mask';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LoadingModule } from 'ngx-loading';

// Module
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedProsekModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { DataTableModule } from 'primeng/datatable';
import { MomentModule } from 'angular2-moment';
import { AgmCoreModule } from '@agm/core';
import { CustomBrowserXhr } from './services/xhr.services';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from "ngx-popover";
import { OverlayPanelModule } from 'primeng/overlaypanel';

// Redux
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

// Interceptors
import { CommonInterceptor } from './interceptors/common.interceptor';

// Component
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Service
import { ConfigService } from './services/config.service';
import { ApiService } from './services/api.service';
import { HelperService } from './services/helper.service';
import { CommonService } from './services/common.service';

// Directive
import { AsideToggleDirective } from './shared/aside.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';

// DatePipe
import { DataPipe } from './pipes/data.pipe';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Guard
import { AuthAccountGuard } from './guards/auth-account.guard';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FileUploadModule,
    TextMaskModule,
    NgReduxModule,
    LoadingModule,
    HttpClientModule,
    DashboardModule,
    SharedProsekModule,
    DataTableModule,
    MomentModule,
    BrowserAnimationsModule,
    PopoverModule,
    OverlayPanelModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AppComponent,
    BreadcrumbsComponent,
    SimpleLayoutComponent,
    FullLayoutComponent,
    ErrorMessageComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    DataPipe,
    SafeHtmlPipe,

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    ConfigService,
    ApiService,
    HelperService,
    CommonService,
    AuthAccountGuard,
  {
    provide: CustomBrowserXhr,
    useClass: CustomBrowserXhr
  },
  {
    provide: APP_INITIALIZER,
    useFactory: appConfigFactory,
    deps: [ConfigService],
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CommonInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

export function appConfigFactory(config: ConfigService) {
  return () => config.load();
}

