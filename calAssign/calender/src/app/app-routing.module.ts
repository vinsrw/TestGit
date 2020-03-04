import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { WeekComponent } from './week/week.component';


const routes: Routes = [

  { path: 'Day', component: DayComponent},
  { path: 'Month', component: MonthComponent},
  { path: 'Week', component: WeekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
