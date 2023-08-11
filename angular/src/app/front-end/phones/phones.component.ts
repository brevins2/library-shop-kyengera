import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhonePayComponent } from 'src/app/Pay/phone-pay/phone-pay.component';
import { ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { Phones } from 'src/app/interfaces';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phone: Phones[] = [];
  constructor(private http: HttpClient, private router: ActivatedRoute, private service: ServeService) { }

  ngOnInit(): void {
    this.getPhones();
  }

  getPhones(){
    this.service.getAllPhones().subscribe(response=>{
      this.phone = response.data;
    });
  }

  search(){}
}