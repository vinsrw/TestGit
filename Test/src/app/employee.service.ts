import { Observable } from 'rxjs/Observable';
import { IEmply } from './empl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private url: string = "/assets/data/emp.json";

  constructor(private http: HttpClient) { }

  getEmp(): Observable<IEmply[]> {
    return this.http.get<IEmply[]>(this.url);
    }

}
