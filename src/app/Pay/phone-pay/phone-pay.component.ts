import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

export class Data{
  constructor(
  public id: number,
  public file: string,
  public title: string,
  public storage: string,
  public battery: string,
  public price : number
  ){}
}

@Component({
  selector: 'app-phone-pay',
  templateUrl: './phone-pay.component.html',
  styleUrls: ['./phone-pay.component.css']
})
export class PhonePayComponent implements OnInit {

  data: Data[] = [];
  alert = false;
  buyPhone = new FormGroup({
    id: new FormControl(''),
    Message: new FormControl(''),
    Title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrentData();
  }

  getData(){
    this.http.get('http//localhost/3000/Phones').subscribe(result=>{
      result = this.data;
    });
  }

  getCurrentData(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((result: any)=>{
      this.buyPhone = new FormGroup({
        id: new FormControl(result['id']),
        Message: new FormControl(result['Message']),
        Title: new FormControl(result['Title']),
        Storage: new FormControl(result['Storage']),
        Battery: new FormControl(result['Battery']),
        Price: new FormControl(result['Price'])
      });
    });
  }

  save(){
    this.http.post('http://localhost:3000/Orders', this.buyPhone.value).subscribe((result) => {
      this.alert = true;
      return result;
    });
  }

  cancel(){
    this.route.navigate(['users/phones']);
  }

  closeAlert(){
    this.alert = false;
  }
}