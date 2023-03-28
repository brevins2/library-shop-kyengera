import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/Services/serve.service';
import { Order } from 'src/app/interfaces';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {

  order: Order[] = [];
  displayedColumns: string[] = ['ID', 'Title', 'Message', 'Storage', 'Battery', 'Price', 'File', 'Category', 'CustomerName', 'Email', 'Delete'];
    dataSource = this.order;
  constructor(private http: HttpClient, private service: ServeService) { }

  ngOnInit(): void {
    this.getPhoneOrder();
  }

  getPhoneOrder(){
    this.service.getAllOrders().subscribe(result =>{
      this.order = result.data;
      this.dataSource = this.order;
    });
  }

  search(){}
}