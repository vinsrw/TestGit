import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNUmber: number)
  {
    if (firedNUmber % 2 === 0)
    {
      this.evenNumbers.push(firedNUmber);
    }
    else 
    {
      this.oddNumbers.push(firedNUmber);
    }
    
  }
  
}
