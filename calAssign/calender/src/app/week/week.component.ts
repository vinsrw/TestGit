import {
  Component,
  OnInit,
  ElementRef,
  Renderer,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
declare var $:any
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})

export class WeekComponent implements AfterViewInit  {

  evVar: string = '';
  @ViewChild("PopupButton",{static:true}) PopupButton:ElementRef;
  @ViewChild("inEvent",{static:true}) inEvent:ElementRef;
 /// calendarConfig.showTimesOnWeekView=true;
  defaultView: 'dayGridWeek';

  calendarEvents: EventInput[] = [{ title: "", start: new Date("") }];


 constructor(private ele: ElementRef, private render: Renderer) {}

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
    console.log(this.calendarEvents);

  }


  calendarPlugins = [interactionPlugin, dayGridPlugin, timeGridPlugin];

  ngOnInit() {
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

  // ngAfterViewInit() {



  //   $(".fc-widget-content").on('click', function (event) {
  //     $(event.target).append("Some appended text.");

  //     console.log($(event.target))
  //   });

  // }


  finalChange()
  {
    console.log(this.cellTarget,this.evVar);

    $(this.cellTarget).append(this.evVar);

      //  this.cellTarget = event.target;

}

}
