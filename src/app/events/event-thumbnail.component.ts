import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-Thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
      <div><strong>Date:</strong> {{event.date}}</div>
      <div><strong>Time:</strong> {{event.time}}</div>
      <div><strong>Price:</strong> {{event.price}}</div>
      <address>
        <strong>Address:</strong><br />
       <span> {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}} </span>
      </address>
    </div>
    <div><button class="btn" (click)="handleClickMe()">Click</button></div>
  `,
  styles:[`
      .pad-left {margin-left: 10px}
      .well div {color: red}
  `]
})
export class EventsThumbnailComponent {
@Input() event:any;
@Output() eventClick= new EventEmitter();
handleClickMe(){
   this.eventClick.emit(this.event.name);
}
}
