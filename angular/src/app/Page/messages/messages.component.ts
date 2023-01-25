import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/interfaces';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  data: Messages[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    this.http.get<{data: Messages[]}>('http://localhost:8080/Message').subscribe(result =>{
      this.data = result.data;
    });
  }

  search(){
    alert("search.....");
  }

}
