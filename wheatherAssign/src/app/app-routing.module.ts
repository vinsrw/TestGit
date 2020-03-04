import { ForecastComponent } from './forecast/forecast.component';
import { TodayComponent } from './today/today.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import {ResolveLocService} from './resolve-loc.service';

const routes: Routes = [
  {path: 'today', component: TodayComponent, resolve:{myWeather: ResolveLocService}},
  {path: 'forecast', component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const weatherRouting = [TodayComponent, ForecastComponent]
