import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.conmponent'
import { EventDetailsComponent } from './events/events-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/events-details/event-route-activator.service'
 import { EventListResolver } from './events/event-list-resolver.service'

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent
  , resolve: {events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: './user/user.module#UserModule'}
  //'./user/user.module#UserModule'
]