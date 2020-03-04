import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-return',
  templateUrl: './text-return.component.html',
  styleUrls: ['./text-return.component.css']
})
export class TextReturnComponent implements OnInit {
  EnterName:string = "Welcome";
  constructor() { }

  ngOnInit() {
  }

}
