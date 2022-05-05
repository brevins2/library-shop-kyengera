import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ServeService } from 'src/app/Services/serve.service';
import { User } from 'src/app/interfaces';
import { AddUserComponent } from '../add-user/add-user.component';

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
    private Serve: ServeService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  
  popUp(idToPass: any){
    return this.dialogRef.open(AddUserComponent,{
      data:{
        id: idToPass
      }
    });
  }

  getUser(){
    this.http.get<any>('http://localhost:3000/register').subscribe(
      response=>{
      this.user = response;
      })
  }

  updateUser(userUpdate: User){
    this.Serve.updateUser(userUpdate).subscribe();
  }

  deleteCompAccess(userDelete: User){
    this.Serve.deleteUser(userDelete).subscribe(()=> this.user = this.user.filter(t => t.id !== userDelete.id));
    this.http.delete('http://localhost:3000/register').
    subscribe(()=>(this.user = this.user.filter((t)=>
    t.id!)));
  }
}
