import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Data{
  constructor(
  public id: number,
  public name: string,
  public email: string,
  public message: string
  ){}
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  data: Data[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPhoneOrder();
  }

  getPhoneOrder(){
    this.http.get<any>('http://localhost:8080/Message').subscribe(result =>{
      this.data = result;
    });
  }

  search(){
    alert("search.....");
  }

}
