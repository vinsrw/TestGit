import { WeatherService } from './../weather.service';
import { Forecast } from './../forecast';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

export class ForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  forecastForm: FormGroup;
  cityForecast: Forecast[] = [];

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    })
  }
  onSubmit()
  {
    this.cityForecast.splice(0, this.cityForecast.length);
    console.log(this.forecastForm);
    this.weatherService.fiveDayForecast(this.forecastForm.value.forecastCity).subscribe((data) =>
    {
      console.log(data.list);
      for (let i = 6; i < data.list.length;  i = i + 8){
        const temp = new Forecast(data.list[i].dt_txt,
         data.list[i].weather[0].icon,
         data.list[i].main.temp_max,
         data.list[i].main.temp_min);
         this.cityForecast.push(temp);
         //this.forecastForm.value
      }
      console.log(this.cityForecast);
    }
    );
  }

}


  // let counter = 0;
      // if(data && data["list"]){
      //   for(let obj of data["list"]){
      //   if(counter<5)
      //     console.log(obj)
      //     counter++;
      //   }
      // }