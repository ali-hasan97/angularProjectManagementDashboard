import { Component } from "@angular/core";

@Component(
  {
    selector: 'demo-comp',
    template: `
    <h1>Hello {{title}}</h1>
    <p>Hello</p>
    `
  }
)
export class demoComponent {
  title = "I'm working";
}