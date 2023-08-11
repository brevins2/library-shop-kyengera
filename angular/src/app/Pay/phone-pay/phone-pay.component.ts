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
  id = this.router.snapshot.params['id']

  buyPhone = new FormGroup({
    Title: new FormControl(''), Message: new FormControl(''), Storage: new FormControl(''), Battery: new FormControl(''),
    Price: new FormControl(''), File: new FormControl(''), CustomerName: new FormControl(''), Email: new FormControl('')});
  
  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService) { }

  ngOnInit(): void {
    this.getCurrentData();
  }

  getCurrentData(){
    this.service.getPhoneWithID(this.router.snapshot.params['id']).subscribe((result: any)=>{
      let x = result.data;
      x.forEach((element: any) => {
        this.buyPhone = new FormGroup({
          Message: new FormControl(element['Message']),
          Title: new FormControl(element['Title']),
          Storage: new FormControl(element['Storage']),
          Battery: new FormControl(element['Battery']),
          Price: new FormControl(element['Price']),
          File: new FormControl(element['File']),
          CustomerName: new FormControl(element['CustomerName']),
          Email: new FormControl(element['Email'])
        });
      });
      this.onephone = x;
    });
  }

  save(){
    this.service.createOrder(this.buyPhone.value).subscribe((result) => {
      this.alert = true;
    });
  }

  logout(){
    this.route.navigate(['users/phones']);
  }

  cancel(){
    this.route.navigate(['users/phones']);
  }

  closeAlert(){
    this.alert = false;
  }
}