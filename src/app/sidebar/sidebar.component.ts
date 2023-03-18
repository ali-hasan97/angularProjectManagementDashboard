import { Component, AfterViewInit } from '@angular/core';

declare function theme(): void;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements AfterViewInit {

  ngAfterViewInit() {
    theme();
  }
}
