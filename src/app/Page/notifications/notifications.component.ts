import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Data{
  constructor(
  public id: number,
  public file: string,
  public title: string,
  public storage: string,
  public battery: string,
  public price : number,
  public Title: string,
  public Price: string,
  public Category: string,
  public Message: string,
  public File: string,
  public Brand: string,
  public Battery: string,
  public Storage: string
  ){}
}
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  data: Data[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPhoneOrder();
  }

  getPhoneOrder(){
    this.http.get<any>('http://localhost:3000/Orders').subscribe(result =>{
      this.data = result;
    })
  }

  search(){}
}
