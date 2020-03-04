import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import {FormsModule} from '@angular/forms'
import * as $ from "jquery";
// import { SchedulerModule } from 'angular-calendar-scheduler';


@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    DayComponent,
    WeekComponent
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],

imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    //SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
