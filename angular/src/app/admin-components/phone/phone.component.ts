import { Component, OnInit } from '@angular/core';
import { Phones } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})

export class PhoneComponent implements OnInit {

  phones: Phones[] = [];
  public searched: string = '';
  displayedColumns: string[] = ['Title', 'Storage', 'Battrey', 'Price', 'Front', 'Back', 'Side', 'Brand', 'Edit', 'Delete'];
    dataSource = this.phones;
  constructor(private Serve: ServeService, private route: Router) { }

  ngOnInit(): void {
    this.getApi();
  }

  // getting data
  getApi(){
   this.Serve.getAllPhones().subscribe(response =>{
      this.phones = response.data;
      this.dataSource = this.phones;
    });
  }

  open() {
    this.route.navigate(['add phone']);
  }

  search(){}

  delete(id: any) {
    this.Serve.deletePhone(id).subscribe(() => this.getApi);
  }
}