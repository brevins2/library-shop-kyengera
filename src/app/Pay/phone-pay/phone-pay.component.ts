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
  buyPhone = new FormGroup({
    id: new FormControl(''),
    File: new FormControl(''),
    Title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrentData();
  }

  getCurrentData(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((result: any)=>{
      this.buyPhone = new FormGroup({
        id: new FormControl(result['id']),
        File: new FormControl(result['File']),
        Title: new FormControl(result['Title']),
        Storage: new FormControl(result['Storage']),
        Battery: new FormControl(result['Battery']),
        Price: new FormControl(result['Price'])
      });
    });
  }

  save(){}

  cancel(){
    // alert('done');
    this.route.navigate(['users/phones']);
  }
}