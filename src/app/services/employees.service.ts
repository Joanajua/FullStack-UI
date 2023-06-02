import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl = 'https://localhost:7185'

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees')
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest)
  }

  getEmployee(id: string): Observable<Employee> {
    let response = this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id)
    console.log(response)

    return response
  }

  // editEmployee() {
  //   this.http.put(this.baseApiUrl + '/api/employees', )
  // }
}
