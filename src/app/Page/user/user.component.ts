import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ServeService } from 'src/app/Services/serve.service';
import { User } from 'src/app/interfaces';
import { AddUserComponent } from '../add-user/add-user.component';
import { Router } from '@angular/router';

export class Users{
  constructor(
    public id: number,
    public file: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public check: boolean
  ){}
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Users[] =[];
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog,
    private Serve: ServeService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  
  popUp(){
    this.route.navigate(['add user']);
  }

  getUser(){
    this.http.get<any>('http://localhost:3000/register').subscribe(
      response=>{
      this.user = response;
      })
  }

  deleteCompAccess(userDelete: User){
    this.Serve.deleteUser(userDelete).subscribe(()=> this.user = this.user.filter(t => t.id !== userDelete.id));
    this.http.delete('http://localhost:3000/register').
    subscribe(()=>(this.user = this.user.filter((t)=>
    t.id!)));
  }
}
