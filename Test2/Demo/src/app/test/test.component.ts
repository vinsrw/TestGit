import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public myName ;

 @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  genEvent()
  {
    this.childEvent.emit("Hey Pooja ");
  }

}
