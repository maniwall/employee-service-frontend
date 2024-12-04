import { Department } from "./department";

export class Employee {

    id:number = 0;
    firstname:string="";
    lastname:string="";
    email:string="";
    dob:Date=new Date();
    mobile:string=""
    gender:string="";
    age:number=0;

    department:Department=new Department();


}
