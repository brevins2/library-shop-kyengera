import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {

  public addComputer ! : FormGroup;
  constructor(
    private addBuild: FormBuilder, 
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addComputer = this.addBuild.group({
      Title: [''],
      Category: [''],
      Price: [''],
      File: ['']
    });
  }

  addComputers(){}

  clr(){
    this.addComputer.reset();
  }

  save(){
    this.http.post<any>("http://localhost/3000/Computers", this.addComputer.value)
    .subscribe(res=>{
      alert("added successfully!!");
      this.addComputer.reset();
    },
    error=>{
      alert("something went wrong!!");
    });
  }

  del(){
    this.http.delete<any>('http://localhost/3000/Computers')
    .subscribe(res=>{
      this.addComputer.value;
    });
  }

}
