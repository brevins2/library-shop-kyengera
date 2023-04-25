import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id = this.router.snapshot.params['id'];
  constructor(private service: ServeService, private router: ActivatedRoute) { }

  ngOnInit(): void {this.getMessages();}

  getMessages(){
    this.service.getAllMessages().subscribe(result =>{
      this.message = result.data;
      this.dataSource = this.message;
    });
  }

  search(){
    alert("search.....");
  }

  delete(id: any) {
    this.service.deleteMessage(id).subscribe();
  }
}