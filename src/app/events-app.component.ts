import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.conmponent';

@Component({
  selector: 'eventsApp',
  template: `
    <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
}
