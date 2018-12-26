import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.conmponent';

@Component({
  selector: 'eventsApp',
  template: "<events-list></events-list>"
})
export class EventsAppComponent {
  title = 'app';
}
