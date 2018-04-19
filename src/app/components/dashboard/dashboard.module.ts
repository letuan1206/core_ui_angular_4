import { DashboardService } from './dashboard.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './../../app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'ng2-file-upload';
import { CalendarModule } from 'primeng/calendar';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Ng4GeoautocompleteModule } from 'ng4-gmap-autocomplete';
import { ModalModule } from 'ng2-bootstrap';
import { MomentModule } from 'angular2-moment';
import { SignaturePadModule } from 'angular2-signaturepad';
// Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        AppRoutingModule,
        CommonModule,
        DataTableModule,
        MultiSelectModule,
        DateTimePickerModule,
        MultiselectDropdownModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        CheckboxModule,
        FileUploadModule,
        CalendarModule,
        MomentModule,
        Ng4GeoautocompleteModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        DashboardComponent,
    ],
    providers: [
        DashboardService,
    ]
})
export class DashboardModule { }
