import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.css']
})
export class GeneralCardComponent {
  @Input() cardTitle = "Default";
  @Input() cardAmount = "Default";
}
