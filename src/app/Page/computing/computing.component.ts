import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ComputerAccess, Movies } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';
import { compAccess } from 'src/app/values';
import { AddComputerComponent } from '../add-computer/add-computer.component';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Category: string,
    public Price: number,
    public File: string
  ){}
}

@Component({
  selector: 'app-computing',
  templateUrl: './computing.component.html',
  styleUrls: ['./computing.component.css']
})
export class ComputingComponent implements OnInit {

  id: number = 0;
  api: Api[] = [];
  compute: ComputerAccess[] = compAccess;
  addComputer = new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    Category: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl('')
  });
  constructor(private http: HttpClient,private Serve: ServeService,private dialogRef: MatDialog) { 
    console.log(this.compute);
  }

  ngOnInit(): void {
    this.getAPi();
  }

  getAPi(){
    this.http.get<any>('http://localhost:3000/Computers').subscribe(
      response=>{
        this.api = response;
      });
  }

  deleteCompAccess(computeDelete: ComputerAccess){
    this.Serve.deleteCompAccess(computeDelete).subscribe(()=> this.compute = this.compute.filter(t => t.id !== computeDelete.id));
    this.http.delete('http://localhost:3000/Computers').
    subscribe(()=>(this.compute = this.compute.filter((t)=>
    t.id!)));
  }

  updateCompAccess(idToPass: any){
    // this.Serve.updateCompAccess(computeUpdate).subscribe();
    return this.dialogRef.open(AddComputerComponent,{
      data:{
        id: idToPass
      }
    });
  }
}
