import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { TechnoListComponent } from './technology/techno-list/techno-list.component';
import { TechnoAddComponent } from './technology/techno-add/techno-add.component';
import { TechnoDetailsListComponent } from './technology/techno-details-list/techno-details-list.component';
import { NavComponent } from './technology/ui/nav/nav.component';
import { TechnologyRoutingModule } from './technology/technology-routing.module';
import { PageNotFoundComponent } from './technology/ui/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    TechnoListComponent,
    TechnoAddComponent,
    TechnoDetailsListComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TechnologyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
