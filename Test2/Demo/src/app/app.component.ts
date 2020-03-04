import { TestComponent } from './test/test.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements  AfterViewInit {

  public name: string = "Vinayak";

  public message ='';

@ViewChild(TestComponent, {static: true}) testComponentRef:TestComponent;

ngAfterViewInit()
{
  this.testComponentRef.myName =  "My Name is Vinayak";
}

}
