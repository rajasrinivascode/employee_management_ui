import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Employee } from '../employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employee : Employee=new Employee();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  employeesaveform=new FormGroup({
    employee_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    employee_email:new FormControl('',[Validators.required,Validators.email]),
    employee_branch:new FormControl()
  });

  saveemployee(saveemployee){
    this.employee=new Employee();   
   this.employee.employee_name=this.employeeName.value;
    this.employee.employee_type=this.employeeType.value;
    this.employee.employee_vacation=this.employeeVacation.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.employeeService.createemployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  get employeeName(){
    return this.employeesaveform.get('employee_name');
  }

  get employeeType(){
    return this.employeesaveform.get('employee_type');
  }

  get employeeVacation(){
    return this.employeesaveform.get('employee_vacation');
  }

  addemployeeForm(){
    this.submitted=false;
    this.employeesaveform.reset();
  }
}
