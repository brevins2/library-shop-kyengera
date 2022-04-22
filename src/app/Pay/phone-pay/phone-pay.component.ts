import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  addPhone = new FormGroup({
    id: new FormControl(''),
    file: new FormControl(''),
    title: new FormControl(''),
    storage: new FormControl(''),
    battery: new FormControl(''),
    price: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private service: ServeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrentData();
  }

  getCurrentData(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((result)=>{
      this.addPhone = new FormGroup({
        id: new FormControl(result),
        file: new FormControl(''),
        title: new FormControl(''),
        storage: new FormControl(''),
        battery: new FormControl(''),
        price: new FormControl('')
      });
    });
  }

  save(){}

  clr(){}

  del(){}
}