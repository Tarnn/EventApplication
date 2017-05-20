import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsAppComponent } from './events-app/events-app.component';
import { EventsListComponent } from './events-app/events-list/events-list.component';
import { EventsThumbnailComponent } from './events-app/events-thumbnail/events-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventService } from './events-app/shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
