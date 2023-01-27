import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Phones } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phones: Phones[] = [];
  constructor(private http: HttpClient, private Serve: ServeService, private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getApi();
  }

  // getting data
  getApi(){
    this.http.get<{data: Phones[]}>('http://localhost:8080/Phones').subscribe(response =>{
      this.phones = response.data;
    });
  }

  open() {
    this.route.navigate(['add phone']);
  }

  search(){}
}