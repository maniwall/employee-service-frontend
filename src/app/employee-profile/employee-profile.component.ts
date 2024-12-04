import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent {
  
  id:number = 0;
  
  employee:Employee = new Employee();

  constructor(private empService: EmployeeService, private route:ActivatedRoute){}

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    console.log("Employee profile id :: " + this.id);
    setTimeout(()=>{console.log("Employee profile id :: " + this.id)}, 30000);
    this.empService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
      console.log("employee data :: " + this.employee);
    });
    setTimeout(()=>{console.log("Employee profile id1 :: " + this.id)}, 30000);
  }

}
