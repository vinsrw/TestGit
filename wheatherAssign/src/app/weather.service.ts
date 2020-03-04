import { Forecast } from './forecast';
import { TodayWeather } from './today-weather';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 // today: TodayWeather = new TodayWeather('pune', '80', 'ok', '54', 'sunny', '96', '72');
   myWeather: TodayWeather;
  location: any;
  // weatherNow()
  // {
  //   return this.today;
  // }
  constructor(private http: HttpClient) { }
  localWeather()
  {
    return new Promise((res, rej) =>
    {
      navigator.geolocation.getCurrentPosition((pos) =>
        {
        this.location =  pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
     //return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=785090dc7451b22d4192a2f6d54e7bde&units=metric`).toPromise().then(
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Pune,in&appid=785090dc7451b22d4192a2f6d54e7bde&units=metric`).toPromise().then(
      //return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=Pune,in&appid=785090dc7451b22d4192a2f6d54e7bde&units=metric`).toPromise().then(
      (data) => 
      {
        console.log(data);
        this.myWeather = new TodayWeather(
            data.name, 
            data.main.temp,
            data.weather[0].icon, 
            data.main.humidity,
            data.weather[0].description, 
            data.main.temp_max, 
            data.main.temp_min)
          
          res(this.myWeather);
          
          
        })
      })
    })
  }
  fiveDayForecast(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=785090dc7451b22d4192a2f6d54e7bde&units=metric`);
  }
  }


