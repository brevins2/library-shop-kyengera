import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { MatDialog } from '@angular/material/dialog';
import { ComputerPayComponent } from 'src/app/Pay/computer-pay/computer-pay.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Storage: string,
    public Battery: string,
    public Price: number,
    public File: string,
    public Brand: string,
    public Category: string
  ){}
}


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  api: Api[] = [];
  comp: Api[] = [];
  public sendMessage!: FormGroup;
  alerts = false;

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private service: ServeService,
    private dialogRef: MatDialog,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getApi();
    this.getApiComputer();
    this.sendMessage = this.formBuilder.group({
      email: [''],
      name: [''],
      message: ['']
    });

    this.http.get<any>("http://localhost:8080/api/messages").subscribe(result => {
        console.log(result);
        console.log("great work")
    });
  }

  getCurrentDatas(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((results)=>{
      console.log(results);
      return results;
    });
  }

  getApi(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response
      });
  }

  // computers
  watch(){
    this.dialogRef.open(ComputerPayComponent);
  }

  getApiComputer(){
    this.http.get<any>("http://localhost:3000/Computers").subscribe( response=>
      {
        this.comp = response;
      });
  }

  // contact information
  // http://localhost:3000/Message
  sendMessages(){
//     this.serve.
    this.http.post<any>("http://localhost:8080/api/messages", this.sendMessage.value).subscribe(response =>{
      this.sendMessage.reset();
    });
  }
}
