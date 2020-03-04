import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';


const routes: Routes = [
  {path: 'employee', component: EmployeeListComponent },
  {path: 'department', component: DepartmentListComponent},
  {path: 'department/:id', component:DepartmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [EmployeeListComponent, DepartmentListComponent, DepartmentDetailsComponent];
