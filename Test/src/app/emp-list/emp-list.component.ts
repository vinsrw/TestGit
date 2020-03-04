import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  // templateUrl: './emp-list.component.html',
  template: `<h2> Employee List <h2>
                 <ul *ngFor="let emp of employees">
                <li> {{emp.name}} </li>
                </ul>`,
  styleUrls: ['./emp-list.component.css']
})

 
export class EmpListComponent implements OnInit {

  public employees = [];

  constructor(private _empService:  EmployeeService) { }

  ngOnInit() {
  //  this.employees = this._empService.getEmp();
  this._empService.getEmp()
  .subscribe(data => this.employees = data);
  }

}
