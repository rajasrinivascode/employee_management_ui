import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 constructor(private employeeService:EmployeeService) { }

  employeesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  employees: Observable<Employee[]>;
  employee : Employee=new Employee();
  deleteMessage=false;
  employeelist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 5,
      stateSave:true,
      lengthMenu:[[5, 10, 20, -1], [5, 10, 20, "All"]],
      processing: true
    };   
    this.employeeService.getemployeeList().subscribe(data =>{
    this.employees =data;
    this.dtTrigger.next();
    })
  }
  
  

  employeeupdateform=new FormGroup({
    employee_id:new FormControl(),
    employee_name:new FormControl(),
    employee_email:new FormControl(),
    employee_branch:new FormControl()
  });

  

  get employeeName(){
    return this.employeeupdateform.get('employee_name');
  }

  get employeeEmail(){
    return this.employeeupdateform.get('employee_type');
  }

  get employeeBranch(){
    return this.employeeupdateform.get('employee_vacation');
  }

  get employeeId(){
    return this.employeeupdateform.get('employee_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
