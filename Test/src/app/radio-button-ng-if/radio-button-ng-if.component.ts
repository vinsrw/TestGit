import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button-ng-if',
  templateUrl: './radio-button-ng-if.component.html',
  styleUrls: ['./radio-button-ng-if.component.css']
})
export class RadioButtonNgIfComponent implements OnInit {
  isValid : boolean = true;

  changeValue(checkValid){
    this.isValid = checkValid;
  }
  constructor() { }

  ngOnInit() {
  }

}
