import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PhonePayComponent } from 'src/app/Pay/phone-pay/phone-pay.component';
import { ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Storage: string,
    public Battery: string,
    public Price: number,
    public File: string,
    public Brand: string
  ){}
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  api: Api[] = [];
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog,
    private router: ActivatedRoute,
    private service: ServeService
  ) { }

  ngOnInit(): void {
    this.getApi();
  }
  getCurrentDatas(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((results)=>{
      console.log(results);
      return results;
    });
  }

  getApi(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response
      });
  }
}
