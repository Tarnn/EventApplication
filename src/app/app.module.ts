import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EventsAppComponent } from './events-app/events-app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ToastrService } from './commons/toastr.service';
import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';
import { Error404Component } from './errors/404/404.component';

import { EventsListComponent, 
         EventsThumbnailComponent, 
         EventDetailsComponent, 
         EventService, 
         CreateEventComponent, 
         EventRouteActivator, 
         EventListResolver, 
         CreateSessionComponent   } from './events-app/index';

@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty){
    console.log("are you sure " + component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return false;
}