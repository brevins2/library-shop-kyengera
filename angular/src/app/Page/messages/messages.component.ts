import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message: Messages[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Message', 'Delete'];
  dataSource = this.message;
  constructor(private http: HttpClient, private service: ServeService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    this.service.getAllMessages().subscribe(result =>{
      this.message = result.data;
      this.dataSource = this.message;
    });
  }

  search(){
    alert("search.....");
  }
}