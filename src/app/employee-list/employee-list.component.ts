import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees : Employee[] = [];
  employee : Employee = new Employee();
  deleteEmployeeMessage : string = "";
  updateEmployeeErrorMeessage : string ="";
  
  constructor(private employeeService:EmployeeService, private router: Router){}
  showForm: boolean = false;

  ngOnInit(){
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe(data => {
      console.log("data :: " + data);
      console.log("data1 :: " + data[1]);

      // this.employee1 = data[1];
      // console.log("employee1 name :: " + this.employee1.firstname);
      // const temp:Date = new Date(this.employee1.dob);
      // console.log(temp.toLocaleDateString('en-GB'));

      this.employees = data;
    });
  }

  editEmployee(emp: Employee) {
    this.showForm = true;
    if(emp) {
      this.employee.id = emp.id;
      this.employee.firstname = emp.firstname;
      this.employee.lastname = emp.lastname;
      this.employee.email = emp.email;
      this.employee.dob = emp.dob;
      this.employee.mobile = emp.mobile;
      this.employee.department.name = emp.department.name;
      this.employee.department.sector = emp.department.sector;
      this.employee.gender = emp.gender;
    }
  }

  // updateEmployee() {
  //   console.log(this.employee);
  //   this.employeeService.updateEmployee(this.employee).subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //     console.log("Error Message :: " + error);
  //   });
  //   this.closeForm();
  //   this.getEmployees();
  // }

  updateEmployee() {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employee).pipe(catchError(error => {
      console.log("Error :: " + error);
      return throwError(() => new Error('Unable to update the selected employee'));
    })).subscribe(data => {
      console.log("data in sub" + data);
    }, error => {
      console.log("Error Message in sub :: " + error);
      this.updateEmployeeErrorMeessage = error;
    });
    this.closeForm();
    this.getEmployees();
    // setTimeout(() => {this.updateEmployeeErrorMeessage = ""}, 30000);
  }

  closeForm() {
    this.showForm = false;
  }

  deleteEmployee(id : number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.deleteEmployeeMessage = data;
      this.getEmployees();
    });
  }

  navigateToEmployeeProfile(id : number) {
    console.log("Employee List id :: " + id);
    setTimeout(()=>{}, 30000);
    this.router.navigate(["employee-profile", id]);

  }


}
