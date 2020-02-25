//import { ResolveLocService } from './resolve-loc.service';
import { WeatherService } from './weather.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ResolveLocService implements Resolve<any>
{

  constructor(private ws: WeatherService) { }
  resolve()
  {
    return this.ws.localWeather()
    //return this.ws.fiveDayWeather()
  }
}
