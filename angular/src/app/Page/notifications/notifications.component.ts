import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/Services/serve.service';
import { Messages } from 'src/app/interfaces';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {

  order: Messages[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Message', 'Delete'];
    dataSource = this.order;
  constructor(private http: HttpClient, private service: ServeService) { }

  ngOnInit(): void {
    this.getPhoneOrder();
  }

  getPhoneOrder(){
    this.service.getAllMessages().subscribe(result =>{
      this.order = result.data;
      this.dataSource = this.order;
    });
  }

  search(){}
}