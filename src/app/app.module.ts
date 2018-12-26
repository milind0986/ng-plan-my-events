import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.conmponent';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
