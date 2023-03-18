import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-priority-cards',
  templateUrl: './priority-cards.component.html',
  styleUrls: ['./priority-cards.component.css']
})
export class PriorityCardsComponent {
  @Input() priority = "Default";
  @Input() color = "Default";
  @Input() cardClass = "Default";
}
