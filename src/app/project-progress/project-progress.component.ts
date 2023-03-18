import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-project-progress',
  templateUrl: './project-progress.component.html',
  styleUrls: ['./project-progress.component.css']
})


export class ProjectProgressComponent {
  @Input() progress : string = "0";
  @Input() progressClass = "default";
  @Input() project = "default";

  // initialize progressPrint as progress
  public progressPrint: string = this.progress;

  ngOnChanges() {
    // if progress == "100", progressPrint = "Complete!", otherwise keep it as is
    if (this.progress == "100") {
      this.progressPrint = "Complete!";
    } else {
      this.progressPrint = this.progress + "%";
    }
  }
}
