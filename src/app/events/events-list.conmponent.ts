import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <h1>Hello</h1>
  <div>Upcoming Events</div>
  <event-Thumbnail [event]="event1" (eventClick)="handleEventClicked($event)"></event-Thumbnail>
  `
})
export class EventsListComponent {
event1={
  id:1,
  name:"Microsoft Connect",
  date:"9/12/2019",
  time:"10:00 pm",
  price:"200",
  imageUrl:"../src/assets/images/basic-shield.png",
  location:{
    address:"everton",
    city:"london",
    country:"UK"
  }
}
handleEventClicked(data)
{
  console.log("data:",data);
}
}
