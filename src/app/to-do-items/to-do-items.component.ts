import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent {
  @Input() task = "default";
  @Input() time = "defaultTime"
}
