import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './core/services/Employee.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// http://localhost:2283/api/employee/employeelist
const routes: Routes = [
  {path:'employee/employeeList',component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
