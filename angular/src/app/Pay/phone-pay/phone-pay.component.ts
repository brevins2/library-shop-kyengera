import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Phones } from 'src/app/interfaces';

@Component({
  selector: 'app-phone-pay',
  templateUrl: './phone-pay.component.html',
  styleUrls: ['./phone-pay.component.css']
})

export class PhonePayComponent implements OnInit {

  api: Phones[] = [];
  alert = false;
  buyPhone = new FormGroup({
    Message: new FormControl(''),
    Title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl('')
  });
  
  constructor(private router: ActivatedRoute, private route: Router,
  private service: ServeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrentData();
  }

  getData(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response
      });
  }

  getCurrentData(){
    this.service.getPhoneWithID(this.router.snapshot.params['id']).subscribe((result: any)=>{
      this.buyPhone = new FormGroup({
        Message: new FormControl(result['Message']),
        Title: new FormControl(result['Title']),
        Storage: new FormControl(result['Storage']),
        Battery: new FormControl(result['Battery']),
        Price: new FormControl(result['Price'])
      });
    });
  }

  save(){
    this.service.createOrder(this.buyPhone.value).subscribe((result) => {
      this.alert = true;
    });
  }

  logout(){
    this.route.navigate(['login']);
  }

  cancel(){
    this.route.navigate(['users/phones']);
  }

  closeAlert(){
    this.alert = false;
  }
}
