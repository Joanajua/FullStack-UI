import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent  implements OnInit {

  employees: Employee[] = [
    // {
    //   id: '1',
    //   name: 'Jonh',
    //   email: 'jonh@gmail.com',
    //   phone: 12345678,
    //   salary: 100000,
    //   department: 'Finance'
    // },
    // {
    //   id: '2',
    //   name: 'Sarah',
    //   email: 'Sarahh@gmail.com',
    //   phone: 23456789,
    //   salary: 200000,
    //   department: 'IT'
    // },
    // {
    //   id: '3',
    //   name: 'Millie',
    //   email: 'millie@gmail.com',
    //   phone: 987654323,
    //   salary: 300000,
    //   department: 'Data Science'
    // }
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
