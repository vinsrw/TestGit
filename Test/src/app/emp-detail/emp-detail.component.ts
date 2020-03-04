import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-detail',
  // templateUrl: './emp-detail.component.html',
  template: `<h2> Employee List <h2>
                 <ul *ngFor="let emp of employees">
                <li> {{emp.id}}. {{emp.name}} - {{emp.age}} </li>
                </ul>`,
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees:any = [];


  constructor(private _empService: EmployeeService) { }

  ngOnInit() {

    // this.employees = this._empService.getEmp();
    this._empService.getEmp()
  .subscribe(data => this.employees = data);
  }

}
