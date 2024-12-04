import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { catchError, concat, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = "http://localhost:8080";
  // private baseUrl:string = "/";

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + '/employee');
  }

  createEmployee(employee : Employee):Observable<string>{
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<string>(this.baseUrl + '/employee', employee, { headers, responseType: 'text' as 'json'  });  
  }

  updateEmployee(employee : Employee):Observable<string>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const newLocal = this.http.put<string>(this.baseUrl + '/employee', employee, { headers, responseType: 'text' as 'json' });  
    console.log("newLocal :: " + newLocal);
    
    return newLocal;
    
    // return this.http.put<string>(this.baseUrl + '/employee', employee, { headers, responseType: 'text' as 'json'  });  

  }

  deleteEmployee(id : number):Observable<string> {

    const headers = new HttpHeaders();
    return this.http.delete<string>(this.baseUrl + '/employee/'+ id, {headers, responseType: 'text' as 'json' });
  }

  getEmployeeById(id : number):Observable<Employee> {
    const headers = new HttpHeaders();
    return this.http.get<Employee>(this.baseUrl + '/employee/'+ id);
  }
}
