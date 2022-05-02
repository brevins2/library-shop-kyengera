import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ComputerPayComponent } from 'src/app/Pay/computer-pay/computer-pay.component';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Price: number,
    public Category: string,
    public File: string,
    public Brand: string
  ){}
}

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  comp: Api[] = [];
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getApi();
  }

  watch(){
    this.dialogRef.open(ComputerPayComponent);
  }
  
  getApi(){
    this.http.get<any>('http://localhost:3000/Computers').subscribe( response=>
      {
        this.comp = response;
      });
  }

  search(){}
}
