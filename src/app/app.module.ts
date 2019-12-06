import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { DashboardComponent } from './pages/dashboard';
import { BuildingDashboardComponent } from './pages/dashboard/building-table';
import { JobDashboardComponent } from './pages/dashboard/job-table';
import { ProfileComponent } from './pages/profile';
import { AssetsAssetComponent } from './pages/assets/asset';
import { ViewAssetTableComponent } from './pages/assets/asset/view-asset';
import { AddAssetComponent } from './pages/assets/asset/add-asset';
import { EditAssetComponent } from './pages/assets/asset/edit-asset';

import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        GoogleChartsModule,
        DemoMaterialModule,
        MatNativeDateModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DashboardComponent,
        BuildingDashboardComponent,
        JobDashboardComponent,
        ProfileComponent,
        AssetsAssetComponent,
        ViewAssetTableComponent,
        AddAssetComponent,
        EditAssetComponent
    ],
    exports: [

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }