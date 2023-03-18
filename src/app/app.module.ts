import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { demoComponent } from './demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GeneralCardComponent } from './general-card/general-card.component';

@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    Demo2Component,
    NavbarComponent,
    SidebarComponent,
    GeneralCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
