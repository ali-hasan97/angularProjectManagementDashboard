import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GeneralCardComponent } from './general-card/general-card.component';
import { FooterComponent } from './footer/footer.component';
import { PriorityCardsComponent } from './priority-cards/priority-cards.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { ProjectProgressComponent } from './project-progress/project-progress.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    GeneralCardComponent,
    FooterComponent,
    PriorityCardsComponent,
    ToDoItemsComponent,
    ProjectProgressComponent,
    LineGraphComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
