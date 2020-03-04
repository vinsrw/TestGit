import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin, timeGridPlugin ];
  defaultView: 'timeGridWeek';
  calendarEvents: EventInput[] = [
    {title: 'Shivjayanti',  start: new Date('Feb 19, 2020 12: 00: 00')}
 ]
  constructor() { }
  dayRender(args){
    var cell: HTMLElement = args.el;
    cell.ondblclick = (ev: MouseEvent) => {
      this.addEvent(args.date);
    }
  }
  addEvent(date){
    // tslint:disable-next-line: prefer-const
    var title = prompt('Enter title');
    // tslint:disable-next-line: triple-equals
    if (title === '') {
    return;
    }
    // else{
    //   return null;
    // }
    this.calendarEvents = this.calendarEvents.concat({
      title: title,
      start: date
    })
  }

  ngOnInit() {
  }


  public minDate: Date = new Date ("12/31/1800");
  public maxDate: Date = new Date ("12/31/2100");
  public value: Date = new Date ();
}
