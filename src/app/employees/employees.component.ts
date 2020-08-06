import { Employee } from './../shared/models/employee';
import { EmployeeService } from './../core/services/Employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employee/employeelist.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
employee:Employee[];
 constructor(private employeeService: EmployeeService) { }

  ngOnInit(){
    // we wanna initialize any data, call the APi etc
    //in class first constructure.second ngoninit.
    //only when you subscribe could you get data.
    this.employeeService.getAllEmployees()
    .subscribe( g => {
      this.employee = g;
      console.log('inside Genres Component init method');
      console.log(this.employee);
    } )
  }

}
