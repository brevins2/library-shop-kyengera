import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeService } from 'src/app/Services/serve.service';
import { User } from 'src/app/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User[] =[];
  displayedColumns: string[] = ['ID', 'Email', 'Password', 'ConfirmPassword', 'Edit', 'Delete'];
    dataSource = this.user;
  
  constructor(private http: HttpClient, private Serve: ServeService, private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.Serve.getAllUsers().subscribe(response=>{
      this.user = response.data;
      this.dataSource = this.user;
    })
  }

  open() {
    this.route.navigate(['add user']);
  }

  search(){}

  delete(id: any) {
    this.Serve.deleteUser(id).subscribe(() => { this.getUser() });
  }
}