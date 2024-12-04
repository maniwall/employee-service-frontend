import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee : Employee = new Employee();

  constructor(private employeeService:EmployeeService, private router:Router){}

  

  createEmployee() {
    console.log("firstname :: " + this.employee.firstname);
    console.log("firstname :: " + this.employee.lastname);
    console.log("firstname :: " + this.employee.email);
    console.log("firstname :: " + this.employee.dob);
    console.log("firstname :: " + this.employee.mobile);
    console.log("firstname :: " + this.employee.department.name);
    console.log("firstname :: " + this.employee.department.sector);
    console.log("firstname :: " + this.employee.gender);

    console.log("employee :: " + this.employee);

    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log("Response Data ::" + data);
    });
    this.gotoEmployeeList();
  }

  gotoEmployeeList() {
    this.router.navigate(["/employees"]);
  }

}
