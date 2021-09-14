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
import { ContactComponent } from './contact/contact.component';

import { JsBadgeComponent } from './helpers/badges/js-badge/js-badge.component';
import { TsBadgeComponent } from './helpers/badges/ts-badge/ts-badge.component';
import { CssBadgeComponent } from './helpers/badges/css-badge/css-badge.component';
import { PythonBadgeComponent } from './helpers/badges/python-badge/python-badge.component';
import { HtmlBadgeComponent } from './helpers/badges/html-badge/html-badge.component';
import { DotNetBadgeComponent } from './helpers/badges/dot-net-badge/dot-net-badge.component';
import { CSharpBadgeComponent } from './helpers/badges/c-sharp-badge/c-sharp-badge.component';
import { AngularBadgeComponent } from './helpers/badges/angular-badge/angular-badge.component';
import { BootstrapBadgeComponent } from './helpers/badges/bootstrap-badge/bootstrap-badge.component';
import { JqueryBadgeComponent } from './helpers/badges/jquery-badge/jquery-badge.component';
import { SqlBadgeComponent } from './helpers/badges/sql-badge/sql-badge.component';

//#region material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
//#endregion

//#region External
import { SidebarModule } from 'ng-sidebar';
import { SkillsComponent } from './skills/skills.component';
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
    CSharpBadgeComponent,
    ContactComponent,
    AngularBadgeComponent,
    BootstrapBadgeComponent,
    JqueryBadgeComponent,
    SkillsComponent,
    SqlBadgeComponent
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
    SidebarModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
