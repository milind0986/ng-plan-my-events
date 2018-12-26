import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-Thumbnail',
  template: `
  <div>
<h2>{{event.name}}</h2>
      <div><strong>Date:</strong> {{event.date}}</div>
      <div><strong>Time:</strong> {{event.time}}</div>
      <div><strong>Price:</strong> {{event.price}}</div>
    </div>
    <div>
      <address>
        <strong>Address:</strong><br />
        {{event?.location?.address}}<br />
        {{event?.location?.city}}, {{event?.location?.country}}
      </address>
    </div>
    <div><button class="btn" (click)="handleClickMe()">Click</button></div>
  `
})
export class EventsThumbnailComponent {
@Input() event:any;
@Output() eventClick= new EventEmitter();
handleClickMe(){
   this.eventClick.emit(this.event.name);
}
}
