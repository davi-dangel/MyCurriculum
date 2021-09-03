import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { CertificationComponent } from './certification/certification.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';

//#region material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
//#endregion

//#region External
import { SidebarModule } from 'ng-sidebar';
import { JsBadgeComponent } from './helpers/badges/js-badge/js-badge.component';
import { TsBadgeComponent } from './helpers/badges/ts-badge/ts-badge.component';
import { CssBadgeComponent } from './helpers/badges/css-badge/css-badge.component';
import { PythonBadgeComponent } from './helpers/badges/python-badge/python-badge.component';
import { HtmlBadgeComponent } from './helpers/badges/html-badge/html-badge.component';
import { DotNetBadgeComponent } from './helpers/badges/dot-net-badge/dot-net-badge.component';
import { CSharpBadgeComponent } from './helpers/badges/c-sharp-badge/c-sharp-badge.component';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CertificationComponent,
    HomeComponent,
    ProjectsComponent,
    JsBadgeComponent,
    TsBadgeComponent,
    CssBadgeComponent,
    PythonBadgeComponent,
    HtmlBadgeComponent,
    DotNetBadgeComponent,
    CSharpBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
