import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  // calendarPlugins = [dayGridPlugin, interactionPlugin, timeGridPlugin ];
  //defaultView: 'timeGridMonth';
  calendarEvents: EventInput[] = [
    {title: '',  start: new Date('')}
 ]

  constructor() { }

  dayRender(args){
    var cell: HTMLElement = args.el;
    cell.ondblclick = (ev: MouseEvent) => {
      this.addEvent(args.date);
    }
  }
  addEvent(date){

    var title = prompt('Enter title');

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

  calendarPlugins = [dayGridPlugin, interactionPlugin, timeGridPlugin];



}
