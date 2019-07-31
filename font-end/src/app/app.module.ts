import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeShowComponent} from "./employee/employee-show/employee-show.component";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeShowComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
