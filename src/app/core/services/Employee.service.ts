import { Employee } from './../../shared/models/employee';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apiService:ApiService) { }
  getAllEmployees():Observable<Employee[]>{
       //http://localhost:2283/api/employee/employeelist
        return this.apiService.getAll('employees');
}}
