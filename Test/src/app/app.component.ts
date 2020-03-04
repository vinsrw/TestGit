import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName:  new FormControl('Vinayak'),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  title = 'Test';
  loadedFeature = 'recipe';
 onNavigate(feature: string)
 {
    this.loadedFeature = feature;
 }



}




