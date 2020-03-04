import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  // templateUrl: './department-list.component.html',
  template: `
  <h3> Department List </h3>
  <ul class ="items">
  <li (click) = "onSelect(department)" 
   *ngFor = "let dept of department">
  <span class = "badge"> 
  {{dept.id}} </span> {{dept.name}}
  </li>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  department = [
    {"id": 1, "name" : "Angular"},
    {"id": 2, "name" : "Mongo"},
    {"id": 3, "name" : "Express"},
    {"id": 4, "name" : "Mongo"},
    {"id": 5, "name" : "Node"}

  ]

  constructor( private router:Router) { }

  ngOnInit() {
  }

  onSelect(department)
  {
    this.router.navigate(['/department', department.id]);
  }

}
