import { Component, Inject, OnInit } from '@angular/core';
import { ServeService } from 'src/app/Services/serve.service';
import { User } from 'src/app/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User[] =[];
  idPick = '';
  public searched: string = '';
  displayedColumns: string[] = ['Email', 'Password', 'ConfirmPassword', 'Edit', 'Delete'];
    dataSource = this.user;
  
  constructor(private Serve: ServeService, private route: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.Serve.getAllUsers().subscribe(response=>{
      this.user = response.data;
      this.dataSource = this.user;
    })
  }

  openAdd() {
    this.route.navigate(['add user']);
  }

  open(id: any) {
    this.idPick = id;   
  }

  delete(id: any) {
    this.Serve.deleteUser(id).subscribe(() => { this.getUser() });
  }
}