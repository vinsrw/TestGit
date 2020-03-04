import { TodayWeather } from './../today-weather';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  myWeather: TodayWeather;
  //location
  public date = new Date();
  constructor(private ws : WeatherService, private route: ActivatedRoute) { }
  
  ngOnInit() {

    this.route.data.subscribe(
     (data:{myWeather: TodayWeather}) => {
       this.myWeather = data.myWeather;
     }
    )
  }
    onSubmit(weatherForm:NgForm)
    {
      console.log(weatherForm);

    }
  //  this.myWeather = this.ws.weatherNow();
  //   navigator.geolocation.getCurrentPosition((pos)
  //   =>{
  //     this.location = pos.coords;
  //     console.log(this.location);
  //     const lat = this.location.latitude;
  //     const lon = this.location.longitude;
  //     this.ws.localWeather(lat, lon).subscribe((data) => {
  //       console.log(data);
  //       this.myWeather = new TodayWeather(data.name, 
  //         data.main.temp,
  //         data.weather[0].icon, 
  //         data.main.humidity,
  //         data.weather[0].description, 
  //         data.main.temp_max, 
  //         data.main.temp_min)
  //     })
  //   })
  

}
