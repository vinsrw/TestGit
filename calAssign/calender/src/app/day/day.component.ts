// import { Component, OnInit, ElementRef, Renderer, AfterViewInit} from '@angular/core';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import { EventInput } from '@fullcalendar/core';
// import interactionPlugin from '@fullcalendar/interaction';
// import * as myjQuery  from 'jquery';
// // import { FullCalendar} from '@fullcalendar/angular';
// declare var $: any;
// @Component({
//   selector: 'app-day',
//   templateUrl: './day.component.html',
//   styleUrls: ['./day.component.css']
// })
// export class DayComponent implements OnInit {

//   constructor( private ele:ElementRef, private render: Renderer) { }
//   // viewDate: Date = new Date();

//   defaultView: 'timeGridDay';
//   calendarEvents: EventInput[] = [
//     {title: '',  start: new Date('')}
//  ]

//   calendarPlugins = [interactionPlugin, dayGridPlugin,timeGridPlugin];

//   dayRender(args){
//     var cell: HTMLElement = args.el;
//     cell.ondblclick = (ev: MouseEvent) => {
//       this.addEvent(args.date);
//     }
//     console.log(args);
//   }

//   addEvent(date){

//     var title = prompt('Enter title');

//     if (title === '') {
//     return;
//     }
//     // else{
//     //   return null;
//     // }

//     this.calendarEvents = this.calendarEvents.concat({
//       title: title,
//       start: date
//     })
//     console.log(this.calendarEvents);
//   }

//   ngOnInit()
//   {
//   }
//   ngAfterViewInit()
//   {
//     $(".fc-widget-content").on('click', function (event) {
//       $(event.target).append("Some appended text.");

//       console.log($(event.target))
//     });
//     // });
//   }

//     // let elements = this.ele.nativeElement.querySelectorAll('.fc-time');
//     // console.log("Here",elements)
//     // elements.forEach(function (value) {
//     //   console.log(value);
//     //  // this.dayRender();
//     // });

//   }

import {
  Component,
  OnInit,
  ElementRef,
  Renderer,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventInput } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
//import { timer } from 'rxjs';
declare var $: any;

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements AfterViewInit {
  // viewDate: Date = new Date();
  evVar: string = '';
  @ViewChild("PopupButton",{static:true}) PopupButton:ElementRef;
  @ViewChild("inEvent",{static:true}) inEvent:ElementRef;
  defaultView: "timeGridDay";
  calendarEvents: EventInput[] = [{ title: "", start: new Date("") }];

  constructor(private ele: ElementRef, private render: Renderer) {}

  dayRender(args) {
    // console.log('args ',args);
    var cell: HTMLElement = args.el;
    cell.ondblclick = (ev: MouseEvent) => {
      //  console.log(ev);
      this.addEvent(args.date);
    };
    console.log(args);
  }

  addEvent(date) {
    var title = prompt("Enter title");

    if (title === "") {
      return;
    }
    // else{
    //   return null;
    // }

    this.calendarEvents = this.calendarEvents.concat({
      title: title,
      start: date
    });
    console.log(this.calendarEvents);
  }

  calendarPlugins = [interactionPlugin, dayGridPlugin, timeGridPlugin];

  ngOnInit()
  {
    // $(document).foundation()
  }

  cellTarget: any
  ngAfterViewInit() {
    //console.log(this.myModal);
    console.log(this.PopupButton)

    // this.PopupButton.nativeElement.click()
    $(".fc-widget-content").one("click", (event)=> {

   //  this.exampleModal.nativeElement.className = "modal fade";
      console.log(this.inEvent);
      this.cellTarget = event.target;
      this.PopupButton.nativeElement.click()
      // this.templateRef.open();

       //console.log(event.target);
       //event.target.innerHTML

     //  $('#').html('Hello World');

      // console.log($(event.target))
    });


  }

  finalChange()
  {
    console.log(this.cellTarget,this.evVar);

    $(this.cellTarget).append(this.evVar);

      //  this.cellTarget = event.target;

}
}
