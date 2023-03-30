import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Phones } from 'src/app/interfaces';

@Component({
  selector: 'app-phone-pay',
  templateUrl: './phone-pay.component.html',
  styleUrls: ['./phone-pay.component.css']
})

export class PhonePayComponent implements OnInit {

  api: Phones[] = [];
  onephone: Phones[] = [];
  alert = false;

  buyPhone = new FormGroup({
    Title: new FormControl(''), Message: new FormControl(''), Storage: new FormControl(''), Battery: new FormControl(''),
    Price: new FormControl(''), File: new FormControl(''), CustomerName: new FormControl(''), Email: new FormControl('')});
  
  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService) { }

  ngOnInit(): void {
    this.getCurrentData();
    this.service.getAllPhones().subscribe( res=> {
      this.api = res.data;
    })
    this.service.getPhoneWithID(this.router.snapshot.params['id']).subscribe(result => {
      this.onephone = result.data;
    })
  }

  getCurrentData(){
    this.service.getPhoneWithID(this.router.snapshot.params['id']).subscribe((result: any)=>{
      this.buyPhone = new FormGroup({
        Message: new FormControl(result['Message']),
        Title: new FormControl(result['Title']),
        Storage: new FormControl(result['Storage']),
        Battery: new FormControl(result['Battery']),
        Price: new FormControl(result['Price']),
        File: new FormControl(result['File']),
        CustomerName: new FormControl(result['CustomerName']),
        Email: new FormControl(result['Email'])
      });
    });
  }

  save(){
    this.service.createOrder(this.buyPhone.value).subscribe((result) => {
      this.alert = true;
      console.log(result);
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